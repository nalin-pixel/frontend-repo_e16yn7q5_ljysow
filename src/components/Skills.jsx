import React from 'react'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node', level: 80 },
  { name: 'Python', level: 88 },
  { name: 'FastAPI', level: 84 },
  { name: 'MongoDB', level: 82 },
  { name: 'Three.js', level: 70 },
]

export default function Skills() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((s) => (
        <div key={s.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between">
            <span className="text-white font-medium">{s.name}</span>
            <span className="text-white/70 text-sm">{s.level}%</span>
          </div>
          <div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" style={{ width: `${s.level}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}
