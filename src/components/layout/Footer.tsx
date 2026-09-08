'use client'

import { Bi } from '@/components/shared/Language'

const WA = 'https://wa.me/13217329993?text='

export function Footer() {
  return (
    <footer className="bg-moss py-16 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-cinzel text-lg text-sand mb-4 tracking-wider">THE BELLA WILDFLOWER</h3>
            <p className="text-sand/60 text-sm leading-relaxed mb-4">
              <Bi
                en="A floral studio serving Wayne, Monroe, and Ontario Counties, NY with floral designs adapted to your taste and budget."
                es="Estudio floral que sirve a los condados de Wayne, Monroe y Ontario, NY con diseños florales adaptados a tus gustos y presupuesto."
              />
            </p>
            <p className="text-sand/40 text-xs">Wayne County · Monroe County · Ontario County, NY</p>
          </div>

          <div>
            <h4 className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta mb-4"><Bi en="Explore" es="Explorar" /></h4>
            <div className="flex flex-col gap-3">
              <a href="#shop" className="text-sand/70 text-sm hover:text-sand transition"><Bi en="Shop" es="Tienda" /></a>
              <a href="#services" className="text-sand/70 text-sm hover:text-sand transition"><Bi en="Our Work" es="Nuestro Trabajo" /></a>
              <a href="#contact" className="text-sand/70 text-sm hover:text-sand transition"><Bi en="Book Now" es="Reservar" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta mb-4"><Bi en="Connect" es="Contacto" /></h4>
            <a href={`${WA}${encodeURIComponent("Hi! I'd like to discuss a floral design.")}`}
               target="_blank" rel="noopener noreferrer"
               className="text-sand/70 text-sm hover:text-sand transition block mb-3"><Bi en="WhatsApp Inquiry" es="Consulta por WhatsApp" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="text-sand/70 text-sm hover:text-sand transition block">Instagram</a>
          </div>
        </div>

        <div className="border-t border-sand/10 pt-8 text-center">
          <p className="text-sand/40 text-xs tracking-wider">
            <Bi en="© 2026 The Bella Wildflower · Founded by Mariela Barbetti" es="© 2026 The Bella Wildflower · Fundado por Mariela Barbetti" />
          </p>
        </div>
      </div>
    </footer>
  )
}
