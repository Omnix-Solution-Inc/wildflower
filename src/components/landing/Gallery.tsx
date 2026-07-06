const galleryItems = [
  { src: '/gallery/real_01.jpg', label: 'Boda de Rosi & Steven', tag: 'Wedding' },
  { src: '/gallery/real_02.jpg', label: 'Ceremony Arch', tag: 'Ceremony' },
  { src: '/gallery/real_03.jpg', label: 'Bridal Bouquet', tag: 'Bouquets' },
  { src: '/gallery/real_04.jpg', label: 'Reception Centerpiece', tag: 'Centerpieces' },
  { src: '/gallery/real_05.jpg', label: 'Garden Table Setting', tag: 'Reception' },
  { src: '/gallery/real_06.jpg', label: 'Bridal Party Bouquets', tag: 'Bouquets' },
  { src: '/gallery/real_07.jpg', label: 'Floral Crown', tag: 'Accessories' },
  { src: '/gallery/real_08.jpg', label: 'Boda de Lucy & Valentin', tag: 'Wedding' },
  { src: '/gallery/01_bridal_gold_cup.jpg', label: 'Bridal Gold Cup', tag: 'Bouquets' },
  { src: '/gallery/02_garden_white_vase.jpg', label: 'Garden White Vase', tag: 'Centerpieces' },
  { src: '/gallery/06_arch_white_green.jpg', label: 'Arch White & Green', tag: 'Ceremony' },
  { src: '/gallery/10_flower_crown.jpg', label: 'Flower Crown', tag: 'Accessories' },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-[100px] px-[6%] bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-terracotta"></span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta">Portfolio</span>
            <span className="w-6 h-px bg-terracotta"></span>
          </div>
          <h2 className="font-cinzel text-[clamp(1.8rem,3vw,3rem)] text-moss mb-4">Our Gallery</h2>
          <p className="font-script text-[clamp(1.4rem,2.5vw,2.2rem)] text-terracotta">A glimpse of our craft</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group cursor-pointer">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-moss/0 group-hover:bg-moss/30 transition flex flex-col items-end justify-end p-4">
                <span className="text-[0.65rem] tracking-[0.15em] uppercase text-sand opacity-0 group-hover:opacity-100 transition">{item.label}</span>
                <span className="text-[0.5rem] tracking-[0.2em] uppercase text-linen opacity-0 group-hover:opacity-100 transition mt-1">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
