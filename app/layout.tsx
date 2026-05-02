import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Susmitha & Tharan — Wedding',
  description: 'Join us in celebrating the wedding of Susmitha Chowdary Nallamothu and Tharan Yogesh Kolani on July 3, 2026',
  icons: { icon: '/images/logo-ts.jpg' },
  openGraph: {
    title: 'Susmitha & Tharan — Wedding Invitation',
    description: 'July 3, 2026 · Elegance Estates Ranch, Pilot Point, TX',
    images: ['/images/couple.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main className="page-enter">{children}</main>
      </body>
    </html>
  )
}
