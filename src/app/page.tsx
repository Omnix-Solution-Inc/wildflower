import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/landing/Hero'
import { About } from '@/components/landing/About'
import { Services } from '@/components/landing/Services'
import { Gallery } from '@/components/landing/Gallery'
import { Testimonials } from '@/components/landing/Testimonials'
import { CTA } from '@/components/landing/CTA'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
