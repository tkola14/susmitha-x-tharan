export type EventKey = 'haldi' | 'sangeeth' | 'wedding'

export interface WeddingEvent {
  id: EventKey
  name: string
  date: string
  time: string
  venue: string
  venueNote?: string
  address: string
  mapsUrl: string
  gradientFrom: string
  gradientTo: string
  accentColor: string
  borderColor: string
  icon: string
  attire: string
  description: string
  muhurtham?: string
}

export const EVENTS: Record<EventKey, WeddingEvent> = {
  haldi: {
    id: 'haldi',
    name: 'Haldi',
    date: 'Tuesday, July 1, 2026',
    time: '7:00 AM CST',
    venue: "Susmitha's Residence",
    address: '1804 Persimmon Pl, Celina, TX 75009',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1804+Persimmon+Pl+Celina+TX+75009',
    gradientFrom: '#FFFBEB',
    gradientTo: '#FEF3C7',
    accentColor: '#D97706',
    borderColor: 'rgba(217,119,6,0.3)',
    icon: '🌼',
    attire: 'Any shades of Yellow 💛!',
    description: 'Begin the celebrations with the sacred Haldi ceremony — a blessing of turmeric, love and new beginnings.',
  },
  sangeeth: {
    id: 'sangeeth',
    name: 'Sangeet',
    date: 'Tuesday, July 1, 2026',
    time: '7:00 PM CST',
    venue: 'Elegance Ballroom',
    venueNote: 'Beside Hello India, Plano',
    address: '8740 Ohio Dr A1, Plano, TX 75024',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=8740+Ohio+Dr+A1+Plano+TX+75024',
    gradientFrom: '#FFF0F5',
    gradientTo: '#FCE7F3',
    accentColor: '#C4607A',
    borderColor: 'rgba(196,96,122,0.3)',
    icon: '🎶',
    attire: '💃: Dark colored Indo-western outfits with little shimmer 🕺: Dark colored suits or Indo-western',
    description: 'An evening of music, dance and joyful celebrations with family and friends.',
  },
  wedding: {
    id: 'wedding',
    name: 'Wedding',
    date: 'Thursday, July 3, 2026',
    time: '8:00 AM CST',
    muhurtham: '9:13 AM CST',
    venue: 'Elegance Estates Ranch',
    address: '17957 E Blackjack Rd E, Pilot Point, TX 76258',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=17957+E+Blackjack+Rd+E+Pilot+Point+TX+76258',
    gradientFrom: '#FFFBEB',
    gradientTo: '#FEF9EC',
    accentColor: '#C9964A',
    borderColor: 'rgba(201,150,74,0.35)',
    icon: '💍',
    attire: 'Indian traditional wear',
    description: 'The sacred union of Susmitha and Tharan, blessed by family, celebrated with you.',
  },
}

export const EVENT_ORDER: EventKey[] = ['haldi', 'sangeeth', 'wedding']
