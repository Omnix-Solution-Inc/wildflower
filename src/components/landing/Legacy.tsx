'use client'

import { Bi } from '@/components/shared/Language'

export function Legacy() {
  return (
    <section id="legacy" className="py-24 px-[6%] bg-moss text-sand relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/gallery/real_15.jpg" alt="Family · Nature · Legacy" className="w-full h-[480px] object-cover" />
          </div>
          <span className="absolute -bottom-4 left-6 bg-linen text-moss text-[0.55rem] tracking-[0.25em] uppercase px-4 py-2 shadow-lg">
            <Bi en="Family · Nature · Legacy" es="Familia · Naturaleza · Legado" />
          </span>
        </div>

        <div>
          <p className="text-[0.6rem] tracking-[0.35em] uppercase text-sage mb-4">
            <Bi en="— The Legacy" es="— El Legado" />
          </p>
          <h2 className="font-cinzel text-[clamp(1.8rem,4vw,3rem)] text-white leading-tight mb-7">
            <Bi
              en="Built for the next generation to bloom untamed."
              es="Un legado para que la próxima generación florezca sin ataduras."
            />
          </h2>
          <p className="text-[0.85rem] leading-[2] text-sand/80 mb-6">
            <Bi
              en="The Bella Wildflower is more than a floral studio. It is a declaration of what is possible when a woman chooses to stop surviving and start creating — for herself, and for every soul that comes after her. Born in Ontario, NY. Grown in the wildness of Finger Lakes."
              es="The Bella Wildflower es más que un estudio floral. Es una declaración de lo que es posible cuando una mujer elige dejar de sobrevivir y comenzar a crear — para sí misma, y para cada alma que venga después. Nacida en Ontario, NY. Crecida en la naturaleza salvaje de Finger Lakes."
            />
          </p>
          <p className="text-[0.85rem] leading-[2] text-sand/80 mb-8">
            <Bi
              en="Rooted in the belief that beauty is intentional, that flowers hold memory, and that the most powerful spaces are those designed with soul — this is the legacy being built, one arrangement and one conversation at a time, right here in Ontario, NY."
              es="Arraigada en la creencia de que la belleza es intencional, que las flores guardan memoria, y que los espacios más poderosos son los diseñados con alma — este es el legado que se construye, un arreglo y una conversación a la vez, aquí mismo en Ontario, NY."
            />
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <span className="font-script text-2xl text-linen">Mariela Barbetti</span>
            <a href="#contact"
               className="text-[0.65rem] tracking-[0.2em] uppercase font-semibold text-sand border border-sand/40 px-6 py-3 hover:bg-sand hover:text-moss transition">
              <Bi en="Begin Your Story →" es="Comienza Tu Historia →" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
