'use client'
import dynamic from 'next/dynamic'

const Lightfall = dynamic(() => import('./Lightfall'), { ssr: false })

export default function LightfallWrapper() {
  return (
    <Lightfall
      colors={['#e91414', '#EAB308', '#F97316']}
      backgroundColor="#0a0a0a"
      speed={0.2}
      streakCount={2}
      streakWidth={1}
      streakLength={1}
      density={0.6}
      twinkle={0.9}
      glow={1}
      backgroundGlow={0.5}
      zoom={3}
      opacity={0.75}
      mouseInteraction={false}
      mouseStrength={0.5}
      mouseRadius={1}
    />
  )
}
