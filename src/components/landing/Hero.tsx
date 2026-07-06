'use client'

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-moss via-moss/90 to-charcoal">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(/gallery/real_01.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="absolute inset-0 bg-moss/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3.5 mb-6">
          <span className="w-8 h-px bg-linen"></span>
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-linen">Alta Floristería Técnica</span>
          <span className="w-8 h-px bg-linen"></span>
        </div>

        <h1 className="font-cinzel text-[clamp(2.5rem,7vw,5.5rem)] text-white leading-[1.1] mb-3">
          The Bella Wildflower
        </h1>

        <p className="font-script text-[clamp(1.6rem,3.5vw,3rem)] text-linen mb-8">
          Diseño Botánico
        </p>

        <p className="text-[0.85rem] tracking-[0.06em] leading-[1.9] text-sand/90 max-w-[520px] mx-auto mb-10">
          Resaltamos la belleza natural para acompañar momentos hermosos con arte floral de alta calidad.
          Unimos la excelencia técnica con precios adaptados con precisión a cada cliente.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="https://wa.me/13217329993?text=Hi%2C%20I%27d%20like%20to%20discuss%20floral%20design%20for%20my%20event"
             target="_blank" rel="noopener noreferrer"
             className="px-9 py-4 bg-sand text-moss text-[0.65rem] tracking-[0.2em] uppercase font-semibold hover:bg-linen transition cursor-pointer">
            Inquire Now
          </a>
          <a href="#gallery"
             className="px-9 py-4 border border-sand/50 text-sand text-[0.65rem] tracking-[0.2em] uppercase font-medium hover:bg-sand/10 transition">
            View Portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.55rem] tracking-[0.25em] uppercase text-sand/50">Scroll</span>
        <span className="w-px h-8 bg-sand/30"></span>
      </div>
    </section>
  )
}
