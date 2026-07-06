export function Hero() {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-moss/80 via-moss/40 to-transparent" 
             style={{ background: 'linear-gradient(to right, rgba(61,74,62,0.75) 0%, rgba(61,74,62,0.35) 50%, rgba(61,74,62,0.1) 100%)' }} />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end px-[6%] pb-[10vh]">
        <div className="flex items-center gap-3.5 mb-5">
          <span className="w-8 h-px bg-linen"></span>
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-linen">Floral Design & Experiences</span>
        </div>
        <h1 className="font-cinzel text-[clamp(2.8rem,6vw,6rem)] text-white leading-[1.1] mb-3.5 max-w-[700px]">
          The Bella Wildflower
        </h1>
        <p className="font-script text-[clamp(1.8rem,3.5vw,3.2rem)] text-linen mb-7">
          Where wild beauty blooms
        </p>
        <p className="text-[0.82rem] tracking-[0.06em] leading-[1.9] text-sand/90 max-w-[480px] mb-10">
          Artisanal floral design for weddings, events, and intimate celebrations. We bring wild, organic elegance to every arrangement — crafted with intention, delivered with heart.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="https://wa.me/13217329993?text=Hi%2C%20I%27d%20like%20to%20discuss%20floral%20design%20for%20my%20event" target="_blank" rel="noopener noreferrer" 
             className="px-9 py-4 bg-sand text-moss text-[0.65rem] tracking-[0.2em] uppercase font-semibold hover:bg-linen transition cursor-pointer">
            Start Your Inquiry
          </a>
          <a href="#gallery" className="px-9 py-4 border border-sand/50 text-sand text-[0.65rem] tracking-[0.2em] uppercase font-medium hover:bg-sand/10 transition">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  )
}
