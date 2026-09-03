'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/solution', label: 'Solution' },
    { href: '/about', label: 'About Us' },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-5">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[60px] flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo width={110} height={34} />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <div key={href} className="flex flex-col items-center gap-[6px]">
                <Link href={href} className="text-white text-sm font-medium hover:opacity-80 transition-opacity">
                  {label}
                </Link>
                {active && (
                  <div className="rounded-full" style={{ width: 37, height: 3, background: '#FFFFFF' }} />
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 mx-4 px-6 py-4 bg-black/95 backdrop-blur rounded-xl flex flex-col gap-4">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href
            return (
              <div key={href}>
                <Link
                  href={href}
                  className={`text-white text-base font-medium hover:opacity-80 transition-opacity ${active ? 'opacity-100' : 'opacity-80'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
                {active && (
                  <div className="mt-1 rounded-full" style={{ width: 37, height: 3, background: '#FFFFFF' }} />
                )}
              </div>
            )
          })}
        </div>
      )}
    </nav>
  )
}
