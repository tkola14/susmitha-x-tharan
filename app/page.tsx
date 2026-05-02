import Image from 'next/image'
import Link from 'next/link'
import CountdownTimer from '@/components/CountdownTimer'
import ScrollReveal from '@/components/ScrollReveal'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bg-feet.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 25%' }}
          />
          <div className="hero-overlay" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto pt-20 pb-16">

          {/* Logo in hero */}
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 animate-float rounded-full overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)', border: '2px solid rgba(122,28,56,0.25)' }}>
              <Image src="/images/logo-final.jpg" alt="S & T" fill className="object-cover" />
            </div>
          </div>

          {/* Tag */}
          <p className="font-jost text-[10px] sm:text-xs tracking-[0.45em] uppercase mb-5 animate-fade-in"
            style={{ color: '#9B6A40', animationDelay: '0.15s' }}>
            You are cordially invited to celebrate
          </p>

          {/* Susmitha — deep burgundy rose */}
          <h1 className="font-italiana leading-[0.88] animate-fade-in"
            style={{ fontSize: 'clamp(4rem,16vw,9rem)', color: '#7A1C38', animationDelay: '0.25s' }}>
            Susmitha
          </h1>

          {/* & — warm gold */}
          <p className="font-cormorant italic text-2xl sm:text-3xl my-1 animate-fade-in"
            style={{ color: '#A0720A', animationDelay: '0.35s' }}>
            &amp;
          </p>

          {/* Tharan — deep terracotta */}
          <h1 className="font-italiana leading-[0.88] animate-fade-in"
            style={{ fontSize: 'clamp(4rem,16vw,9rem)', color: '#7A3A10', animationDelay: '0.45s' }}>
            Tharan
          </h1>

          {/* Date */}
          <div className="mt-7 mb-1 divider animate-fade-in" style={{ animationDelay: '0.55s' }}>
            <span className="font-cormorant italic text-base sm:text-lg" style={{ color: '#7A1C38' }}>
              July 3, 2026
            </span>
          </div>
          <p className="font-jost text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-3 animate-fade-in"
            style={{ color: '#9B6A40', animationDelay: '0.6s' }}>
            Elegance Estates Ranch · Pilot Point, TX
          </p>

          {/* RSVP deadline note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in"
            style={{ background: 'rgba(122,28,56,0.07)', border: '1px solid rgba(122,28,56,0.2)', animationDelay: '0.65s' }}>
            <span className="text-xs">📅</span>
            <span className="font-jost text-[10px] sm:text-xs tracking-widest uppercase" style={{ color: '#7A1C38' }}>
              RSVP by May 20, 2026
            </span>
          </div>

          {/* Quote */}
          <p className="font-cormorant italic text-lg sm:text-xl leading-relaxed max-w-sm sm:max-w-md mx-auto mb-10 animate-fade-in"
            style={{ color: '#4A2010', animationDelay: '0.7s' }}>
            "Two souls, one journey —<br />
            written in stars, sealed with love,<br />
            celebrated with you."
          </p>

          {/* CTA — View Events only, no RSVP from home */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.85s' }}>
            <Link href="/events"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-jost text-xs tracking-widest uppercase hover:scale-105 transition-transform"
              style={{ background: 'linear-gradient(135deg,#7A1C38,#A0720A)' }}>
              View Events
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: '1.4s' }}>
          <p className="font-jost text-[10px] tracking-widest uppercase" style={{ color: '#9B6A40' }}>Scroll</p>
          <div className="w-4 h-4 border-r-2 border-b-2 rotate-45 animate-bounce" style={{ borderColor: '#A0720A' }} />
        </div>
      </section>

      {/* ── FAMILIES ──────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ background: '#FEFAF5' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <span className="font-jost text-[10px] sm:text-xs tracking-[0.35em] uppercase block mb-3" style={{ color: '#A0720A' }}>
              The Families
            </span>
            <h2 className="font-italiana text-4xl sm:text-5xl md:text-6xl" style={{ color: '#3D1A10' }}>
              With Joyful Hearts
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            <ScrollReveal delay={100}>
              <div className="glass-card p-6 sm:p-8">
                <span className="font-jost text-[10px] tracking-widest uppercase block mb-3" style={{ color: '#A0720A' }}>
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

            <ScrollReveal delay={180}>
              <div className="glass-card p-6 sm:p-8">
                <span className="font-jost text-[10px] tracking-widest uppercase block mb-3" style={{ color: '#7A1C38' }}>
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

      {/* ── OUR STORY ──────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ background: '#FBF5EC' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Photo — first on mobile */}
            <ScrollReveal delay={100} className="order-first md:order-last">
              <div className="relative max-w-xs sm:max-w-sm mx-auto">
                <div className="absolute inset-0 rounded-3xl scale-[1.04] rotate-2"
                  style={{ background: 'linear-gradient(135deg,rgba(247,197,160,0.6),rgba(122,28,56,0.25))' }} />
                <Image
                  src="/images/couple.jpg"
                  alt="Susmitha and Tharan"
                  width={400}
                  height={500}
                  className="relative z-10 rounded-3xl object-cover w-full shadow-xl"
                />
              </div>
            </ScrollReveal>

            {/* Text — solid background, no bleed */}
            <ScrollReveal className="order-last md:order-first text-center md:text-left">
              <span className="font-jost text-[10px] sm:text-xs tracking-[0.35em] uppercase block mb-3"
                style={{ color: '#A0720A' }}>
                Our Story
              </span>
              <h2 className="font-italiana text-4xl sm:text-5xl mb-5" style={{ color: '#3D1A10' }}>
                Two Hearts,<br />
                <span style={{ color: '#7A1C38' }}>One Destiny</span>
              </h2>
              <p className="font-cormorant text-lg sm:text-xl leading-relaxed mb-4" style={{ color: '#4A2010', fontWeight: 500 }}>
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

      {/* ── COUNTDOWN — dark navy ─────────────────── */}
      <section className="py-16 sm:py-24 text-center" style={{ background: '#1B2A42' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <p className="font-jost text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-3 gold-on-dark">
              Counting Down
            </p>
            <h2 className="font-italiana text-3xl sm:text-4xl text-white mb-2">
              Until the Saptapadi
            </h2>
            <p className="font-cormorant italic text-base sm:text-lg mb-10 sm:mb-14"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              Seven Sacred Steps as One 🪔
            </p>
            <CountdownTimer />
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
