import type { Metadata } from 'next'
import { Poppins, Inria_Serif } from 'next/font/google'
import '../globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const inriaSerif = Inria_Serif({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-inria-serif',
})

export const metadata: Metadata = {
  title: 'Health.IQ — Intelligent Operating Room Intelligence',
  description: 'Empowering people everywhere to live healthier lives.',
}

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inriaSerif.variable} font-poppins antialiased`}>
        {children}
      </body>
    </html>
  )
}
