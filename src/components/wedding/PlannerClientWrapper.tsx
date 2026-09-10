'use client'

import { useLang } from '@/components/shared/Language'
import PlannerClient from './PlannerClient'

export default function PlannerClientWrapper() {
  const { lang, setLang } = useLang()
  return <PlannerClient lang={lang} setLang={setLang} />
}
