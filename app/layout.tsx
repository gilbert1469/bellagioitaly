import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Bellagio Italy | Private Lake Como Experiences',
  description:
    'Exclusive, personally curated Lake Como experiences for discerning American travelers. Private dining reservations, villa boat tours, cooking classes, and 24/7 concierge.',
  keywords: [
    'Lake Como luxury travel',
    'private Italy experiences',
    'Bellagio concierge',
    'Lake Como private tours',
    'luxury Italian travel',
    'Como villa tours',
    'private dining Lake Como',
    'Italy travel concierge',
  ],
  openGraph: {
    title: 'Bellagio Italy | Private Lake Como Experiences',
    description:
      'Exclusive, personally curated Lake Como experiences for discerning American travelers.',
    url: 'https://bellagioitaly.com',
    siteName: 'Bellagio Italy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bellagio Italy | Private Lake Como Experiences',
    description: 'Exclusive, personally curated Lake Como experiences for discerning travelers.',
  },
  metadataBase: new URL('https://bellagioitaly.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
