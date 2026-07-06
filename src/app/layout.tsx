import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bella Wildflower — Floral Design & Experiences',
  description: 'Artisanal floral design for weddings, events, and intimate celebrations. Where wild beauty meets refined elegance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
