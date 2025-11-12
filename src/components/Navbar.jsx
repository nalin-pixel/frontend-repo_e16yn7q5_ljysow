import React from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5 border border-white/10">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-cyan-400 shadow-inner shadow-purple-800/30" />
              <span className="text-white/90 group-hover:text-white font-semibold tracking-wide">ABHINAV</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2 hover:brightness-110 transition-shadow shadow-[0_0_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_0_rgba(168,85,247,0.35)]"
              >
                Hire Me
              </a>
            </nav>

            <div className="md:hidden">
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
