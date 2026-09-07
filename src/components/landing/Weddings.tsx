'use client'

import { Bi } from '@/components/shared/Language'

export function Weddings() {
  const wa_es = 'https://wa.me/13217329993?text=' + encodeURIComponent('¡Hola! Quiero consultar por las flores de mi gran día. 🌸')
  const wa_en = 'https://wa.me/13217329993?text=' + encodeURIComponent('Hi! I\'d like to inquire about flowers for my big day. 🌸')

  return (
    <section id="bodas" className="py-24 px-[6%] bg-moss">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div className="relative">
          <img
            src="/gallery/wedding_beach_arch_couple.jpg"
            alt="Real wedding — couple under sunflower arch at beach ceremony"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-5 -right-3 md:-right-5 bg-linen px-7 py-5">
            <span className="font-script text-2xl text-terracotta block leading-tight">Tu Gran Día</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-linen/70 mb-5">
            <Bi en="Wedding Day" es="Día de Boda" />
          </p>

          <h2 className="font-cinzel text-[clamp(1.8rem,3.5vw,2.8rem)] text-white leading-tight mb-7">
            <Bi en="Flowers that tell your story." es="Flores que cuentan tu historia." />
          </h2>

          <p className="text-[0.9rem] leading-[1.9] text-sand/90 mb-10">
            <Bi
              en="Floral arrangements are one of the most customizable aspects of your big day — and usually the second most photographed element, just behind you and your loved ones. Whether you're taking your first steps or you already know what you want, I want to make sure you receive the creations you dream of. From the moment we first meet, we're a team working to make your celebration memorable — guiding you step by step and staying present throughout your entire event."
              es="Los arreglos florales son uno de los aspectos más personalizables de tu gran día y, por lo general, el segundo elemento más fotografiado, solo por detrás de ti y de tus seres queridos. Ya sea que estés dando los primeros pasos o que ya sepas lo que quieres, quiero asegurarme de que recibas las creaciones con las que sueñas. Por eso, desde el primer momento en que nos reunimos, somos un equipo para lograr que tu celebración sea memorable, acompañándote paso a paso y estando presente durante todo el evento."
            />
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-terracotta text-linen text-[0.65rem] tracking-[0.22em] uppercase font-semibold hover:bg-linen hover:text-moss transition cursor-pointer"
          >
            <Bi en="Inquire About Your Wedding" es="Consultar por Tu Día de Boda" />
          </a>
        </div>

      </div>

        <div className="mt-24 pt-20 border-t border-sand/15 max-w-3xl mx-auto text-center">
          <p className="font-script text-[clamp(1.6rem,3vw,2.4rem)] text-linen mb-10">
            <Bi en="Caring for your floral budget with tenderness." es="Cuidando tu presupuesto floral con mimo." />
          </p>

          <p className="text-[0.85rem] leading-[1.9] text-sand/85 mb-6">
            <Bi
              en="Your budget is part of the plan from day one. Season, guest count, and flower choice affect the total — but I always find a way to make your vision real. Smart substitutions keep the look you love at a fraction of the cost, and mixing tall, lush centerpieces with smaller, delicate ones creates a sophisticated tablescape while maximizing your budget."
              es="Tu presupuesto es parte del plan desde el primer día. La época del año, el número de invitados y el tipo de flor afectan el total — pero siempre encuentro la manera de hacer real tu visión. Las sustituciones inteligentes mantienen el estilo que amas a una fracción del costo, y combinar centros de mesa altos y frondosos con otros más pequeños y delicados crea un paisaje de mesa sofisticado mientras maximiza tu presupuesto."
            />
          </p>

          <p className="text-[0.85rem] leading-[1.9] text-sand/85 mb-8">
            <Bi
              en="You don't need to know your exact style or have every detail planned to book a meeting. Trust the professionals and let me be your ally from day one."
              es="No necesitas tener el estilo exacto definido ni cada detalle planeado para agendar una reunión. Confía en los profesionales y déjame ser tu aliada desde el primer día."
            />
          </p>

          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-terracotta text-linen text-[0.65rem] tracking-[0.22em] uppercase font-semibold hover:bg-linen hover:text-moss transition cursor-pointer mb-4"
          >
            <Bi en="Book a Meeting" es="Agenda una Reunión" />
          </a>

          <span className="inline-block w-12 h-px bg-terracotta mt-4"></span>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-8">
            <Bi en="Real Celebrations" es="Celebraciones Reales" />
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <img src="/gallery/wedding_reception_couple.jpg" alt="Real wedding reception with rose bouquet" className="w-full aspect-[3/5] object-cover" />
            <img src="/gallery/wedding_outdoor_ceremony.jpg" alt="Outdoor wedding ceremony under a floral arch" className="w-full aspect-[3/5] object-cover" />
            <img src="/gallery/wedding_beach_arch_couple.jpg" alt="Couple under sunflower arch at beach wedding" className="w-full aspect-[3/5] object-cover col-span-2 md:col-span-1 mx-auto max-w-[240px]" />
          </div>
        </div>
    </section>
  )
}
