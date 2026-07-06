import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Bella Wildflower — Alta Floristería Técnica y Diseño Botánico',
  description: 'Arte floral de alta calidad para bodas, eventos y celebraciones únicas. Diseño botánico artesanal en Nueva York por Mariela Barbetti.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
