'use client'

import { Bi } from '@/components/shared/Language'

const WA = 'https://wa.me/13217329993?text='

const products = [
  {
    img: '/gallery/07_bridal_garden_natural.jpg',
    badge: { en: 'Available', es: 'Disponible' },
    name: { en: 'Wildflower Bouquet', es: 'Ramo Silvestre' },
    desc: {
      en: 'A seasonal, hand-crafted bouquet designed to bring the wild beauty of nature into your home or event.',
      es: 'Un ramo artesanal de temporada diseñado para llevar la belleza silvestre de la naturaleza a tu hogar o evento.',
    },
    price: { en: '$65 / bouquet', es: '$65 / ramo' },
  },
  {
    img: '/gallery/05_tablescape_candles.jpg',
    badge: { en: 'Best Seller', es: 'Más Vendido' },
    name: { en: 'Centerpiece — Table Design', es: 'Centro de Mesa' },
    desc: {
      en: 'Elevated table centerpiece perfect for dinners, celebrations, or as a statement piece for any space.',
      es: 'Centro de mesa elevado, perfecto para cenas, celebraciones o como pieza principal de cualquier espacio.',
    },
    price: { en: '$120 / piece', es: '$120 / pieza' },
  },
  {
    img: '/gallery/02_garden_white_vase.jpg',
    name: { en: 'Gift Arrangement', es: 'Arreglo de Regalo' },
    desc: {
      en: 'A thoughtfully designed arrangement for gifting — birthdays, anniversaries, or simply to say “I see you.”',
      es: 'Un arreglo diseñado para regalar — cumpleaños, aniversarios o simplemente para decir “te veo”.',
    },
    price: { en: '$85 / arrangement', es: '$85 / arreglo' },
  },
  {
    img: '/gallery/03_bridal_bouquet_lavender.jpg',
    name: { en: 'Bridal Bouquet', es: 'Ramo de Novia' },
    desc: {
      en: 'Handcrafted bridal bouquets designed to reflect your unique story and the beauty of your celebration.',
      es: 'Ramos de novia artesanales diseñados para reflejar tu historia única y la belleza de tu celebración.',
    },
    price: { en: 'From $180', es: 'Desde $180' },
    inquire: true,
  },
  {
    img: '/gallery/10_flower_crown.jpg',
    name: { en: 'Seasonal Wreath', es: 'Corona Estacional' },
    desc: {
      en: 'A seasonal wreath that brings organic warmth to your door or space, crafted with intentional design.',
      es: 'Una corona estacional que lleva calidez orgánica a tu puerta o espacio, creada con diseño intencional.',
    },
    price: { en: 'From $75', es: 'Desde $75' },
    inquire: true,
  },
]

export function Shop() {
  return (
    <section id="shop" className="py-24 px-[6%] bg-off-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[0.6rem] tracking-[0.35em] uppercase text-sage mb-4">
          <Bi en="— Shop · Local Delivery" es="— Tienda · Entrega Local" />
        </p>
        <h2 className="text-center font-cinzel text-[clamp(1.8rem,4vw,3rem)] text-moss mb-5">
          <Bi en="Ready to bloom today." es="Listas para florecer hoy." />
        </h2>
        <p className="text-center text-[0.85rem] leading-[1.9] text-charcoal/70 max-w-xl mx-auto mb-14">
          <Bi
            en="Finished arrangements available for pickup or local delivery in Wayne County, Monroe County, and Ontario County, NY. Each piece is designed with intention — crafted to bring beauty into your space."
            es="Arreglos terminados disponibles para recoger o entrega local en los condados de Wayne, Monroe y Ontario, NY. Cada pieza está diseñada con intención — creada para llevar belleza a tu espacio."
          />
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="flex items-center justify-between">
                  <span className="text-[0.8rem] font-semibold text-terracotta"><Bi en={p.price.en} es={p.price.es} /></span>
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
