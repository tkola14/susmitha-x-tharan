'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState, Suspense, useEffect } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

const FORMSPREE_ID = 'xbdwjjea'

const ALL_EVENTS = [
  { id: 'haldi',    label: 'Haldi',    icon: '🌼', date: 'Jul 1 · 7 AM'   },
  { id: 'sangeeth', label: 'Sangeeth', icon: '🎶', date: 'Jul 1 · 7 PM'   },
  { id: 'wedding',  label: 'Wedding',  icon: '💍', date: 'Jul 3 · 9:13 AM' },
]

function RSVPFormInner() {
  const searchParams = useSearchParams()
  const router       = useRouter()

  const allowedParam  = searchParams.get('events')
  const tokenParam    = searchParams.get('token')

  // Block direct access — must come from an invite link
  useEffect(() => {
    if (!allowedParam && !tokenParam) {
      router.replace('/')
    }
  }, [allowedParam, tokenParam, router])

  if (!allowedParam && !tokenParam) return null

  const allowedEvents = allowedParam
    ? allowedParam.split(',').filter(Boolean)
    : ALL_EVENTS.map(e => e.id)

  const visibleEvents = ALL_EVENTS.filter(e => allowedEvents.includes(e.id))

  const [attending,  setAttending]  = useState<'yes' | 'no' | ''>('')
  const [selEvents,  setSelEvents]  = useState<string[]>(allowedEvents)
  const [submitting, setSubmitting] = useState(false)
  const [success,    setSuccess]    = useState(false)

  const toggleEvent = (id: string) =>
    setSelEvents(p => p.includes(id) ? p.filter(e => e !== id) : [...p, id])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!attending) return
    setSubmitting(true)
    try {
      const data = new FormData(e.currentTarget)
      data.set('attending', attending)
      data.set('events_attending', selEvents.join(', '))
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) setSuccess(true)
      else setSubmitting(false)
    } catch { setSuccess(true) }
  }

  if (success) return (
    <div className="text-center py-10">
      <div className="text-5xl mb-5">🎊</div>
      <h3 className="font-italiana text-3xl sm:text-4xl mb-3" style={{ color: '#3D1A10' }}>
        We Can't Wait to See You!
      </h3>
      <p className="font-cormorant italic text-lg sm:text-xl" style={{ color: '#4A2010' }}>
        Your RSVP has been received.<br />
        Susmitha &amp; Tharan are so excited to celebrate with you. 🌸
      </p>
    </div>
  )

  const inputCls   = "w-full px-4 py-3 rounded-xl border text-sm font-jost bg-white"
  const inputStyle = { borderColor: 'rgba(122,28,56,0.2)', color: '#2C1008' }
  const labelCls   = "font-jost text-[10px] sm:text-xs tracking-widest uppercase block mb-2"
  const labelStyle = { color: '#9B6A40' }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className={labelCls} style={labelStyle}>Will you be joining us?</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          {(['yes', 'no'] as const).map(val => (
            <button key={val} type="button" onClick={() => setAttending(val)}
              className="flex-1 py-3 rounded-xl font-jost text-xs tracking-widest uppercase transition-all border-2"
              style={attending === val
                ? { background: val === 'yes' ? 'linear-gradient(135deg,#7A1C38,#A0720A)' : '#6B7280', color: 'white', borderColor: 'transparent' }
                : { borderColor: 'rgba(122,28,56,0.3)', color: '#3D1A10', background: 'white' }}>
              {val === 'yes' ? '🎉 Joyfully Accepts' : '🙏 Regretfully Declines'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[['first_name','First Name','Priya'],['last_name','Last Name','Sharma']].map(([n,l,p]) => (
          <label key={n}>
            <span className={labelCls} style={labelStyle}>{l}</span>
            <input type="text" name={n} placeholder={p} required className={inputCls} style={inputStyle} />
          </label>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className={labelCls} style={labelStyle}>Email</span>
          <input type="email" name="email" placeholder="priya@gmail.com" required className={inputCls} style={inputStyle} />
        </label>
        <label>
          <span className={labelCls} style={labelStyle}>WhatsApp / Phone</span>
          <input type="tel" name="phone" placeholder="+1 (214) 000-0000" className={inputCls} style={inputStyle} />
        </label>
      </div>

      <div>
        <span className={labelCls} style={labelStyle}>Events Attending</span>
        <div className="flex flex-wrap gap-2">
          {visibleEvents.map(ev => (
            <button key={ev.id} type="button" onClick={() => toggleEvent(ev.id)}
              className="px-3 sm:px-4 py-2 rounded-full text-xs font-jost tracking-wide transition-all border"
              style={selEvents.includes(ev.id)
                ? { background: 'linear-gradient(135deg,#7A1C38,#A0720A)', color: 'white', borderColor: 'transparent' }
                : { borderColor: 'rgba(122,28,56,0.3)', color: '#3D1A10', background: 'white' }}>
              {ev.icon} {ev.label} · {ev.date}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label>
          <span className={labelCls} style={labelStyle}>Number of Guests</span>
          <select name="guests" className={inputCls} style={inputStyle}>
            {['Just me','2 guests','3 guests','4 guests','5 or more'].map(o => <option key={o}>{o}</option>)}
          </select>
        </label>
      </div>

      <label>
        <span className={labelCls} style={labelStyle}>A Message for Susmitha &amp; Tharan ✨</span>
        <textarea name="message" rows={3} placeholder="Share your blessings or wishes…"
          className={`${inputCls} resize-none`} style={inputStyle} />
      </label>

      <button type="submit" disabled={!attending || submitting}
        className="w-full py-4 rounded-full text-white font-jost text-xs tracking-widest uppercase transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: 'linear-gradient(135deg,#7A1C38,#A0720A)', minHeight: '52px' }}>
        {submitting ? 'Sending…' : 'Send My RSVP 🌸'}
      </button>
    </form>
  )
}

export default function RSVPPage() {
  return (
    <div className="min-h-screen" style={{ background: '#FEFAF5' }}>
      <div className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-feet.jpg" alt="" fill
            className="object-cover" style={{ objectPosition: 'center 25%' }} />
          <div className="page-header-overlay" />
        </div>
        <div className="relative z-10 px-4">
          <ScrollReveal>
            <h1 className="font-italiana text-5xl sm:text-6xl md:text-7xl mb-3" style={{ color: '#3D1A10' }}>RSVP</h1>
            <p className="font-cormorant italic text-lg sm:text-xl mb-1" style={{ color: '#4A2010' }}>
              Please respond by May 20, 2026
            </p>
          </ScrollReveal>
        </div>
      </div>
      <div className="max-w-xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <ScrollReveal>
          <div className="glass-card p-6 sm:p-10">
            <Suspense fallback={<p className="text-center font-jost text-sm py-8" style={{ color: '#9B6A40' }}>Loading…</p>}>
              <RSVPFormInner />
            </Suspense>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
