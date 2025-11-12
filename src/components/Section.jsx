import React from 'react'

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="absolute inset-0 -z-[1]">
        <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(80%_60%_at_50%_30%,black,transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
              {title}
            </h2>
          )}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
