'use client'

import { Bi } from '@/components/shared/Language'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-moss via-moss/90 to-charcoal">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'url(/gallery/08_arch_full_pink.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="absolute inset-0 bg-moss/55"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-3.5 mb-6">
          <span className="w-8 h-px bg-linen"></span>
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-linen">
            <Bi en="Wayne County · Monroe County · Ontario County" es="Condado de Wayne · Condado de Monroe · Condado de Ontario" />
          </span>
          <span className="w-8 h-px bg-linen"></span>
        </div>

        <h1 className="font-cinzel text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-[1.1] mb-3">
          The Bella Wildflower
        </h1>

        <p className="text-[0.85rem] tracking-[0.06em] leading-[1.9] text-sand/90 max-w-[560px] mx-auto mb-10">
          <Bi
            en="A floral studio serving Wayne County, Monroe County, and Ontario County, NY with floral designs adapted to your taste and budget."
            es="Estudio floral que sirve a los condados de Wayne, Monroe y Ontario, NY con diseños florales adaptados a tus gustos y presupuesto."
          />
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#shop"
             className="px-9 py-4 bg-sand text-moss text-[0.65rem] tracking-[0.2em] uppercase font-semibold hover:bg-linen transition cursor-pointer">
            <Bi en="Shop Arrangements" es="Ver Arreglos" />
          </a>
          <a href="#contact"
             className="px-9 py-4 border border-sand/50 text-sand text-[0.65rem] tracking-[0.2em] uppercase font-medium hover:bg-sand/10 transition">
            <Bi en="Book an Event" es="Reservar Evento" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.55rem] tracking-[0.25em] uppercase text-sand/50"><Bi en="Scroll" es="Bajar" /></span>
        <span className="w-px h-8 bg-sand/30"></span>
      </div>

      {/* Badges */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-sand/10 bg-moss/40 backdrop-blur-sm py-4 hidden md:block">
        <div className="flex justify-center gap-10 text-[0.6rem] tracking-[0.22em] uppercase text-sand/70 flex-wrap px-6">
          <span><Bi en="Local Florist · Wayne County NY" es="Floristería Local · Condado de Wayne NY" /></span>
          <span><Bi en="Monroe County · Ontario County" es="Condado de Monroe · Condado de Ontario" /></span>
          <span><Bi en="Custom Arrangements · Events" es="Arreglos a Medida · Eventos" /></span>
        </div>
      </div>
    </section>
  )
}
