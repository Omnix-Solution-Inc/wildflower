const services = [
  { title: 'Weddings', desc: 'Full-service floral design for your wedding day — from bridal bouquets to ceremony arches and reception centerpieces.', icon: '🌿' },
  { title: 'Events', desc: 'Custom floral arrangements for corporate events, private parties, and special celebrations of all kinds.', icon: '✨' },
  { title: 'Workshops', desc: 'Hands-on floral design workshops where you learn to create your own wild, organic arrangements.', icon: '🌸' },
  { title: 'Custom Orders', desc: 'Bespoke bouquets and arrangements for everyday moments — because beauty deserves no occasion.', icon: '💐' },
]

export function Services() {
  return (
    <section id="services" className="py-[100px] px-[6%] bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-terracotta"></span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta">What We Do</span>
            <span className="w-6 h-px bg-terracotta"></span>
          </div>
          <h2 className="font-cinzel text-[clamp(1.8rem,3vw,3rem)] text-moss mb-4">Services & Experiences</h2>
          <p className="font-script text-[clamp(1.4rem,2.5vw,2.2rem)] text-terracotta">Designed with you in mind</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 border border-linen/40 hover:border-terracotta/40 transition group">
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-cinzel text-lg text-moss mb-3">{s.title}</h3>
              <p className="text-[0.78rem] leading-[1.8] text-charcoal/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
