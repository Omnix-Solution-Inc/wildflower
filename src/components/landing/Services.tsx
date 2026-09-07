'use client'

import { Bi } from '@/components/shared/Language'

const WA = 'https://wa.me/13217329993?text='

export function Services() {
  return (
    <section id="services" className="py-24 px-[6%] bg-sand">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[0.6rem] tracking-[0.35em] uppercase text-sage mb-4">
          <Bi en="— Our Work" es="— Nuestro Trabajo" />
        </p>
        <h2 className="text-center font-cinzel text-[clamp(1.8rem,4vw,3rem)] text-moss mb-5">
          <Bi en="Beyond the bouquet — monumental design." es="Más allá del ramo — diseño monumental." />
        </h2>
        <p className="text-center text-[0.85rem] leading-[1.9] text-charcoal/70 max-w-2xl mx-auto mb-16">
          <Bi
            en="For weddings, galas, corporate events, and immersive experiences — we design spaces and moments that people remember long after the flowers are gone."
            es="Para bodas, galas, eventos corporativos y experiencias inmersivas — diseñamos espacios y momentos que las personas recuerdan mucho después de que las flores se hayan ido."
          />
        </p>

        {/* 01 — Events & Installations */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/06_arch_white_green.jpg" alt="Event detail" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden shadow-md mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/08_arch_full_pink.jpg" alt="Full installation" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta mb-3">
              <Bi en="01 — Events & Installations" es="01 — Eventos e Instalaciones" />
            </p>
            <h3 className="font-cinzel text-[clamp(1.3rem,2.5vw,2rem)] text-moss leading-snug mb-5">
              <Bi en="Floral Production & Monumental Events" es="Producción Floral y Eventos Monumentales" />
            </h3>
            <p className="text-[0.85rem] leading-[2] text-charcoal/70 mb-7">
              <Bi
                en="Luxury floral installations for vineyard weddings, barn galas, editorial shoots, and corporate events across Wayne County, Monroe County, and Ontario County. Every design is a living sculpture — intentional, seasonal, and breathtakingly singular."
                es="Instalaciones florales de lujo para bodas en viñedos, galas en graneros, sesiones editoriales y eventos corporativos en los condados de Wayne, Monroe y Ontario. Cada diseño es una escultura viva — intencional, estacional y singular."
              />
            </p>
            <a href={`${WA}${encodeURIComponent("Hi! I'd like to inquire about floral production for an event.")}`}
               target="_blank" rel="noopener noreferrer"
               className="inline-block text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-moss border-b-2 border-terracotta pb-1 hover:text-terracotta transition">
              <Bi en="Inquire for Events →" es="Consultar por Eventos →" />
            </a>
          </div>
        </div>

        {/* 02 — The Wildflower Experience */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/flores_taller.png" alt="Workshop moment" className="w-full h-64 object-cover bg-sand-dark hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="overflow-hidden shadow-md mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gallery/09_garland_runner.jpg" alt="Group experience" className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
          <div className="lg:order-1">
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta mb-3">
              <Bi en="02 — The Wildflower Experience" es="02 — La Experiencia Wildflower" />
            </p>
            <h3 className="font-cinzel text-[clamp(1.3rem,2.5vw,2rem)] text-moss leading-snug mb-5">
              <Bi en="Coaching & Wellness Through Flowers" es="Coaching y Bienestar a Través de las Flores" />
            </h3>
            <p className="text-[0.85rem] leading-[2] text-charcoal/70 mb-7">
              <Bi
                en="Immersive workshops and coaching sessions where flowers become tools of transformation. For individuals seeking growth, and companies across Wayne, Monroe, and Ontario Counties looking for meaningful team experiences."
                es="Talleres inmersivos y sesiones de coaching donde las flores se convierten en herramientas de transformación. Para personas en proceso de crecimiento, y empresas en los condados de Wayne, Monroe y Ontario que buscan experiencias de equipo con significado."
              />
            </p>
            <a href={`${WA}${encodeURIComponent('Hi! I\'d like to book a Wildflower Experience (coaching & flowers workshop).')}`}
               target="_blank" rel="noopener noreferrer"
               className="inline-block text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-moss border-b-2 border-terracotta pb-1 hover:text-terracotta transition">
              <Bi en="Book an Experience →" es="Reservar una Experiencia →" />
            </a>
          </div>
        </div>

        {/* Local strip */}
        <div className="mt-20 text-center border-t border-moss/10 pt-10">
          <p className="text-[0.6rem] tracking-[0.3em] uppercase text-sage">
            <Bi en="📍 Your Local Florist — Serving Wayne, Monroe, and Ontario Counties, NY" es="📍 Tu Floristería Local — Sirviendo a los condados de Wayne, Monroe y Ontario, NY" />
          </p>
        </div>
      </div>
    </section>
  )
}
