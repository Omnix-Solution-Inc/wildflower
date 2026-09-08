'use client'

import { Bi } from '@/components/shared/Language'

export function Events() {
  const wa_es = 'https://wa.me/13217329993?text=' + encodeURIComponent('¡Hola! Quiero empezar a planear mi evento. 🌸')
  const wa_en = 'https://wa.me/13217329993?text=' + encodeURIComponent("Hi! I'd like to start planning my event. 🌸")

  return (
    <section id="eventos" className="py-24 px-[6%] bg-linen">
      <div className="max-w-4xl mx-auto text-center">

        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-5">
          <Bi en="Celebrate Every Occasion" es="Celebra Toda Ocasión" />
        </p>

        <h2 className="font-script text-[clamp(2.2rem,5vw,3.8rem)] text-moss leading-snug mb-10">
          <Bi en="Your one place for it all." es="Un solo lugar para todo." />
        </h2>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
          <span className="font-cinzel text-sm tracking-[0.18em] text-moss">
            <Bi en="Wedding Day" es="Día de Boda" />
          </span>
          <span className="w-px h-5 bg-terracotta/40 hidden md:inline-block"></span>
          <span className="font-cinzel text-sm tracking-[0.18em] text-moss">
            <Bi en="Bachelorette Party" es="Despedida de Soltera" />
          </span>
          <span className="w-px h-5 bg-terracotta/40 hidden md:inline-block"></span>
          <span className="font-cinzel text-sm tracking-[0.18em] text-moss">
            Baby Shower
          </span>
          <span className="w-px h-5 bg-terracotta/40 hidden md:inline-block"></span>
          <span className="font-cinzel text-sm tracking-[0.18em] text-moss">
            <Bi en="Private Parties" es="Fiestas Privadas" />
          </span>
          <span className="w-px h-5 bg-terracotta/40 hidden md:inline-block"></span>
          <span className="font-cinzel text-sm tracking-[0.18em] text-moss">
            <Bi en="Anniversaries" es="Aniversarios" />
          </span>
        </div>

        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-terracotta text-linen text-[0.65rem] tracking-[0.22em] uppercase font-semibold hover:bg-moss transition cursor-pointer"
        >
          <Bi en="Let's Start Planning Your Perfect Event" es="Empecemos a Planificar Tu Evento Perfecto" />
        </a>

      </div>
    </section>
  )
}
