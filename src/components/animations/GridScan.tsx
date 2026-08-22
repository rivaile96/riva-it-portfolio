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

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace('#', '')
  const bigint = parseInt(clean, 16)
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  }
}

export default function GridScan({
  sensitivity = 0.55,
  lineThickness = 1,
  linesColor = '#2F293A',
  scanColor = '#3B82F6',
  scanOpacity = 0.4,
  gridScale = 0.1,
  lineStyle = 'solid',
  lineJitter = 0.1,
  scanDirection = 'pingpong',
  noiseIntensity = 0.01,
  scanGlow = 0.5,
  scanSoftness = 2,
  scanDuration = 2,
  scanDelay = 2,
  scanOnClick = false,
  style,
  className,
}: GridScanProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const stateRef = useRef({
    scanPos: 0,          // 0..1 normalized position
    scanVel: 1,          // +1 down / -1 up
    phase: 'scanning' as 'scanning' | 'waiting',
    waitTimer: 0,
    lastTime: 0,
    mouseX: -1,
    mouseY: -1,
  })

  // Seeded noise helper (simple but fast)
  const noise = useCallback((x: number, y: number, seed: number) => {
    const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.3) * 43758.5453
    return n - Math.floor(n)
  }, [])

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = canvas.width
    const H = canvas.height

    // Cell size: gridScale 0.1 = 10% of the shorter dim
    const cellSize = Math.max(20, Math.min(W, H) * gridScale * (1 / 0.1) * 0.5)
    // clamp cell between 20..200
    const cell = Math.min(200, Math.max(20, cellSize))

    // Clear
    ctx.clearRect(0, 0, W, H)

    // ---- Draw grid lines ----
    const lc = hexToRgb(linesColor)
    ctx.strokeStyle = `rgb(${lc.r},${lc.g},${lc.b})`
    ctx.lineWidth = lineThickness

    if (lineStyle === 'dashed') ctx.setLineDash([cell * 0.3, cell * 0.2])
    else if (lineStyle === 'dotted') ctx.setLineDash([2, cell * 0.25])
    else ctx.setLineDash([])

    const cols = Math.ceil(W / cell) + 1
    const rows = Math.ceil(H / cell) + 1

    // Vertical lines
    for (let i = 0; i <= cols; i++) {
      const x = i * cell
      ctx.beginPath()
      if (lineJitter > 0) {
        // Jitter each segment slightly
        for (let y = 0; y <= H; y += cell / 4) {
          const jx = x + (noise(i, y, 1) - 0.5) * cell * lineJitter
          if (y === 0) ctx.moveTo(jx, y)
          else ctx.lineTo(jx, y)
        }
      } else {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H)
      }
      ctx.stroke()
    }

    // Horizontal lines
    for (let j = 0; j <= rows; j++) {
      const y = j * cell
      ctx.beginPath()
      if (lineJitter > 0) {
        for (let x = 0; x <= W; x += cell / 4) {
          const jy = y + (noise(x, j, 2) - 0.5) * cell * lineJitter
          if (x === 0) ctx.moveTo(x, jy)
          else ctx.lineTo(x, jy)
        }
      } else {
        ctx.moveTo(0, y)
        ctx.lineTo(W, y)
      }
      ctx.stroke()
    }

    ctx.setLineDash([])

    // ---- Noise overlay ----
    if (noiseIntensity > 0) {
      const imageData = ctx.getImageData(0, 0, W, H)
      const d = imageData.data
      const seed = Date.now() * 0.001
      for (let i = 0; i < d.length; i += 4) {
        const px = (i / 4) % W
        const py = Math.floor(i / 4 / W)
        const n = (noise(px * 0.05, py * 0.05, seed) - 0.5) * noiseIntensity * 255
        d[i] = Math.min(255, Math.max(0, d[i] + n))
        d[i + 1] = Math.min(255, Math.max(0, d[i + 1] + n))
        d[i + 2] = Math.min(255, Math.max(0, d[i + 2] + n))
      }
      ctx.putImageData(imageData, 0, 0)
    }

    // ---- Scan beam ----
    const sc = hexToRgb(scanColor)
    const scanY = stateRef.current.scanPos * H
    const beamH = H * 0.08 * scanSoftness // beam spread in pixels
    const glowH = H * 0.15 * (1 + scanGlow)

    // Outer glow gradient
    const glowGrad = ctx.createLinearGradient(0, scanY - glowH, 0, scanY + glowH)
    glowGrad.addColorStop(0, `rgba(${sc.r},${sc.g},${sc.b},0)`)
    glowGrad.addColorStop(0.4, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.3 * scanGlow})`)
    glowGrad.addColorStop(0.5, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * scanGlow})`)
    glowGrad.addColorStop(0.6, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.3 * scanGlow})`)
    glowGrad.addColorStop(1, `rgba(${sc.r},${sc.g},${sc.b},0)`)
    ctx.fillStyle = glowGrad
    ctx.fillRect(0, scanY - glowH, W, glowH * 2)

    // Core beam gradient
    const beamGrad = ctx.createLinearGradient(0, scanY - beamH, 0, scanY + beamH)
    beamGrad.addColorStop(0, `rgba(${sc.r},${sc.g},${sc.b},0)`)
    beamGrad.addColorStop(0.45, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.6})`)
    beamGrad.addColorStop(0.5, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity})`)
    beamGrad.addColorStop(0.55, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.6})`)
    beamGrad.addColorStop(1, `rgba(${sc.r},${sc.g},${sc.b},0)`)
    ctx.fillStyle = beamGrad
    ctx.fillRect(0, scanY - beamH, W, beamH * 2)

    // Bright center line
    ctx.beginPath()
    ctx.moveTo(0, scanY)
    ctx.lineTo(W, scanY)
    ctx.strokeStyle = `rgba(${sc.r},${sc.g},${sc.b},${Math.min(1, scanOpacity * 1.5)})`
    ctx.lineWidth = lineThickness + 0.5
    ctx.stroke()

    // ---- Mouse sensitivity highlight ----
    if (sensitivity > 0 && stateRef.current.mouseX >= 0) {
      const mx = stateRef.current.mouseX
      const my = stateRef.current.mouseY
      const r = Math.min(W, H) * 0.12 * sensitivity
      const mg = ctx.createRadialGradient(mx, my, 0, mx, my, r)
      mg.addColorStop(0, `rgba(${sc.r},${sc.g},${sc.b},${scanOpacity * 0.25 * sensitivity})`)
      mg.addColorStop(1, `rgba(${sc.r},${sc.g},${sc.b},0)`)
      ctx.fillStyle = mg
      ctx.beginPath()
      ctx.arc(mx, my, r, 0, Math.PI * 2)
      ctx.fill()
    }
  }, [linesColor, scanColor, scanOpacity, gridScale, lineThickness, lineStyle, lineJitter,
      noiseIntensity, scanGlow, scanSoftness, sensitivity, noise])

  const tick = useCallback((time: number) => {
    const s = stateRef.current
    const dt = Math.min((time - s.lastTime) / 1000, 0.05) // cap delta at 50ms
    s.lastTime = time

    if (s.phase === 'waiting') {
      s.waitTimer -= dt
      if (s.waitTimer <= 0) {
        s.phase = 'scanning'
        // Reverse for pingpong
        if (scanDirection === 'pingpong') s.scanVel *= -1
        else if (scanDirection === 'up') s.scanVel = -1
        else s.scanVel = 1
      }
    } else {
      // Travel speed: full height in scanDuration seconds
      s.scanPos += s.scanVel * (dt / scanDuration)

      const hitBottom = s.scanPos >= 1
      const hitTop = s.scanPos <= 0

      if (hitBottom || hitTop) {
        s.scanPos = hitBottom ? 1 : 0
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
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    resize()
    const ro = new ResizeObserver(resize)
    if (canvas.parentElement) ro.observe(canvas.parentElement)

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      stateRef.current.mouseX = e.clientX - rect.left
      stateRef.current.mouseY = e.clientY - rect.top
    }

    const onMouseLeave = () => {
      stateRef.current.mouseX = -1
      stateRef.current.mouseY = -1
    }

    const onClick = () => {
      if (scanOnClick) {
        stateRef.current.phase = 'scanning'
        stateRef.current.waitTimer = 0
      }
    }

    // Init scan direction
    stateRef.current.scanVel = scanDirection === 'up' ? -1 : 1
    stateRef.current.scanPos = scanDirection === 'up' ? 1 : 0

    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)
    canvas.addEventListener('click', onClick)

    stateRef.current.lastTime = performance.now()
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      canvas.removeEventListener('click', onClick)
    }
  }, [tick, scanDirection, scanOnClick])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: 'block',
        width: '100%',
        height: '100%',
        ...style,
      }}
    />
  )
}
