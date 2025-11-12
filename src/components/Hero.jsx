import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for vibe */}
      <div className="pointer-events-none absolute inset-0">        
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-fuchsia-500/30 blur-[90px] rounded-full" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-cyan-400/20 blur-[110px] rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-40 w-[40rem] bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 flex items-center">
        <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-40 sm:pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for freelance — 2025
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-br from-white via-fuchsia-100 to-cyan-100 bg-clip-text text-transparent">
                Abhinav — Building Cosmic Experiences
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              I craft futuristic web apps blending elegant UI, smooth motion, and solid engineering. Let’s launch something interstellar together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-lg bg-white text-slate-900 font-semibold px-5 py-3 hover:brightness-110 transition">View Work</a>
              <a href="#contact" className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold px-5 py-3 hover:brightness-110 transition">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.05),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.08),transparent_40%)]" />
    </section>
  )
}
