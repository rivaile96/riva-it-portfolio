'use client'
import dynamic from 'next/dynamic'

const GridScan = dynamic(() => import('./GridScan'), { ssr: false })

export default function GridScanWrapper() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        width: '100vw',
        height: '100vh',
      }}
    >
      <GridScan
        sensitivity={0.55}
        lineThickness={1}
        linesColor="#2F293A"
        scanColor="#00ADB5"
        scanOpacity={0.4}
        gridScale={0.1}
        lineStyle="solid"
        lineJitter={0.1}
        scanDirection="pingpong"
        noiseIntensity={0.01}
        scanGlow={0.5}
        scanSoftness={2}
        scanDuration={2}
        scanDelay={2}
        scanOnClick={false}
      />
    </div>
  )
}
