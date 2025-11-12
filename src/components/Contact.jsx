import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    const formData = Object.fromEntries(new FormData(e.currentTarget))

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (res.ok) setStatus('Message sent! I will get back soon.')
      else setStatus(data.detail || 'Something went wrong.')
    } catch (err) {
      setStatus('Unable to send. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
      <div>
        <label className="block text-sm text-white/70 mb-1">Your Name</label>
        <input name="name" required className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-1">Email</label>
        <input name="email" type="email" required className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="john@doe.dev" />
      </div>
      <div>
        <label className="block text-sm text-white/70 mb-1">Message</label>
        <textarea name="message" rows={5} required className="w-full rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="Tell me about your project..." />
      </div>
      <button disabled={loading} className="rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-slate-900 font-semibold px-5 py-3 disabled:opacity-60">
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {status && <p className="text-sm text-white/80">{status}</p>}
    </form>
  )
}
