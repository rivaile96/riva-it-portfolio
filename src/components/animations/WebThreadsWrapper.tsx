'use client'

import dynamic from 'next/dynamic'

const WebThreads = dynamic(() => import('./WebThreads'), { ssr: false })

export default function WebThreadsWrapper() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <WebThreads
        color1="#FFD369"
        color2="#EAB308"
        color3="#EEEEEE"
        speed={0.2}
        threadCount={6}
        frequency={5}
        spread={0.18}
        taper={1}
        position={0.5}
        fanMode="center"
        glow={0.02}
        falloff={0.6}
        thickness={1.1}
        brightness={0.6}
        opacity={1}
        mirror
        shimmer={false}
        grain
        grainIntensity={0.05}
        mouseInteraction
        mouseStrength={0.3}
      />
    </div>
  )
}
