'use client'
import dynamic from 'next/dynamic'

const Lightfall = dynamic(() => import('./Lightfall'), { ssr: false })

export default function LightfallWrapper() {
  return (
    <Lightfall
      colors={['#e91414', '#EAB308', '#F97316']}
      backgroundColor="#0a0a0a"
      speed={0.2}
      streakCount={1}
      streakWidth={1}
      streakLength={0.8}
      density={0.4}
      twinkle={0.6}
      glow={0.8}
      backgroundGlow={0.3}
      zoom={2}
      opacity={0.65}
      mouseInteraction={false}
      mouseStrength={0.5}
      mouseRadius={1}
    />
  )
}
