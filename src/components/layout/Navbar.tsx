'use client'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1000] flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'py-3 px-[6%] bg-sand/95 backdrop-blur-md shadow-sm' : 'py-5 px-[6%] bg-transparent'
      }`} style={{ borderBottom: scrolled ? '1px solid rgba(61,74,62,0.1)' : 'none' }}>
        <a href="#" className="flex items-center gap-2">
          <span className={`font-cinzel text-base tracking-[0.15em] transition ${scrolled ? 'text-moss' : 'text-white'}`}>
            THE BELLA WILDFLOWER
          </span>
        </a>
        <div className="hidden md:flex gap-9 items-center">
          <a href="#about" className={`text-[0.7rem] tracking-[0.18em] uppercase font-medium transition ${scrolled ? 'text-moss hover:text-terracotta' : 'text-sand hover:text-linen'}`}>About</a>
          <a href="#services" className={`text-[0.7rem] tracking-[0.18em] uppercase font-medium transition ${scrolled ? 'text-moss hover:text-terracotta' : 'text-sand hover:text-linen'}`}>Services</a>
          <a href="#gallery" className={`text-[0.7rem] tracking-[0.18em] uppercase font-medium transition ${scrolled ? 'text-moss hover:text-terracotta' : 'text-sand hover:text-linen'}`}>Gallery</a>
          <a href="#testimonials" className={`text-[0.7rem] tracking-[0.18em] uppercase font-medium transition ${scrolled ? 'text-moss hover:text-terracotta' : 'text-sand hover:text-linen'}`}>Reviews</a>
          <a href="https://wa.me/13217329993?text=Hi%2C%20I%27d%20like%20to%20discuss%20floral%20design%20for%20my%20event"
             target="_blank" rel="noopener noreferrer"
             className="px-6 py-2.5 bg-moss text-sand text-[0.65rem] tracking-[0.16em] uppercase font-medium hover:bg-terracotta transition">
            Inquire
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`w-[22px] h-0.5 rounded transition ${scrolled ? 'bg-moss' : 'bg-sand'}`}></span>
          <span className={`w-[22px] h-0.5 rounded transition ${scrolled ? 'bg-moss' : 'bg-sand'}`}></span>
          <span className={`w-[22px] h-0.5 rounded transition ${scrolled ? 'bg-moss' : 'bg-sand'}`}></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-sand z-[999] flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium">Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium">Gallery</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium">Reviews</a>
          <a href="https://wa.me/13217329993" target="_blank" className="px-8 py-3 bg-moss text-sand text-xs tracking-[0.16em] uppercase font-medium">Inquire</a>
        </div>
      )}
    </>
  )
}
