'use client'

import { useEffect, useRef, useCallback } from 'react'

interface GridScanProps {
  sensitivity?: number
  lineThickness?: number
  linesColor?: string
  scanColor?: string
  scanOpacity?: number
  gridScale?: number
  lineStyle?: 'solid' | 'dashed' | 'dotted'
  lineJitter?: number
  scanDirection?: 'up' | 'down' | 'pingpong'
  noiseIntensity?: number
  scanGlow?: number
  scanSoftness?: number
  scanDuration?: number
  scanDelay?: number
  scanOnClick?: boolean
  style?: React.CSSProperties
  className?: string
}

function hexToRgb(hex: string) {
  const clean = hex.replace('#', '')
  const n = parseInt(clean, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export default function GridScan({
  lineThickness = 1,
  linesColor = '#2F293A',
  scanColor = '#00ADB5',
  scanOpacity = 0.4,
  gridScale = 0.1,
  lineStyle = 'solid',
  lineJitter = 0.1,
  scanDirection = 'pingpong',
  scanGlow = 0.5,
  scanSoftness = 2,
  scanDuration = 2,
  scanDelay = 2,
  scanOnClick = false,
  style,
  className,
}: GridScanProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const offscreenRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number>(0)
  const stateRef = useRef({
    scanPos: 0,
    scanVel: 1,
    phase: 'scanning' as 'scanning' | 'waiting',
    waitTimer: 0,
    lastTime: 0,
    W: 0,
    H: 0,
    gridDirty: true,
  })

  // Tiny seeded noise — only used for jitter, not per-pixel
  const jitterVal = useCallback((i: number, seed: number) => {
    const s = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453
    return s - Math.floor(s)
  }, [])

  // Draw grid to offscreen canvas (only when size changes)
  const buildGrid = useCallback((W: number, H: number) => {
    const off = document.createElement('canvas')
    off.width = W
    off.height = H
    const ctx = off.getContext('2d')!
    ctx.clearRect(0, 0, W, H)

    const cell = Math.min(200, Math.max(24, Math.min(W, H) * gridScale * 5))
    const cols = Math.ceil(W / cell) + 1
    const rows = Math.ceil(H / cell) + 1
    const lc = hexToRgb(linesColor)

    ctx.strokeStyle = `rgb(${lc.r},${lc.g},${lc.b})`
    ctx.lineWidth = lineThickness
    if (lineStyle === 'dashed') ctx.setLineDash([cell * 0.3, cell * 0.2])
    else if (lineStyle === 'dotted') ctx.setLineDash([2, cell * 0.25])
    else ctx.setLineDash([])

    // Vertical
    for (let i = 0; i <= cols; i++) {
      const x = i * cell
      ctx.beginPath()
      if (lineJitter > 0) {
        for (let seg = 0; seg <= 8; seg++) {
          const y = (H / 8) * seg
          const jx = x + (jitterVal(i * 8 + seg, 1) - 0.5) * cell * lineJitter
          seg === 0 ? ctx.moveTo(jx, y) : ctx.lineTo(jx, y)
        }
      } else {
        ctx.moveTo(x, 0); ctx.lineTo(x, H)
      }
      ctx.stroke()
    }

    // Horizontal
    for (let j = 0; j <= rows; j++) {
      const y = j * cell
      ctx.beginPath()
      if (lineJitter > 0) {
        for (let seg = 0; seg <= 8; seg++) {
          const x = (W / 8) * seg
          const jy = y + (jitterVal(j * 8 + seg, 2) - 0.5) * cell * lineJitter
          seg === 0 ? ctx.moveTo(x, jy) : ctx.lineTo(x, jy)
        }
      } else {
        ctx.moveTo(0, y); ctx.lineTo(W, y)
      }
      ctx.stroke()
    }

    ctx.setLineDash([])
    offscreenRef.current = off
  }, [linesColor, lineThickness, lineStyle, lineJitter, gridScale, jitterVal])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const { W, H } = stateRef.current

    // Rebuild offscreen grid only when size changed
    if (stateRef.current.gridDirty || !offscreenRef.current) {
      buildGrid(W, H)
      stateRef.current.gridDirty = false
    }

    ctx.clearRect(0, 0, W, H)

    // Stamp pre-rendered grid (single drawImage call)
    if (offscreenRef.current) ctx.drawImage(offscreenRef.current, 0, 0)

    // Scan beam
    const sc = hexToRgb(scanColor)
    const scanY = stateRef.current.scanPos * H
    const beamH = H * 0.05 * scanSoftness
    const glowH = H * 0.12 * (1 + scanGlow)

    // Outer glow
    const gg = ctx.createLinearGradient(0, scanY - glowH, 0, scanY + glowH)
    gg.addColorStop(0,   `rgba(${sc.r},${sc.g},${sc.b},0)`)
    gg.addColorStop(0.4, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.25 * scanGlow})`)
    gg.addColorStop(0.5, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * scanGlow * 0.6})`)
    gg.addColorStop(0.6, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.25 * scanGlow})`)
    gg.addColorStop(1,   `rgba(${sc.r},${sc.g},${sc.b},0)`)
    ctx.fillStyle = gg
    ctx.fillRect(0, scanY - glowH, W, glowH * 2)

    // Core beam
    const bg = ctx.createLinearGradient(0, scanY - beamH, 0, scanY + beamH)
    bg.addColorStop(0,   `rgba(${sc.r},${sc.g},${sc.b},0)`)
    bg.addColorStop(0.45,`rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.5})`)
    bg.addColorStop(0.5, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity})`)
    bg.addColorStop(0.55,`rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.5})`)
    bg.addColorStop(1,   `rgba(${sc.r},${sc.g},${sc.b},0)`)
    ctx.fillStyle = bg
    ctx.fillRect(0, scanY - beamH, W, beamH * 2)

    // Bright center line
    ctx.beginPath()
    ctx.moveTo(0, scanY)
    ctx.lineTo(W, scanY)
    ctx.strokeStyle = `rgba(${sc.r},${sc.g},${sc.b},${Math.min(1, scanOpacity * 1.8)})`
    ctx.lineWidth = lineThickness + 0.5
    ctx.stroke()
  }, [scanColor, scanOpacity, scanGlow, scanSoftness, lineThickness, buildGrid])

  const tick = useCallback((time: number) => {
    const s = stateRef.current
    const dt = Math.min((time - s.lastTime) / 1000, 0.05)
    s.lastTime = time

    if (s.phase === 'waiting') {
      s.waitTimer -= dt
      if (s.waitTimer <= 0) {
        s.phase = 'scanning'
        if (scanDirection === 'pingpong') s.scanVel *= -1
        else s.scanVel = scanDirection === 'up' ? -1 : 1
      }
    } else {
      s.scanPos += s.scanVel * (dt / scanDuration)
      if (s.scanPos >= 1 || s.scanPos <= 0) {
        s.scanPos = s.scanPos >= 1 ? 1 : 0
        s.phase = 'waiting'
        s.waitTimer = scanDelay
      }
    }

    draw()
    rafRef.current = requestAnimationFrame(tick)
  }, [draw, scanDirection, scanDuration, scanDelay])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (!rect) return
      const W = Math.round(rect.width)
      const H = Math.round(rect.height)
      if (canvas.width === W && canvas.height === H) return
      canvas.width = W
      canvas.height = H
      stateRef.current.W = W
      stateRef.current.H = H
      stateRef.current.gridDirty = true
    }

    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    const onClick = () => {
      if (scanOnClick) {
        stateRef.current.phase = 'scanning'
        stateRef.current.waitTimer = 0
      }
    }
    canvas.addEventListener('click', onClick)

    stateRef.current.scanVel = scanDirection === 'up' ? -1 : 1
    stateRef.current.scanPos = scanDirection === 'up' ? 1 : 0
    stateRef.current.lastTime = performance.now()
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.removeEventListener('click', onClick)
    }
  }, [tick, scanDirection, scanOnClick])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  )
}
