import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getGuestConfig } from '@/lib/guestConfig'
import { EVENTS } from '@/lib/events'
import EventCard from '@/components/EventCard'
import ScrollReveal from '@/components/ScrollReveal'
import CountdownTimer from '@/components/CountdownTimer'

interface Props { params: { token: string } }

export default function InvitePage({ params }: Props) {
  const config = getGuestConfig(params.token)
  if (!config) notFound()

  const events = config.events.map(k => EVENTS[k])
  const eventBadge =
    config.events.length === 3             ? '🎉 Haldi, Sangeeth & Wedding' :
    config.events.length === 2 && config.events.includes('haldi') ? '🌼 Haldi & Sangeeth' :
    config.events.length === 2             ? '🎶 Sangeeth & Wedding'         :
                                             '💍 Wedding Ceremony'

  return (
    <div className="min-h-screen" style={{ background: '#FEFAF5' }}>

      {/* ── HERO ──────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/bg-feet.jpg" alt="" fill priority
            className="object-cover" style={{ objectPosition: 'center 25%' }} />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto pt-20 pb-16">

          {/* Logo above tagline */}
          <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.05s' }}>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 animate-float rounded-full overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '2px solid rgba(122,28,56,0.25)' }}>
              <Image src="/images/logo-final.jpg" alt="S & T" fill className="object-cover" />
            </div>
          </div>

          {/* Personal greeting — only for custom named tokens */}
          {config.name && (
            <p className="font-cormorant italic text-xl sm:text-2xl mb-3 animate-fade-in"
              style={{ color: '#4A2010', animationDelay: '0.08s' }}>
              Dear {config.name},
            </p>
          )}

          <p className="font-jost text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-5 animate-fade-in"
            style={{ color: '#9B6A40', animationDelay: '0.12s' }}>
            You Are Cordially Invited to Celebrate
          </p>

          <h1 className="font-italiana leading-[0.88] animate-fade-in"
            style={{ fontSize: 'clamp(3.5rem,14vw,8rem)', color: '#7A1C38', animationDelay: '0.22s' }}>
            Susmitha
          </h1>
          <p className="font-cormorant italic text-2xl sm:text-3xl my-1 animate-fade-in"
            style={{ color: '#A0720A', animationDelay: '0.32s' }}>
            &amp;
          </p>
          <h1 className="font-italiana leading-[0.88] mb-6 animate-fade-in"
            style={{ fontSize: 'clamp(3.5rem,14vw,8rem)', color: '#7A3A10', animationDelay: '0.42s' }}>
            Tharan
          </h1>

          {/* Events badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 animate-fade-in"
            style={{ background: 'rgba(122,28,56,0.07)', border: '1px solid rgba(122,28,56,0.2)', animationDelay: '0.57s' }}>
            <span className="font-jost text-[10px] sm:text-xs tracking-widest uppercase" style={{ color: '#7A1C38' }}>
              {eventBadge}
            </span>
          </div>

          {/* RSVP deadline */}
          <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: '0.62s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: 'rgba(160,114,10,0.08)', border: '1px solid rgba(160,114,10,0.2)' }}>
              <span className="text-xs">📅</span>
              <span className="font-jost text-[10px] sm:text-xs tracking-widest uppercase" style={{ color: '#A0720A' }}>
                RSVP by May 20, 2026
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.77s' }}>
            <a href="#events"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-jost text-xs tracking-widest uppercase hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg,#7A1C38,#A0720A)' }}>
              View My Events
            </a>
            <a href="#rsvp"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-jost text-xs tracking-widest uppercase hover:scale-105 transition-transform border-2"
              style={{ color: '#7A1C38', borderColor: '#7A1C38' }}>
              RSVP Now
            </a>
          </div>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: '1.4s' }}>
          <p className="font-jost text-[10px] tracking-widest uppercase" style={{ color: '#9B6A40' }}>Scroll</p>
          <div className="w-4 h-4 border-r-2 border-b-2 rotate-45 animate-bounce" style={{ borderColor: '#A0720A' }} />
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ background: '#FBF5EC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Photo — first on mobile */}
            <ScrollReveal delay={100} className="order-first md:order-last">
              <div className="relative max-w-xs sm:max-w-sm mx-auto">
                <div className="absolute inset-0 rounded-3xl scale-[1.04] rotate-2"
                  style={{ background: 'linear-gradient(135deg,rgba(247,197,160,0.6),rgba(122,28,56,0.25))' }} />
                <Image src="/images/couple.jpg" alt="Susmitha and Tharan"
                  width={400} height={500}
                  className="relative z-10 rounded-3xl object-cover w-full shadow-xl" />
              </div>
            </ScrollReveal>

            {/* Text */}
            <ScrollReveal className="order-last md:order-first text-center md:text-left">
              <span className="font-jost text-[10px] sm:text-xs tracking-[0.35em] uppercase block mb-3"
                style={{ color: '#A0720A' }}>
                Our Story
              </span>
              <h2 className="font-italiana text-4xl sm:text-5xl mb-5" style={{ color: '#3D1A10' }}>
                Two Hearts,<br />
                <span style={{ color: '#7A1C38' }}>One Destiny</span>
              </h2>
              <p className="font-cormorant text-lg sm:text-xl leading-relaxed mb-4"
                style={{ color: '#4A2010', fontWeight: 500 }}>
                We are childhood friends who found each other in school,
                fell in love along the way, and now we are taking
                the most beautiful step of our lives — getting married,
                surrounded by the people we love most.
              </p>
              <p className="font-cormorant italic text-base sm:text-lg leading-relaxed mb-3" style={{ color: '#6A4030' }}>
                Across every prayer whispered, every blessing bestowed,
                and every memory held dear — this day has always
                been waiting for you to witness it.
              </p>
              <p className="font-cormorant italic text-base sm:text-lg leading-relaxed" style={{ color: '#6A4030' }}>
                We did not choose this moment — this moment chose us.
                And in choosing us, it chose every single one of you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ── FAMILIES ──────────────────────────────── */}
      <section className="py-12 sm:py-16" style={{ background: '#FEFAF5' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-8">
            <span className="font-jost text-[10px] sm:text-xs tracking-[0.35em] uppercase block mb-3"
              style={{ color: '#A0720A' }}>
              The Families
            </span>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <ScrollReveal delay={80}>
              <div className="glass-card p-6 sm:p-8">
                <span className="font-jost text-[10px] tracking-widest uppercase block mb-3"
                  style={{ color: '#A0720A' }}>
                  The Groom
                </span>
                <h3 className="font-italiana text-2xl sm:text-3xl mb-3" style={{ color: '#7A3A10' }}>
                  Tharan Yogesh Kolani
                </h3>
                <p className="font-cormorant italic text-base sm:text-lg leading-relaxed" style={{ color: '#4A2010' }}>
                  Son of<br />
                  <strong className="not-italic font-semibold" style={{ color: '#2C1008' }}>Smt. Kavitha Kolani</strong><br />
                  and<br />
                  <strong className="not-italic font-semibold" style={{ color: '#2C1008' }}>Shri Venkat Reddy Kolani</strong>
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <div className="glass-card p-6 sm:p-8">
                <span className="font-jost text-[10px] tracking-widest uppercase block mb-3"
                  style={{ color: '#7A1C38' }}>
                  The Bride
                </span>
                <h3 className="font-italiana text-2xl sm:text-3xl mb-3" style={{ color: '#7A1C38' }}>
                  Susmitha Chowdary Nallamothu
                </h3>
                <p className="font-cormorant italic text-base sm:text-lg leading-relaxed" style={{ color: '#4A2010' }}>
                  Daughter of<br />
                  <strong className="not-italic font-semibold" style={{ color: '#2C1008' }}>Smt. Rama Devi Nallamothu</strong><br />
                  and<br />
                  <strong className="not-italic font-semibold" style={{ color: '#2C1008' }}>Shri Narasimha Rao Nallamothu</strong>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── EVENTS ────────────────────────────────── */}
      <section id="events" className="py-16 sm:py-24" style={{ background: '#FEFAF5' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <span className="font-jost text-[10px] sm:text-xs tracking-[0.4em] uppercase block mb-3"
              style={{ color: '#A0720A' }}>
              Your Celebrations
            </span>
            <h2 className="font-italiana text-4xl sm:text-5xl md:text-6xl" style={{ color: '#3D1A10' }}>
              {events.length === 1 ? 'Your Event' : 'Your Events'}
            </h2>
          </ScrollReveal>

          <div className={`grid gap-4 sm:gap-6 ${
            events.length === 1 ? 'max-w-sm mx-auto' :
            events.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' :
            'sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {events.map((event, i) => (
              <ScrollReveal key={event.id} delay={i * 120}>
                <EventCard event={event} index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTDOWN ─────────────────────────────── */}
      <section className="py-16 sm:py-24 text-center" style={{ background: '#1B2A42' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="font-jost text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 gold-on-dark">
              Until the Saptapadi
            </p>
            <h2 className="font-italiana text-3xl sm:text-4xl text-white mb-1">
              Seven Sacred Steps as One 🪔
            </h2>
            <p className="font-cormorant italic text-sm mb-10" style={{ color: 'rgba(255,255,255,0.4)' }}>
              July 3, 2026 · 9:13 AM CST
            </p>
            <CountdownTimer />
          </ScrollReveal>
        </div>
      </section>

      {/* ── RSVP ──────────────────────────────────── */}
      <section id="rsvp" className="py-16 sm:py-24 text-center" style={{ background: '#FEFAF5' }}>
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="font-italiana text-4xl sm:text-5xl mb-3" style={{ color: '#3D1A10' }}>
              Kindly <span style={{ color: '#7A1C38' }}>RSVP</span>
            </h2>
            <p className="font-cormorant italic text-lg sm:text-xl mb-1" style={{ color: '#4A2010' }}>
              Please respond by May 20, 2026
            </p>
            <p className="font-jost text-xs mb-8" style={{ color: '#9B6A40' }}>
              Let us know so we can celebrate with you properly 🌸
            </p>
            <Link
              href={`/rsvp?token=${params.token}&events=${config.events.join(',')}`}
              className="inline-flex items-center justify-center px-10 py-4 rounded-full text-white font-jost text-xs tracking-widest uppercase hover:scale-105 transition-all shadow-md"
              style={{ background: 'linear-gradient(135deg,#7A1C38,#A0720A)' }}>
              Send My RSVP 🌸
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export const dynamicParams = true
