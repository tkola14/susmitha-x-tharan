import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'
import { EVENTS } from '@/lib/events'

const venues = [
  { ...EVENTS.haldi    },
  { ...EVENTS.sangeeth },
  { ...EVENTS.wedding  },
]

export default function VenuePage() {
  return (
    <div className="min-h-screen" style={{ background: '#FEFAF5' }}>

      {/* Header */}
      <div className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-feet.jpg" alt="" fill className="object-cover" style={{ objectPosition: 'center 25%' }} />
          <div className="page-header-overlay" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <span className="font-jost text-[10px] sm:text-xs tracking-[0.4em] uppercase block mb-3" style={{ color: '#A0720A' }}>
              Where Love Takes Stage
            </span>
            <h1 className="font-italiana text-5xl sm:text-6xl md:text-7xl mb-4" style={{ color: '#3D1A10' }}>
              Venues
            </h1>
            <p className="font-cormorant italic text-lg sm:text-xl" style={{ color: '#3D1A10' }}>
              Tap any venue card to open directions in Google Maps.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28 flex flex-col gap-4 sm:gap-6">
        {venues.map((v, i) => (
          <ScrollReveal key={v.id} delay={i * 120}>
            <a
              href={v.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 no-underline"
              style={{ border: `1.5px solid ${v.borderColor}`, boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shrink-0"
                style={{ background: `${v.accentColor}12` }}>
                {v.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <span className="font-jost text-[10px] sm:text-xs tracking-widest uppercase block mb-1"
                  style={{ color: v.accentColor }}>
                  {v.name} · {v.date}
                </span>
                <h3 className="font-italiana text-2xl sm:text-3xl mb-0.5" style={{ color: '#3D1A10' }}>
                  {v.venue}
                </h3>
                {v.venueNote && (
                  <p className="font-jost text-xs mb-1" style={{ color: '#7A5040' }}>({v.venueNote})</p>
                )}
                <p className="font-jost text-xs sm:text-sm leading-relaxed mb-2" style={{ color: '#7A5040' }}>
                  {v.address}
                </p>
                <p className="font-cormorant text-base sm:text-lg" style={{ color: v.accentColor }}>
                  {v.time}
                  {v.muhurtham && <span className="text-sm ml-2 opacity-80"> · Muhurtham: {v.muhurtham}</span>}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform"
                style={{ background: v.accentColor }}>
                ↗
              </div>
            </a>
          </ScrollReveal>
        ))}

        {/* Map embed */}
        <ScrollReveal delay={400}>
          <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden" style={{ border: '1.5px solid rgba(160,114,10,0.2)' }}>
            <div className="px-5 sm:px-7 py-5 border-b" style={{ borderColor: 'rgba(160,114,10,0.15)' }}>
              <h3 className="font-italiana text-2xl sm:text-3xl" style={{ color: '#3D1A10' }}>Wedding Venue</h3>
              <p className="font-jost text-xs sm:text-sm mt-1" style={{ color: '#7A5040' }}>
                Elegance Estates Ranch · Pilot Point, TX
              </p>
            </div>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://maps.google.com/maps?q=17957+E+Blackjack+Rd+E,+Pilot+Point,+TX+76258&output=embed"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
