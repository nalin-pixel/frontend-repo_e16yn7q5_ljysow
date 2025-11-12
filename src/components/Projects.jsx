import React from 'react'

const projects = [
  {
    title: 'Nebula Commerce',
    description: 'A headless e‑commerce experience with AI‑assisted search, lightning WebGL visuals, and real‑time inventory.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
    link: '#',
  },
  {
    title: 'Orion OS',
    description: 'A desktop‑like web operating system with draggable windows, theming, and offline apps.',
    tags: ['React', 'Zustand', 'PWA'],
    link: '#',
  },
  {
    title: 'Pulse v2',
    description: 'Motion‑driven marketing site with 3D Spline, framer‑motion micro‑interactions, and layered audio.',
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <a
          key={i}
          href={p.link}
          className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl group-hover:blur-[70px] transition" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl group-hover:blur-[70px] transition" />

          <h3 className="relative text-xl font-semibold text-white">{p.title}</h3>
          <p className="relative mt-2 text-white/70">{p.description}</p>
          <div className="relative mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-xs text-white/80 bg-white/10 border border-white/10 rounded-full px-2 py-1">
                {t}
              </span>
            ))}
          </div>
          <div className="relative mt-5 inline-flex items-center text-cyan-300">
            <span className="mr-2">Explore</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </a>
      ))}
    </div>
  )
}
