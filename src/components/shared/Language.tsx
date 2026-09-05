'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Lang = 'en' | 'es'

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'en',
  setLang: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('bw_lang')
      if (saved === 'es' || saved === 'en') setLangState(saved)
    } catch {}
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('bw_lang', l) } catch {}
  }

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)

/** Bilingual text: renders only the active language */
export function Bi({ en, es }: { en: ReactNode; es: ReactNode }) {
  const { lang } = useLang()
  return <>{lang === 'en' ? en : es}</>
}
