const galleryItems = [
  { label: 'Bridal Bouquet', tag: 'Bouquets' },
  { label: 'Garden Centerpiece', tag: 'Centerpieces' },
  { label: 'Ceremony Arch', tag: 'Ceremony' },
  { label: 'Flower Crown', tag: 'Accessories' },
  { label: 'Table Runner', tag: 'Reception' },
  { label: 'Bridal Party', tag: 'Bouquets' },
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
            <div key={i} className="relative aspect-square overflow-hidden group bg-gradient-to-br from-sage/10 to-terracotta/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cinzel text-xl text-moss/30">{item.label}</span>
              </div>
              <div className="absolute inset-0 bg-moss/0 group-hover:bg-moss/20 transition flex items-end p-4">
                <span className="text-[0.55rem] tracking-[0.2em] uppercase text-sand opacity-0 group-hover:opacity-100 transition">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
