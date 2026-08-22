'use client'
import dynamic from 'next/dynamic'

const ParticlesBackground = dynamic(
  () => import('@/components/animations/ParticlesBackground'),
  { ssr: false }
)

export default function ParticlesWrapper() {
  return <ParticlesBackground />
}
