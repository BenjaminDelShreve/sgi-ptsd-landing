import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. Knife Chief | PTSD Reset Treatment',
  description: 'Relief from PTSD in as little as 30 minutes. Reset the nervous system and restore peace of mind.',
  openGraph: {
    title: 'Dr. Knife Chief | PTSD Reset Treatment',
    description: 'Relief from PTSD in as little as 30 minutes. Reset the nervous system and restore peace of mind.',
    url: 'https://drknifechief.zenjamindev.com',
    siteName: 'Dr. Knife Chief',
    images: [
      {
        url: 'https://drknifechief.zenjamindev.com/knifechief-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Knife Chief at Petty Medical Clinic',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Knife Chief | PTSD Reset Treatment',
    description: 'Relief from PTSD in as little as 30 minutes. Reset the nervous system and restore peace of mind.',
    images: ['https://drknifechief.zenjamindev.com/knifechief-og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
