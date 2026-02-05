import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Process from '@/components/process'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import FAQ from '@/components/faq'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Process />
      <Skills />
      <Experience />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
