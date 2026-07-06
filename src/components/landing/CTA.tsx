export function CTA() {
  return (
    <section className="py-24 bg-terracotta relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sand/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-moss/15 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-[6%] text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-6 h-px bg-sand/50"></span>
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-sand/70">Let's Begin</span>
          <span className="w-6 h-px bg-sand/50"></span>
        </div>

        <h2 className="font-cinzel text-[clamp(1.8rem,3.5vw,3rem)] text-white mb-6 leading-tight">
          Every great design begins<br/>with a conversation
        </h2>

        <p className="text-white/80 text-base mb-10 leading-relaxed max-w-xl mx-auto">
          Tell us about your vision. We'll bring it to life with artistry,
          intention, and a deep love for nature.
        </p>

        <a href="https://wa.me/13217329993?text=Hi%2C%20I%27d%20like%20to%20discuss%20floral%20design%20for%20my%20event"
           target="_blank" rel="noopener noreferrer"
           className="inline-block px-10 py-4 bg-sand text-moss text-[0.65rem] tracking-[0.2em] uppercase font-semibold hover:bg-white transition">
          Start Your Inquiry
        </a>

        <div className="mt-10 flex items-center justify-center gap-3 text-white/50 text-sm">
          <span>✦</span>
          <span className="text-[0.65rem] tracking-[0.15em] uppercase">Based in New York · Serving the tri-state area</span>
          <span>✦</span>
        </div>
      </div>
    </section>
  )
}
