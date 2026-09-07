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
            src="/gallery/06_arch_white_green.jpg"
            alt="Wedding floral arch"
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
              es="Los arreglos florales son uno de los aspectos más personalizables de tu gran día y, por lo general, el segundo elemento al que más fotos se le toman, solo por detrás de ti y de tus seres queridos. Ya sea que estés dando los primeros pasos o que ya sepas lo que quieres, quiero asegurarme de que recibas las creaciones con las que sueñas. Por eso, desde el primer momento en que nos reunimos, somos un equipo para lograr que tu celebración sea memorable, acompañándote paso a paso y estando presente durante todo el evento."
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
              en="A little less fun than selecting your flowers, but just as important, is defining your budget. Don't hesitate to ask me whether I require a minimum, whether I have recommendations that fit your finances, whether I provide detailed proposals with receipts, and what the deadlines are for the deposit and final payment."
              es="Algo un poco menos divertido que seleccionar las flores, pero igual de importante, es definir tu presupuesto. No dudes en consultarme si requiero un monto mínimo, si tengo recomendaciones que se ajusten a tus finanzas, si proporciono propuestas detalladas con recibos, y cuáles son los plazos para el depósito y el pago final."
            />
          </p>

          <p className="text-[0.85rem] leading-[1.9] text-sand/85 mb-6">
            <Bi
              en="Factors like the season, the number of guests, travel, the size of the arrangements, and the type of flower will affect the total — but I always look for a way to make your vision a reality. Smart substitutions can usually be made to fit your financial plan without sacrificing the style you have in mind. For example, if you love dahlias — which have more limited availability and a higher price — we can opt for alternatives like a daisy-type chrysanthemum, which offers a similar look at a fraction of the cost."
              es="Factores como la época del año, el número de invitados, los desplazamientos, el tamaño de los arreglos y el tipo de flor afectarán el total, pero siempre busco la manera de hacer realidad tu visión. Por lo general, se pueden hacer sustituciones inteligentes para adaptarnos a tu plan financiero sin sacrificar el estilo que tienes en mente. Por ejemplo, si te encantan las dalias —que tienen una disponibilidad más limitada y un precio mayor—, podemos optar por alternativas como un crisantemo tipo margarita, que ofrece un aspecto similar a una fracción del costo."
            />
          </p>

          <p className="text-[0.85rem] leading-[1.9] text-sand/85 mb-6">
            <Bi
              en="I also recommend mixing and alternating centerpieces to maximize your budget. By combining some tall, lush arrangements with smaller, more delicate ones, we save money while creating a dynamic and sophisticated tablescape."
              es="También recomiendo combinar y alternar centros de mesa para maximizar el presupuesto. Al integrar algunos arreglos altos y frondosos junto con otros más pequeños y delicados, logramos ahorrar dinero mientras creamos un paisaje de mesa dinámico y sofisticado."
            />
          </p>

          <p className="text-[0.85rem] leading-[1.9] text-sand/85 mb-6">
            <Bi
              en="Flowers should be the perfect complement to your big day, so let them reflect your personal style. You can use reference photos as inspiration, but your event should embody your own essence."
              es="Las flores deben servir como un complemento perfecto para tu gran día, así que deja que reflejen tu estilo personal. Puedes usar fotos de referencia como inspiración, pero tu evento debe encarnar tu propia esencia."
            />
          </p>

          <p className="text-[0.85rem] leading-[1.9] text-sand/85 mb-6">
            <Bi
              en="You don't need to know your exact style or have every detail planned to the letter to book a meeting with me. We're a team working to make your celebration memorable and unforgettable — simply trust the professionals and let me be your new ally on this journey."
              es="No necesitas tener el estilo exacto definido ni cada detalle planeado al pie de la letra para agendar una reunión conmigo. Somos un equipo para lograr que tu celebración sea memorable e inolvidable: simplemente confía en los profesionales y permíteme ser tu nueva aliada en este camino."
            />
          </p>

          <span className="inline-block w-12 h-px bg-terracotta mt-4"></span>
        </div>
    </section>
  )
}
