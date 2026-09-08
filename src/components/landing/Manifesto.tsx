'use client'

import { Bi } from '@/components/shared/Language'

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 px-[6%] bg-sand">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[0.6rem] tracking-[0.35em] uppercase text-sage mb-6">
          <Bi en="— The Manifesto" es="— El Manifiesto" />
        </p>

        <blockquote className="font-script text-[clamp(1.5rem,3vw,2.4rem)] text-moss leading-snug mb-10">
          <Bi
            en="“Inspired by Alena, Ana, Alejandro, and Abraham — and the untamed beauty they carry within.”"
            es="“Inspirada por Alena, Ana, Alejandro y Abraham — y la belleza indomable que llevan dentro.”"
          />
        </blockquote>

        {/* Founder */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-linen shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/founder.jpg" alt="Mariela Barbetti" className="w-full h-full object-cover" />
          </div>
          <span className="font-script text-[clamp(1.8rem,3vw,2.6rem)] text-black leading-tight">Mariela Barbetti</span>
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-moss">Fundadora</span>
        </div>
      </div>
    </section>
  )
}
