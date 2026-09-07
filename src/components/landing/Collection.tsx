'use client'

import { Bi } from '@/components/shared/Language'

const FLOWERS = [
  {
    es_name: 'Rosas', en_name: 'Roses',
    es_style: 'Clásico, elegante, silvestre o relleno delicado.',
    en_style: 'Classic, elegant, wild or delicate filler.',
    es_desc: 'Las grandes favoritas. Las estándar aportan un aspecto atemporal, mientras que las rosas de jardín logran un look más silvestre y las rosas en aerosol funcionan como un relleno caprichoso y romántico.',
    en_desc: 'The great favorites. Standard roses bring a timeless look, garden roses achieve a wilder feel, and spray roses work as a whimsical, romantic filler.'
  },
  {
    es_name: 'Ranúnculos', en_name: 'Ranunculus',
    es_style: 'Movimiento, textura y color vibrante.',
    en_style: 'Movement, texture and vibrant color.',
    es_desc: 'Disponibles en una enorme variedad de tonalidades, sus pétalos redondos y tallos ondulados son la flor de acento perfecta para darle vida y dinamismo a tu ramo.',
    en_desc: 'Available in a huge range of shades, their round petals and curvy stems are the perfect accent flower to bring life and movement to your bouquet.'
  },
  {
    es_name: 'Peonías', en_name: 'Peonies',
    es_style: 'Lujo, exclusividad y romanticismo.',
    en_style: 'Luxury, exclusivity and romance.',
    es_desc: 'Con una temporada de primavera muy corta (mayo y junio), son las reinas indiscutibles para el ramo de novia y la mesa principal, donde brillan con todo su esplendor.',
    en_desc: 'With a very short spring season (May and June), they are the undisputed queens for the bridal bouquet and head table, where they shine in full splendor.'
  },
  {
    es_name: 'Anémonas', en_name: 'Anemones',
    es_style: 'Audaz, moderno y con textura delicada.',
    en_style: 'Bold, modern, delicately textured.',
    es_desc: 'Aportan un contraste único gracias a sus centros oscuros e intensos. Las clásicas en blanco con centro azul marino son ideales para bodas sofisticadas.',
    en_desc: 'They provide unique contrast thanks to their dark, intense centers. The classic white with navy-blue centers are ideal for sophisticated weddings.'
  },
  {
    es_name: 'Bocas de Dragón', en_name: 'Snapdragons',
    es_style: 'Estructura, altura y degradados de color.',
    en_style: 'Structure, height and color gradients.',
    es_desc: 'Perfectas para añadir dimensión a grandes estructuras, arcos o aportar un toque estilizado y único a los arreglos florales.',
    en_desc: 'Perfect for adding dimension to large structures and arches, or bringing a stylized, one-of-a-kind touch to floral arrangements.'
  },
  {
    es_name: 'Claveles', en_name: 'Carnations',
    es_style: 'Abundancia y textura instantánea.',
    en_style: 'Abundance and instant texture.',
    es_desc: 'Al integrarlos en los centros de mesa, multiplican el volumen y la riqueza visual de forma inmediata, logrando un arreglo mucho más completo y vibrante.',
    en_desc: 'Integrated into centerpieces, they instantly multiply volume and visual richness, achieving a much fuller, more vibrant arrangement.'
  },
  {
    es_name: 'Tulipanes', en_name: 'Tulips',
    es_style: 'Versatilidad exótica y silueta abierta.',
    en_style: 'Exotic versatility and open silhouette.',
    es_desc: 'Con una enorme variedad de tipos (flecos, dobles o loro), se pueden transformar suavemente para abrirse y mostrar una apariencia completamente exótica y artística.',
    en_desc: 'In a huge variety of types (fringed, double or parrot), they can be gently coaxed open to reveal a completely exotic, artistic look.'
  },
  {
    es_name: 'Hortensias', en_name: 'Hydrangeas',
    es_style: 'Volumen suave, tonos pastel y polvorientos.',
    en_style: 'Soft volume, pastel and dusty tones.',
    es_desc: 'Sus grandes y llamativos pompones florales son indispensables para decorar arcos ceremoniales y centros de mesa de gran impacto visual.',
    en_desc: 'Their large, eye-catching blooms are essential for ceremonial arches and high-impact centerpieces.'
  },
  {
    es_name: 'Dalias', en_name: 'Dahlias',
    es_style: 'Presencia imponente y elegancia duradera.',
    en_style: 'Imposing presence and lasting elegance.',
    es_desc: 'Especialmente las variedades plato de cena, que destacan por su tamaño generoso y su capacidad de transformar cualquier espacio con elegancia.',
    en_desc: 'Especially the dinner-plate varieties, which stand out for their generous size and their ability to transform any space with elegance.'
  },
  {
    es_name: 'Anturios', en_name: 'Anthuriums',
    es_style: 'Líneas limpias, modernidad y frescura tropical.',
    en_style: 'Clean lines, modernity and tropical freshness.',
    es_desc: 'Aportan un toque vibrante, contemporáneo y muy sofisticado a los diseños más vanguardistas.',
    en_desc: 'They bring a vibrant, contemporary and highly sophisticated touch to the most avant-garde designs.'
  }
]

export function Collection() {
  return (
    <section id="coleccion" className="py-24 px-[6%] bg-linen">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-5 gap-10 items-center mb-16">
          <div className="md:col-span-3 text-center md:text-left">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-5">
              <Bi en="Our Botanical Collection" es="Nuestra Colección Botánica" />
            </p>
            <h2 className="font-script text-[clamp(2rem,4vw,3.4rem)] text-moss leading-snug mb-6">
              <Bi en="The 10 most popular wedding flowers." es="Las 10 flores de boda más populares." />
            </h2>
            <p className="text-[0.85rem] leading-[1.9] text-sage">
              <Bi
                en="Because we're a team working to make your celebration memorable and unforgettable, every flower is selected with care and purpose to reflect your essence."
                es="Porque somos un equipo para lograr que tu celebración sea memorable e inolvidable, cada flor es seleccionada con mimo y propósito para reflejar tu esencia."
              />
            </p>
          </div>
          <div className="md:col-span-2">
            <img src="/gallery/colleccion_botanica.jpg" alt="Botanical collection" className="w-full aspect-[3/4] object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-14 gap-y-10">
          {FLOWERS.map((f, i) => (
            <div key={f.es_name} className="border-t border-moss/20 pt-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-cinzel text-[0.7rem] text-terracotta tracking-widest">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-cinzel text-lg tracking-[0.08em] text-moss">
                  <Bi en={f.en_name} es={f.es_name} />
                </h3>
              </div>
              <p className="text-[0.7rem] uppercase tracking-[0.15em] text-sage mb-3">
                <Bi en={f.en_style} es={f.es_style} />
              </p>
              <p className="text-[0.82rem] leading-[1.8] text-sage">
                <Bi en={f.en_desc} es={f.es_desc} />
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
