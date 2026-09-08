import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/landing/Hero'
import { Manifesto } from '@/components/landing/Manifesto'
import { Events } from '@/components/landing/Events'
import { Weddings } from '@/components/landing/Weddings'
import { Collection } from '@/components/landing/Collection'
import { Shop } from '@/components/landing/Shop'
import { Services } from '@/components/landing/Services'
import { Contact } from '@/components/landing/Contact'
import { Footer } from '@/components/layout/Footer'
import { LangProvider } from '@/components/shared/Language'
import { WhatsAppFloat } from '@/components/shared/WhatsAppFloat'

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <WhatsAppFloat />
      <Hero />
      <Events />
      <Weddings />
      <Collection />
      <Manifesto />
      <Shop />
      <Services />
      <Contact />
      <Footer />
    </LangProvider>
  )
}
