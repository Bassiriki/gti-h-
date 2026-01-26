import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import React from "react"
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'GTI-HOLDING S.A.R.L | Transit, Logistique & Transport en Afrique de l\'Ouest',
  description: 'GTI-HOLDING S.A.R.L - Groupe ouest-africain spécialisé dans le transit, la logistique, le transport et le commerce général. Présent au Sénégal, Guinée, Côte d\'Ivoire, Togo et Ghana.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo-gti-h.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-gti-h.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo-gti-h.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
