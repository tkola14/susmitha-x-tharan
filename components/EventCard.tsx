import { WeddingEvent } from '@/lib/events'

interface Props { event: WeddingEvent; index?: number }

export default function EventCard({ event, index = 0 }: Props) {
  return (
    <div
      className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
      style={{
        border: `1.5px solid ${event.borderColor}`,
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        animationDelay: `${index * 0.12}s`,
      }}
    >
      {/* Top bar */}
      <div className="h-1" style={{ background: `linear-gradient(90deg, transparent, ${event.accentColor}, transparent)` }} />

      <div className="p-5 sm:p-7">
        {/* Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4"
          style={{ background: `${event.accentColor}12` }}>
          {event.icon}
        </div>

        {/* Name */}
        <h3 className="font-italiana text-3xl sm:text-4xl mb-1" style={{ color: '#1C0A06' }}>
          {event.name}
        </h3>

        {/* Date */}
        <p className="font-jost text-[10px] sm:text-xs tracking-widest uppercase mb-1" style={{ color: event.accentColor }}>
          {event.date}
        </p>

        {/* Time */}
        <p className="font-cormorant text-lg sm:text-xl font-medium mb-2" style={{ color: '#1C0A06' }}>
          {event.time}
        </p>

        {/* Muhurtham */}
        {event.muhurtham && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-jost mb-3"
            style={{ background: `${event.accentColor}12`, color: event.accentColor, border: `1px solid ${event.accentColor}35` }}>
            🪔 Sumuhurtham: {event.muhurtham}
          </div>
        )}

        {/* Divider */}
        <div className="h-px my-3" style={{ background: `${event.accentColor}18` }} />

        {/* Venue */}
        <p className="font-cormorant text-base sm:text-lg font-semibold mb-0.5" style={{ color: '#1C0A06' }}>
          {event.venue}
        </p>
        {event.venueNote && (
          <p className="font-jost text-xs mb-1" style={{ color: '#7A5040' }}>({event.venueNote})</p>
        )}
        <p className="font-jost text-xs sm:text-sm leading-relaxed mb-4" style={{ color: '#7A5040' }}>
          {event.address}
        </p>

        {/* Attire */}
        {event.attire && (
          <div className="font-cormorant text-xs sm:text-sm leading-relaxed mb-5" style={{ color: '#3D1A10' }}>
            Attire: {event.attire}
          </div>
        )}

        {/* Description */}
        <p className="font-cormorant italic text-sm sm:text-base leading-relaxed mb-5" style={{ color: '#3D1A10' }}>
          {event.description}
        </p>

        {/* Maps button */}
        <a href={event.mapsUrl} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full text-white font-jost text-xs tracking-widest uppercase hover:scale-105 hover:shadow-md transition-all"
          style={{ background: `linear-gradient(135deg, ${event.accentColor}EE, ${event.accentColor}BB)` }}>
          📍 Open in Maps ↗
        </a>
      </div>
    </div>
  )
}
