import type { Metadata } from 'next'
import { LangProvider } from '@/components/shared/Language'
import PlannerClientWrapper from '@/components/wedding/PlannerClientWrapper'

export const metadata: Metadata = {
  title: 'Planificación de Evento | Event Planner — The Bella Wild Flower',
  description: 'Bilingual event planning: budget manager, master questionnaire, and a beautiful custom PDF. Planificación de evento bilingüe: presupuesto, cuestionario maestro y PDF personalizado. TheBellaWildFlower.com · WhatsApp +1 321 732 9993',
}

export default function EventPlannerPage() {
  return (
    <LangProvider>
      <PlannerClientWrapper />
    </LangProvider>
  )
}
