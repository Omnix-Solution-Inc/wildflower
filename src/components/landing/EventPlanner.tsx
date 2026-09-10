'use client'

import { Bi } from '@/components/shared/Language'

export function EventPlanner() {
  return (
    <section id="event-planner" className="py-24 px-[6%] bg-linen">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[0.6rem] tracking-[0.35em] uppercase text-sage mb-4">
          <Bi en="— Event Planner" es="— Planificación de Evento" />
        </p>
        <h2 className="font-cinzel text-[clamp(1.8rem,4vw,3rem)] text-moss mb-5">
          <Bi en="Your event, beautifully planned." es="Tu evento, bellamente planificado." />
        </h2>
        <p className="text-[0.85rem] leading-[1.9] text-charcoal/70 max-w-2xl mx-auto mb-10">
          <Bi
            en="Plan your wedding or celebration with our interactive Event Planner — manage your budget, answer the master questionnaire, and receive a personalized PDF to guide every detail of your special day."
            es="Planifica tu boda o celebración con nuestra Planificación de Evento interactiva — gestiona tu presupuesto, responde el cuestionario maestro y recibe un PDF personalizado para guiar cada detalle de tu día especial."
          />
        </p>
        <a href="/event-planner"
           className="inline-block bg-moss text-sand px-10 py-4 text-[0.65rem] tracking-[0.25em] uppercase font-semibold hover:bg-terracotta transition">
          <Bi en="Start Planning →" es="Comenzar a Planificar →" />
        </a>
      </div>
    </section>
  )
}
