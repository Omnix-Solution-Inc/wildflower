import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bella Wildflower',
  description: 'A boutique floral studio serving Wayne, Monroe, and Ontario Counties, NY. Intentional, soul-driven floral design for events, weddings, and everyday moments.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
