const services = [
  {
    title: 'Weddings & Social Events',
    desc: 'Full-service floral design for weddings, quinceañeras, and life celebrations. From bridal bouquets to ceremony arches and reception centerpieces.',
    icon: '🌿',
    features: 'Custom packages per table count'
  },
  {
    title: 'Grand Installations',
    desc: 'Large-scale floral installations tailored to your venue and vision. Custom quotes based on volume and design complexity.',
    icon: '✨',
    features: 'Bespoke pricing'
  },
  {
    title: 'Corporate Subscriptions',
    desc: 'Monthly floral arrangements for hotels, restaurants, and offices. Conservation subscriptions with periodic replacement.',
    icon: '🏢',
    features: 'Recurring monthly billing'
  },
  {
    title: 'Web Collections à la Carte',
    desc: 'Ready-to-order floral arrangements in three sizes: Basic, Medium, and Large. Quick, automated web purchasing for everyday gifting.',
    icon: '💐',
    features: 'Fixed round prices'
  },
]

export function Services() {
  return (
    <section id="services" className="py-[100px] px-[6%] bg-sand">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-terracotta"></span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta">What We Offer</span>
            <span className="w-6 h-px bg-terracotta"></span>
          </div>
          <h2 className="font-cinzel text-[clamp(1.8rem,3vw,3rem)] text-moss mb-4">Services & Collections</h2>
          <p className="font-script text-[clamp(1.4rem,2.5vw,2.2rem)] text-terracotta">Designed for every moment</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 border border-linen/40 hover:border-terracotta/40 transition group">
              <div className="flex items-start gap-5">
                <div className="text-3xl mt-1">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-lg text-moss mb-3">{s.title}</h3>
                  <p className="text-[0.82rem] leading-[1.8] text-charcoal/70 mb-3">{s.desc}</p>
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase text-terracotta/70">{s.features}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process strip */}
        <div className="mt-12 bg-moss py-8 px-8 rounded-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-cinzel text-2xl text-sand mb-2">01</p>
              <p className="text-[0.7rem] tracking-[0.15em] uppercase text-terracotta mb-1">Consultation</p>
              <p className="text-[0.78rem] text-sand/60">Emotional consulting before every quote</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl text-sand mb-2">02</p>
              <p className="text-[0.7rem] tracking-[0.15em] uppercase text-terracotta mb-1">Design</p>
              <p className="text-[0.78rem] text-sand/60">Custom floral art crafted with intention</p>
            </div>
            <div>
              <p className="font-cinzel text-2xl text-sand mb-2">03</p>
              <p className="text-[0.7rem] tracking-[0.15em] uppercase text-terracotta mb-1">Delivery</p>
              <p className="text-[0.78rem] text-sand/60">Premium presentation and setup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
