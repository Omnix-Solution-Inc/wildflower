export function Footer() {
  return (
    <footer className="bg-moss py-16 px-[6%]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-cinzel text-lg text-sand mb-4 tracking-wider">THE BELLA WILDFLOWER</h3>
            <p className="text-sand/60 text-sm leading-relaxed">
              Artisanal floral design studio creating wild, organic arrangements for life's most beautiful moments.
            </p>
          </div>
          <div>
            <h4 className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta mb-4">Explore</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-sand/70 text-sm hover:text-sand transition">About Us</a>
              <a href="#services" className="text-sand/70 text-sm hover:text-sand transition">Services</a>
              <a href="#gallery" className="text-sand/70 text-sm hover:text-sand transition">Gallery</a>
              <a href="#testimonials" className="text-sand/70 text-sm hover:text-sand transition">Reviews</a>
            </div>
          </div>
          <div>
            <h4 className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta mb-4">Connect</h4>
            <a href="https://wa.me/13217329993" target="_blank" rel="noopener noreferrer" className="text-sand/70 text-sm hover:text-sand transition block mb-3">WhatsApp Inquiry</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sand/70 text-sm hover:text-sand transition block">Instagram</a>
          </div>
        </div>
        <div className="border-t border-sand/10 pt-8 text-center">
          <p className="text-sand/40 text-xs tracking-wider">© 2026 The Bella Wildflower · Floral Design & Experiences</p>
        </div>
      </div>
    </footer>
  )
}
