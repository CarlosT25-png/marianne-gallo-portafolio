import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './global.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
}

export const metadata: Metadata = {
  title: 'Marianne Gallo',
  description: 'Marianne Gallo - Portafolio',
  // icons: {
  //   icon: './favicon.ico'
  // }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
