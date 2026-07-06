'use client'

export function About() {
  return (
    <section id="about" className="py-[100px] px-[6%] bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="relative order-2 md:order-1">
          <div className="aspect-[3/4] overflow-hidden">
            <img src="/gallery/07_bridal_garden_natural.jpg" alt="Bridal garden bouquet" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-4 border border-sage/25 pointer-events-none"></div>
        </div>

        {/* Text */}
        <div className="order-1 md:order-2">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-terracotta"></span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta">Our Story</span>
          </div>

          <h2 className="font-cinzel text-[clamp(1.8rem,3vw,3rem)] text-moss leading-[1.2] mb-5">
            Crafted with intention
          </h2>

          <p className="font-script text-[clamp(1.4rem,2.5vw,2.2rem)] text-terracotta mb-7">
            Rooted in nature, grown with love
          </p>

          <p className="text-[0.84rem] tracking-[0.04em] leading-[1.9] text-charcoal max-w-[560px] mb-5">
            As a woman and mother of four, I founded The Bella Wildflower with the purpose of
            actively contributing to my family's livelihood. Based in New York, the studio
            specializes in high-quality floral art.
          </p>

          <p className="text-[0.84rem] tracking-[0.04em] leading-[1.9] text-charcoal max-w-[560px] mb-5">
            Every arrangement is crafted with intention and care. We believe flowers should tell
            a story — your story. From the first consultation to the final delivery, we bring
            artistry and a deep love for nature to every piece we create.
          </p>

          <p className="text-[0.84rem] tracking-[0.04em] leading-[1.9] text-charcoal max-w-[560px]">
            From intimate celebrations to grand weddings, we resalt the natural beauty to accompany
            your most beautiful moments with floral art of the highest quality.
          </p>

          <p className="font-cinzel text-sm text-moss mt-8 tracking-wider">— Mariela Barbetti, Founder</p>
        </div>
      </div>
    </section>
  )
}
