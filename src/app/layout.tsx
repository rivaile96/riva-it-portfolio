import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import GridScanWrapper from '@/components/animations/GridScanWrapper'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Riva Imanudin — IT Field Engineer',
  description:
    'IT Field Engineer specializing in RFID/Auto-ID system integration, Linux server administration, and enterprise network infrastructure. Based in South Jakarta, Indonesia.',
  openGraph: {
    title: 'Riva Imanudin — IT Field Engineer',
    description:
      'IT Field Engineer specializing in RFID/Auto-ID system integration, Linux server administration, and enterprise network infrastructure.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <GridScanWrapper />
        {children}
      </body>
    </html>
  )
}
