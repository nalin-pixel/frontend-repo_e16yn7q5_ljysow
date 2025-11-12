import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#05060a] text-white selection:bg-fuchsia-500/30 selection:text-white">
      <Navbar />
      <Hero />

      <Section id="about" eyebrow="About" title="Design‑driven engineer crafting cosmic web experiences">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 leading-relaxed text-white/80">
              I’m Abhinav — a full‑stack developer focused on expressive UI, buttery motion, and reliable backend systems. I blend art and engineering to ship interfaces that feel alive and purposeful.
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-cyan-500/20 border border-white/10 p-4">Remote • India</div>
            <div className="rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-cyan-500/20 border border-white/10 p-4">Available • Freelance</div>
          </div>
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Featured Work">
        <Projects />
      </Section>

      <Section id="skills" eyebrow="Skills" title="Core Stack">
        <Skills />
      </Section>

      <Section id="contact" eyebrow="Contact" title="Let’s build something interstellar">
        <Contact />
      </Section>

      <footer className="py-10 text-center text-white/50">
        © {new Date().getFullYear()} Abhinav. Built with love and stardust.
      </footer>
    </div>
  )
}

export default App
