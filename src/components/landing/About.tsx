export function About() {
  return (
    <section id="about" className="py-[100px] px-[6%] bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
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
          <p className="text-[0.84rem] tracking-[0.04em] leading-[1.9] text-charcoal max-w-[560px] mb-6">
            The Bella Wildflower was born from a passion for wild, untamed beauty. We believe flowers should tell a story — your story. Every bouquet, every centerpiece, every arch is designed to reflect the unique spirit of each celebration.
          </p>
          <p className="text-[0.84rem] tracking-[0.04em] leading-[1.9] text-charcoal max-w-[560px]">
            From intimate gatherings to grand weddings, we bring artistry, intention, and a deep love for nature to every arrangement we create.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden bg-sage/20">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sage/10 to-terracotta/10">
              <span className="font-script text-6xl text-terracotta/40">Bella</span>
            </div>
          </div>
          <div className="absolute inset-4 border border-sage/25 pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
