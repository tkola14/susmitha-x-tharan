'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const pathname = usePathname()
  const hideLinks = pathname.startsWith('/invite/') || pathname === '/rsvp'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  const Logo = () => (
    <div className="relative w-10 h-10 rounded-full overflow-hidden"
      style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
      <Image src="/images/logo-final.jpg" alt="S & T" fill className="object-cover" />
    </div>
  )

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white shadow-sm border-b border-black/5' : 'bg-white/80 backdrop-blur-md'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">

          {/* Single logo — no text next to it */}
          {hideLinks
            ? <Logo />
            : <Link href="/"><Logo /></Link>
          }
        </div>
      </nav>
      {open && !hideLinks && (
        <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={() => setOpen(false)} />
      )}
    </>
  )
}
