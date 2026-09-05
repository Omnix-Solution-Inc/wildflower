'use client'

import { useState, useEffect } from 'react'
import { Bi, useLang } from '@/components/shared/Language'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkCls = `text-[0.7rem] tracking-[0.18em] uppercase font-medium transition ${
    scrolled ? 'text-moss hover:text-terracotta' : 'text-sand hover:text-linen'
  }`

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
          <a href="#shop" className={linkCls}><Bi en="Shop" es="Tienda" /></a>
          <a href="#services" className={linkCls}><Bi en="Our Work" es="Nuestro Trabajo" /></a>
          <a href="#legacy" className={linkCls}><Bi en="Legacy" es="Legado" /></a>
          <a href="#contact" className={linkCls}><Bi en="Book Now" es="Reservar" /></a>

          {/* Language toggle */}
          <div className="flex items-center gap-1 border border-current rounded-full px-1 py-0.5">
            {(['en', 'es'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[0.6rem] tracking-[0.1em] uppercase font-semibold px-2 py-0.5 rounded-full transition ${
                  lang === l
                    ? 'bg-terracotta text-sand'
                    : scrolled ? 'text-moss/60 hover:text-moss' : 'text-sand/60 hover:text-sand'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`w-[22px] h-0.5 rounded transition ${scrolled ? 'bg-moss' : 'bg-sand'}`}></span>
          <span className={`w-[22px] h-0.5 rounded transition ${scrolled ? 'bg-moss' : 'bg-sand'}`}></span>
          <span className={`w-[22px] h-0.5 rounded transition ${scrolled ? 'bg-moss' : 'bg-sand'}`}></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-sand z-[999] flex flex-col items-center justify-center gap-8 md:hidden">
          <a href="#shop" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium"><Bi en="Shop" es="Tienda" /></a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium"><Bi en="Our Work" es="Nuestro Trabajo" /></a>
          <a href="#legacy" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium"><Bi en="Legacy" es="Legado" /></a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm tracking-[0.2em] uppercase text-moss font-medium"><Bi en="Book Now" es="Reservar" /></a>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setLang('en')} className={`px-4 py-2 text-xs tracking-[0.16em] uppercase font-semibold rounded-full ${lang === 'en' ? 'bg-moss text-sand' : 'border border-moss/30 text-moss'}`}>EN</button>
            <button onClick={() => setLang('es')} className={`px-4 py-2 text-xs tracking-[0.16em] uppercase font-semibold rounded-full ${lang === 'es' ? 'bg-moss text-sand' : 'border border-moss/30 text-moss'}`}>ES</button>
          </div>
        </div>
      )}
    </>
  )
}
