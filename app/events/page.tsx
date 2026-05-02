import Image from 'next/image'
import EventCard from '@/components/EventCard'
import ScrollReveal from '@/components/ScrollReveal'
import { EVENTS, EVENT_ORDER } from '@/lib/events'

export default function EventsPage() {
  const events = EVENT_ORDER.map(k => EVENTS[k])
  return (
    <div className="min-h-screen" style={{ background: '#FEFAF5' }}>

      {/* Page header with bg-feet texture */}
      <div className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-feet.jpg" alt="" fill className="object-cover" style={{ objectPosition: 'center 25%' }} />
          <div className="page-header-overlay" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <span className="font-jost text-[10px] sm:text-xs tracking-[0.4em] uppercase block mb-3" style={{ color: '#A0720A' }}>
              The Celebrations
            </span>
            <h1 className="font-italiana text-5xl sm:text-6xl md:text-7xl mb-4" style={{ color: '#3D1A10' }}>
              Events
            </h1>
            <p className="font-cormorant italic text-lg sm:text-xl" style={{ color: '#3D1A10' }}>
              Each ceremony is a thread in the tapestry of this love story.
              Come, be woven into it.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {events.map((event, i) => (
            <ScrollReveal key={event.id} delay={i * 120}>
              <EventCard event={event} index={i} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 sm:mt-16 text-center glass-card p-6 sm:p-8 max-w-lg mx-auto">
            <p className="font-cormorant italic text-xl sm:text-2xl mb-2" style={{ color: '#3D1A10' }}>
              "With every celebration, our joy multiplies."
            </p>
            <p className="font-jost text-[10px] sm:text-xs tracking-widest uppercase" style={{ color: '#7A5040' }}>
              — Susmitha &amp; Tharan
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
