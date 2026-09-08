'use client'

import { Bi } from '@/components/shared/Language'

const WA = 'https://wa.me/13217329993?text='

const products = [
  {
    img: '/gallery/05_tablescape_candles.jpg',
    badge: { en: 'Best Seller', es: 'Más Vendido' },
    name: { en: 'Centerpiece — Table Design', es: 'Centro de Mesa' },
    desc: {
      en: 'Elevated table centerpiece perfect for dinners, celebrations, or as a statement piece for any space.',
      es: 'Centro de mesa elevado, perfecto para cenas, celebraciones o como pieza principal de cualquier espacio.',
    },
  },
  {
    img: '/gallery/wedding_bridal_bouquet_new.jpg',
    name: { en: 'Bridal Bouquet', es: 'Ramo de Novia' },
    desc: {
      en: 'Handcrafted bridal bouquets designed to reflect your unique story and the beauty of your celebration.',
      es: 'Ramos de novia artesanales diseñados para reflejar tu historia única y la belleza de tu celebración.',
    },
    inquire: true,
  },
  {
    img: '/gallery/10_flower_crown.jpg',
    name: { en: 'Seasonal Wreath', es: 'Corona Estacional' },
    desc: {
      en: 'A seasonal wreath that brings organic warmth to your door or space, crafted with intentional design.',
      es: 'Una corona estacional que lleva calidez orgánica a tu puerta o espacio, creada con diseño intencional.',
    },
    inquire: true,
  },
]

export function Shop() {
  return (
    <section id="shop" className="py-24 px-[6%] bg-off-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-14">
          <a
            href="#alacarte-products"
            className="inline-block px-10 py-4 bg-moss text-sand text-[0.7rem] tracking-[0.22em] uppercase font-semibold hover:bg-terracotta transition cursor-pointer"
          >
            À La Carte Store
          </a>
        </div>

        <div id="alacarte-products" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative overflow-hidden aspect-[4/5] bg-sand-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.name.en}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {p.badge && (
                  <span className="absolute top-4 left-4 bg-terracotta text-sand text-[0.55rem] tracking-[0.2em] uppercase px-3 py-1.5">
                    <Bi en={p.badge.en} es={p.badge.es} />
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-base text-moss mb-2"><Bi en={p.name.en} es={p.name.es} /></h3>
                <p className="text-[0.75rem] leading-[1.8] text-charcoal/60 mb-4"><Bi en={p.desc.en} es={p.desc.es} /></p>
                <div className="flex items-center justify-end">
                  <a
                    href={`${WA}${encodeURIComponent(`Hi! I'd like to order: ${p.name.en}`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="text-[0.6rem] tracking-[0.18em] uppercase font-semibold text-moss border border-moss/30 px-4 py-2 hover:bg-moss hover:text-sand transition"
                  >
                    <Bi en={p.inquire ? 'Inquire' : 'Add to Cart'} es={p.inquire ? 'Consultar' : 'Agregar'} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
