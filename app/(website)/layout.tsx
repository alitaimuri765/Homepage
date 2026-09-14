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
  title: 'Health.IQ — Your AI-Powered Health Companion',
  description: 'Take control of your health with AI-powered insights, personalized tracking, and smart recommendations — available anywhere in the world.',
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
