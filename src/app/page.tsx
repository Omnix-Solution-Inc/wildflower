import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/landing/Hero'
import { Manifesto } from '@/components/landing/Manifesto'
import { Events } from '@/components/landing/Events'
import { Shop } from '@/components/landing/Shop'
import { Services } from '@/components/landing/Services'
import { Legacy } from '@/components/landing/Legacy'
import { Contact } from '@/components/landing/Contact'
import { Footer } from '@/components/layout/Footer'
import { LangProvider } from '@/components/shared/Language'

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <Events />
      <Manifesto />
      <Shop />
      <Services />
      <Legacy />
      <Contact />
      <Footer />
    </LangProvider>
  )
}
