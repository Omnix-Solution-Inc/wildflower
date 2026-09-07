'use client'

import { useState } from 'react'
import { Bi, useLang } from '@/components/shared/Language'

const WA = 'https://wa.me/13217329993?text='

const interests = [
  { en: 'Finished Arrangement — Pickup / Delivery', es: 'Arreglo Terminado — Recoger / Entrega' },
  { en: 'Custom Arrangement', es: 'Arreglo Personalizado' },
  { en: 'Wedding / Bridal Florals', es: 'Flores de Boda / Novia' },
  { en: 'Event — Vineyard / Gala / Corporate', es: 'Evento — Viñedo / Gala / Corporativo' },
  { en: 'Wildflower Experience — Coaching', es: 'Experiencia Wildflower — Coaching' },
]

export function Contact() {
  const { lang } = useLang()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', interest: '', vision: '' })

  const input = 'w-full bg-transparent border-b border-charcoal/20 py-2.5 text-[0.85rem] text-charcoal placeholder-charcoal/40 focus:border-terracotta focus:outline-none transition'

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const selected = form.interest
      ? interests.find((i) => (lang === 'en' ? i.en === form.interest : i.es === form.interest))
      : undefined
    const interestEn = selected?.en || form.interest
    const interestEs = selected?.es || form.interest
    const msg = lang === 'en'
      ? `Hi! I'm ${form.firstName} ${form.lastName}.\nEmail: ${form.email}\nI'm looking for: ${interestEn}\nMy vision: ${form.vision}`
      : `¡Hola! Soy ${form.firstName} ${form.lastName}.\nEmail: ${form.email}\nBusco: ${interestEs}\nMi visión: ${form.vision}`
    window.open(`${WA}${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-24 px-[6%] bg-off-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[0.6rem] tracking-[0.35em] uppercase text-sage mb-4">
          <Bi en="— Begin Here" es="— Comienza Aquí" />
        </p>
        <h2 className="font-cinzel text-[clamp(1.8rem,4vw,3rem)] text-moss mb-5">
          <Bi en="Let's create something unforgettable." es="Vamos a crear algo inolvidable." />
        </h2>
        <p className="text-[0.85rem] leading-[1.9] text-charcoal/70 max-w-xl mx-auto mb-10">
          <Bi
            en="Whether you're looking for a finished arrangement for your home, planning a monumental event, or seeking a transformative experience — every great creation begins with a conversation."
            es="Ya sea que busques un arreglo terminado para tu hogar, planifiques un evento monumental, o busques una experiencia transformadora — toda gran creación comienza con una conversación."
          />
        </p>

        <form onSubmit={submit} className="text-left grid sm:grid-cols-2 gap-x-8 gap-y-6 bg-white p-8 shadow-md">
          <input
            className={input}
            placeholder={lang === 'en' ? 'First Name' : 'Nombre'}
            required
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <input
            className={input}
            placeholder={lang === 'en' ? 'Last Name' : 'Apellido'}
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <input
            className={`${input} sm:col-span-2`}
            type="email"
            placeholder={lang === 'en' ? 'Email' : 'Correo'}
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <select
            className={`${input} sm:col-span-2 ${form.interest ? '' : 'text-charcoal/40'}`}
            required
            value={form.interest}
            onChange={(e) => setForm({ ...form, interest: e.target.value })}
          >
            <option value="" disabled>
              {lang === 'en' ? "I'm looking for..." : 'Estoy buscando...'}
            </option>
            {interests.map((i, idx) => (
              <option key={idx} value={lang === 'en' ? i.en : i.es}>
                {lang === 'en' ? i.en : i.es}
              </option>
            ))}
          </select>
          <textarea
            className={`${input} sm:col-span-2 resize-none`}
            rows={4}
            placeholder={lang === 'en' ? 'Tell me about your vision' : 'Cuéntame tu visión'}
            value={form.vision}
            onChange={(e) => setForm({ ...form, vision: e.target.value })}
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-moss text-sand text-[0.65rem] tracking-[0.22em] uppercase font-semibold py-4 hover:bg-terracotta transition"
          >
            <Bi en="Send My Vision →" es="Enviar Mi Visión →" />
          </button>
        </form>

        <p className="mt-8 text-[0.6rem] tracking-[0.25em] uppercase text-charcoal/50">
          <Bi en="📍 Ontario, NY · Rochester · Western New York" es="📍 Ontario, NY · Rochester · Oeste de Nueva York" />
        </p>
      </div>
    </section>
  )
}
