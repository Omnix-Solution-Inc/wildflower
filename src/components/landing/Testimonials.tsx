const testimonials = [
  { text: 'The Bella Wildflower transformed our wedding into a dream. Every arrangement was a work of art — wild, organic, and utterly breathtaking.', author: 'Sarah & Michael', event: 'Spring Wedding 2025' },
  { text: 'I have never seen flowers so beautifully arranged. The attention to detail and the natural, garden-style approach was exactly what I wanted.', author: 'Jessica R.', event: 'Corporate Gala' },
  { text: 'From the consultation to the final delivery, everything was seamless. Our guests are still talking about the centerpieces.', author: 'The Martinez Family', event: 'Quinceañera' },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-[100px] px-[6%] bg-sand">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-terracotta"></span>
            <span className="text-[0.6rem] tracking-[0.3em] uppercase text-terracotta">Kind Words</span>
            <span className="w-6 h-px bg-terracotta"></span>
          </div>
          <h2 className="font-cinzel text-[clamp(1.8rem,3vw,3rem)] text-moss mb-4">Client Love</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 border border-linen/40">
              <p className="text-[0.82rem] leading-[1.8] text-charcoal/80 italic mb-6">"{t.text}"</p>
              <p className="font-cinzel text-sm text-terracotta">{t.author}</p>
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-sage mt-1">{t.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
