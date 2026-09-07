import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bella Wildflower — Choose to Bloom Untamed',
  description: 'A boutique floral studio born in Ontario, NY. Intentional, soul-driven floral design for events, weddings, and everyday moments — serving Rochester, Santa Cruz, and Western New York.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
