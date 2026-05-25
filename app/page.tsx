'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'
import Image from 'next/image'

// ── Scroll reveal ──────────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

function Fade({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

// ── SVG icons ─────────────────────────────────────────────────────────────────

function TableIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <rect x="3" y="9" width="22" height="3" rx="1.5" />
      <line x1="8" y1="12" x2="8" y2="24" />
      <line x1="20" y1="12" x2="20" y2="24" />
      <line x1="14" y1="5" x2="14" y2="9" />
    </svg>
  )
}

function WineIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M9 3 h10 L17 14 a3 3 0 0 1-6 0 Z" />
      <line x1="14" y1="17" x2="14" y2="25" />
      <line x1="10" y1="25" x2="18" y2="25" />
    </svg>
  )
}

function ChefHatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M8 18 Q6 11 10 8 a4 4 0 0 1 8 0 Q22 11 20 18 Z" />
      <rect x="7" y="18" width="14" height="5" rx="1" />
      <line x1="11" y1="18" x2="11" y2="23" />
      <line x1="17" y1="18" x2="17" y2="23" />
    </svg>
  )
}

function BoatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M4 19 L14 9 L24 19" />
      <path d="M3 23 Q8.5 26.5 14 23 Q19.5 19.5 25 23" />
      <line x1="14" y1="9" x2="14" y2="4" />
      <line x1="14" y1="4" x2="22" y2="9" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M14 3 a7 7 0 0 1 7 7 v6 l2 2 H5 l2-2 v-6 a7 7 0 0 1 7-7 Z" />
      <path d="M11 22 a3 3 0 0 0 6 0" />
    </svg>
  )
}

// ── Content data ───────────────────────────────────────────────────────────────

const experiences = [
  {
    id: 'finest-tables',
    navLabel: 'Finest Tables',
    icon: <TableIcon />,
    title: "Lake Como's Finest Tables",
    description:
      "The best tables on the lake are never listed on any booking platform. We hold relationships with the owners of Como's most sought-after restaurants — intimate lakeside terraces, century-old family trattorias, and Michelin-starred kitchens that seat fewer than twenty guests a night. We call ahead, we know which table catches the last light over the water, and we make sure you arrive expected.",
    placeholder: 'https://placehold.co/900x640/D4C5B2/1C2B35?text=Finest+Tables',
    imageAlt: 'Elegant lakeside dining on Lake Como',
    bg: '#FFFFFF',
  },
  {
    id: 'food-wine',
    navLabel: 'Food & Wine',
    icon: <WineIcon />,
    title: 'Food & Wine Journeys',
    description:
      "The Lombardy lakes produce wines, cheeses, and olive oils that almost never leave the region — and that's exactly the point. We arrange private visits to small-production wineries in the hills above Varenna, cheesemakers in the Val d'Intelvi who still work by hand, and Saturday markets where the vendors know us by name. This is not a tour. It is a day spent eating and drinking with people who have spent their lives making something extraordinary.",
    placeholder: 'https://placehold.co/900x640/C8D4BF/1C2B35?text=Food+%26+Wine',
    imageAlt: 'Artisan winery in the hills above Lake Como',
    bg: '#F5F0E8',
  },
  {
    id: 'cooking-classes',
    navLabel: 'Cooking Classes',
    icon: <ChefHatIcon />,
    title: 'Cooking with the Masters',
    description:
      "You won't find these kitchens on Google. We introduce you to resident chefs who trained in the great houses of Italy and to local nonne whose recipes exist only in their hands. You stand at the counter, not in an audience — working the pasta dough, folding the risotto, learning why the perch from this lake tastes like nothing else on earth. You leave with the recipe, the story, and a meal you cooked yourself.",
    placeholder: 'https://placehold.co/900x640/D4C0B8/1C2B35?text=Cooking+Classes',
    imageAlt: 'Private cooking class in a traditional Como kitchen',
    bg: '#FFFFFF',
  },
  {
    id: 'villa-boat',
    navLabel: 'Villa by Boat',
    icon: <BoatIcon />,
    title: 'Villa Circuit by Taxi Boat',
    description:
      "A private mahogany taxi boat, your own captain, no itinerary imposed by a group. Approach Villa del Balbianello from the water the way its owners always did — gliding in under the cypress trees before the gates open to the public. Drift past the façade of Villa d'Este, anchor off the gardens of Villa Carlotta, and take the long way home along the western shore as the mountains turn violet. The lake from the water is a different lake entirely.",
    placeholder: 'https://placehold.co/900x640/B8CCDA/1C2B35?text=Villa+by+Boat',
    imageAlt: 'Private taxi boat on Lake Como approaching Villa Balbianello',
    bg: '#F5F0E8',
  },
  {
    id: 'concierge',
    navLabel: 'Concierge',
    icon: <BellIcon />,
    title: '24/7 Concierge',
    description:
      "We are available from your first planning call to the moment your car leaves for Malpensa. In between: the cashmere atelier in Como that doesn't advertise, the florist who will fill your villa with gardenias by morning, a driver who knows every road on both shores, last-minute dinner reservations when plans change, and the quiet confidence of knowing that someone who knows this place is always one message away. No request is too specific. That is precisely the point.",
    placeholder: 'https://placehold.co/900x640/D0C8C0/1C2B35?text=Concierge',
    imageAlt: 'Personal concierge service in Como',
    bg: '#FFFFFF',
  },
]

const testimonials = [
  {
    quote:
      "We've traveled everywhere — the Maldives, Kyoto, Patagonia. But Lake Como with Bellagio Italy was something else entirely. Every detail was arranged before we even thought to ask.",
    author: 'Margaret & Charles T.',
    location: 'Nantucket, MA',
  },
  {
    quote:
      "They secured us a table at a restaurant that hasn't accepted tourists in years. The owner came out to cook for us personally. That doesn't happen through a travel agent.",
    author: 'Robert K.',
    location: 'Greenwich, CT',
  },
]

// ── Nav link config ────────────────────────────────────────────────────────────

const mainNavLinks = [
  { label: 'Philosophy', id: 'philosophy' },
  { label: 'Contact', id: 'contact' },
]

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  // shared link class factories
  const navLinkClass = (scrolled: boolean) =>
    `font-body text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 hover:text-[#B8966E] ${
      scrolled ? 'text-[#1C2B35]' : 'text-white/85'
    }`

  const expLinkClass = (scrolled: boolean) =>
    `font-body text-[10px] tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[#B8966E] ${
      scrolled ? 'text-[#1C2B35]/70' : 'text-white/65'
    }`

  return (
    <div className="bg-[#FAF8F4] text-[#1C2B35]">

      {/* ── Navigation ────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF8F4]/96 backdrop-blur-sm shadow-[0_1px_0_0_rgba(28,43,53,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className={`font-display text-base tracking-[0.18em] uppercase shrink-0 transition-colors duration-500 ${
              scrolled ? 'text-[#1C2B35]' : 'text-white'
            }`}
          >
            Bellagio Italy
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">

            {/* Philosophy */}
            <a
              href="#philosophy"
              onClick={(e) => { e.preventDefault(); scrollTo('philosophy') }}
              className={navLinkClass(scrolled)}
            >
              Philosophy
            </a>

            {/* Separator */}
            <span className={`w-px h-3 shrink-0 transition-colors duration-500 ${scrolled ? 'bg-[#B8966E]/35' : 'bg-white/25'}`} />

            {/* 5 experience links */}
            {experiences.map((exp) => (
              <a
                key={exp.id}
                href={`#${exp.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(exp.id) }}
                className={expLinkClass(scrolled)}
              >
                {exp.navLabel}
              </a>
            ))}

            {/* Separator */}
            <span className={`w-px h-3 shrink-0 transition-colors duration-500 ${scrolled ? 'bg-[#B8966E]/35' : 'bg-white/25'}`} />

            {/* Contact */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              className={navLinkClass(scrolled)}
            >
              Contact
            </a>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              className="font-body text-[10px] tracking-[0.18em] uppercase bg-[#B8966E] text-white px-5 py-2.5 hover:bg-[#9A7A58] transition-colors duration-300 shrink-0"
            >
              Talk to Us
            </a>
          </nav>

          {/* Mobile: CTA only */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            className="lg:hidden font-body text-[10px] tracking-[0.15em] uppercase bg-[#B8966E] text-white px-4 py-2 hover:bg-[#9A7A58] transition-colors shrink-0"
          >
            Talk to Us
          </a>
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://placehold.co/1920x1080/1C2B35/3D5A6E?text=Lake+Como"
          alt="Lake Como, Italy at golden hour"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2B35]/60 via-[#1C2B35]/45 to-[#1C2B35]/70" />

        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.38em] uppercase text-[#D4B896] mb-7">
            Lake Como, Italy
          </p>
          <h1 className="font-display text-5xl md:text-[4.5rem] font-light leading-[1.08] mb-8 tracking-tight">
            Your Italy, Curated by
            <br />
            <em>Those Who Know It Best</em>
          </h1>
          <p className="font-body text-base md:text-lg text-white/75 max-w-[480px] mx-auto mb-11 leading-relaxed">
            Private experiences for the discerning traveler. Not an agency —
            a personal guide to what Lake Como truly offers.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            className="inline-block font-body text-xs tracking-[0.2em] uppercase bg-[#B8966E] text-white px-11 py-4 hover:bg-[#9A7A58] transition-colors duration-300"
          >
            Talk to Us
          </a>
        </div>

        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="font-body text-[9px] tracking-[0.3em] uppercase">Scroll</span>
          <svg width="1" height="36" viewBox="0 0 1 36">
            <line x1="0.5" y1="0" x2="0.5" y2="36" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* ── Philosophy ────────────────────────────────────────────────────── */}
      <section id="philosophy" className="py-28 md:py-36 px-6 bg-[#FAF8F4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-center">

          <Fade className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://placehold.co/800x1000/D9D0C4/1C2B35?text=Bellagio+Village"
              alt="Bellagio village on Lake Como"
              fill
              className="object-cover"
              unoptimized
            />
          </Fade>

          <div>
            <Fade delay={100}>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#B8966E] mb-5">
                Our Philosophy
              </p>
            </Fade>
            <Fade delay={180}>
              <h2 className="font-display text-4xl md:text-[2.85rem] font-light leading-[1.12] mb-9">
                Intimacy over itinerary.
              </h2>
            </Fade>
            <Fade delay={260}>
              <div className="font-body text-[#475569] leading-[1.8] space-y-5 text-[0.95rem]">
                <p>
                  We believe the best travel experiences are never found in a brochure. They happen
                  at tables where the chef sits down to share a glass with you. On boats that dock
                  where tourists can&apos;t. In kitchens that have never seen a TripAdvisor review.
                </p>
                <p>
                  Bellagio Italy was built on one conviction: Lake Como deserves better than mass
                  tourism. We curate a small number of guests each season — no overbooking, no
                  compromise — so that every experience carries the weight of something genuinely
                  personal.
                </p>
                <p>
                  You&apos;ve seen the world. Let us show you this corner of it the way it was always
                  meant to be seen: slowly, with the right people, at the right table.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex items-center max-w-5xl mx-auto px-6">
        <div className="h-px flex-1 bg-[#B8966E]/18" />
        <div className="mx-5 w-1.5 h-1.5 rounded-full bg-[#B8966E]/60" />
        <div className="h-px flex-1 bg-[#B8966E]/18" />
      </div>

      {/* ── Experience sections ────────────────────────────────────────────── */}
      {experiences.map((exp, i) => {
        // Even index (0,2,4): image right — odd index (1,3): image left
        const imageRight = i % 2 === 0

        return (
          <section
            key={exp.id}
            id={exp.id}
            className="py-24 md:py-32 px-6"
            style={{ backgroundColor: exp.bg }}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">

              {/* Image */}
              <Fade className={`relative aspect-[3/2] overflow-hidden${imageRight ? ' md:order-last' : ''}`}>
                <Image
                  src={exp.placeholder}
                  alt={exp.imageAlt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </Fade>

              {/* Text */}
              <div className={imageRight ? 'md:order-first' : ''}>
                <Fade delay={120}>
                  <div className="text-[#B8966E] mb-5">{exp.icon}</div>
                  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#B8966E] mb-4">
                    {exp.navLabel}
                  </p>
                  <h2 className="font-display text-3xl md:text-[2.4rem] font-light leading-[1.12] mb-7">
                    {exp.title}
                  </h2>
                  <p className="font-body text-[#475569] leading-[1.85] text-[0.95rem]">
                    {exp.description}
                  </p>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
                      className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.2em] uppercase text-[#B8966E] hover:text-[#9A7A58] transition-colors duration-300 group"
                    >
                      Enquire about this experience
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                        <line x1="2" y1="7" x2="12" y2="7" />
                        <polyline points="8,3 12,7 8,11" />
                      </svg>
                    </a>
                  </div>
                </Fade>
              </div>

            </div>
          </section>
        )
      })}

      {/* Gold divider */}
      <div className="flex items-center max-w-5xl mx-auto px-6">
        <div className="h-px flex-1 bg-[#B8966E]/18" />
        <div className="mx-5 w-1.5 h-1.5 rounded-full bg-[#B8966E]/60" />
        <div className="h-px flex-1 bg-[#B8966E]/18" />
      </div>

      {/* ── Mid-page CTA ──────────────────────────────────────────────────── */}
      <section className="bg-[#1C2B35] py-28 md:py-36 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #B8966E 0, #B8966E 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <Fade>
            <p className="font-body text-[10px] tracking-[0.38em] uppercase text-[#D4B896] mb-6">
              Begin Here
            </p>
            <h2 className="font-display text-4xl md:text-[3rem] text-white font-light leading-[1.12] mb-7">
              Every experience begins
              <br />
              with a conversation
            </h2>
            <p className="font-body text-white/60 text-[0.95rem] leading-[1.8] mb-11 max-w-lg mx-auto">
              There is no booking form here. No calendar widget. Only a conversation between
              you and someone who knows this place deeply — and wants to share it properly.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
              className="inline-block font-body text-xs tracking-[0.2em] uppercase border border-[#B8966E] text-[#D4B896] px-11 py-4 hover:bg-[#B8966E] hover:text-white transition-colors duration-300"
            >
              Talk to Us
            </a>
          </Fade>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 px-6 bg-[#FAF8F4]">
        <div className="max-w-6xl mx-auto">

          <Fade className="text-center mb-14">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#B8966E]">
              What Guests Say
            </p>
          </Fade>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {testimonials.map((t, i) => (
              <Fade key={i} delay={i * 160}>
                <div className="font-display text-[5rem] text-[#B8966E]/18 leading-none mb-3 select-none">
                  &ldquo;
                </div>
                <blockquote className="font-display text-xl md:text-[1.35rem] font-light text-[#1C2B35] leading-[1.55] italic mb-7">
                  {t.quote}
                </blockquote>
                <div className="h-px w-10 bg-[#B8966E] mb-5" />
                <cite className="not-italic font-body text-[0.82rem] text-[#475569]">
                  <span className="font-medium text-[#1C2B35]">{t.author}</span>
                  <span className="mx-2 text-[#B8966E]">&middot;</span>
                  {t.location}
                </cite>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <section id="contact" className="bg-[#F5F0E8] py-28 md:py-36 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Fade>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#B8966E] mb-5">
              Get in Touch
            </p>
            <h2 className="font-display text-4xl md:text-[2.85rem] font-light leading-[1.12] mb-6">
              Your Lake Como experience
              <br />
              begins with a conversation
            </h2>
            <p className="font-body text-[#475569] text-[0.93rem] leading-[1.8] mb-14 max-w-md mx-auto">
              Reach out at your convenience. We respond personally — no automated replies,
              no call centers, no hand-offs. Just us, ready to listen.
            </p>
          </Fade>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Fade delay={100}>
              <a
                href="mailto:hello@bellagioitaly.com"
                className="flex items-center gap-3 font-body text-xs tracking-[0.15em] uppercase bg-[#1C2B35] text-white px-8 py-4 hover:bg-[#2D4155] transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" />
                  <path d="M1.5 4.5 L8 9 L14.5 4.5" />
                </svg>
                hello@bellagioitaly.com
              </a>
            </Fade>

            <Fade delay={200}>
              <a
                href="https://wa.me/39XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-xs tracking-[0.15em] uppercase border border-[#1C2B35] text-[#1C2B35] px-8 py-4 hover:bg-[#1C2B35] hover:text-white transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 1.25A8.75 8.75 0 0 1 17.6 13.88L18.75 18.75l-4.96-1.3A8.75 8.75 0 1 1 10 1.25Zm0 1.5a7.25 7.25 0 1 0 3.8 13.47l.3-.18 3.02.79-.79-2.98.22-.35A7.25 7.25 0 0 0 10 2.75Zm-2.5 3.87h.55c.3 0 .54.22.6.51l.77 2.1a.6.6 0 0 1-.12.6l-.71.72a6.9 6.9 0 0 0 2.86 2.86l.72-.71a.6.6 0 0 1 .6-.12l2.1.77c.29.06.51.3.51.6v.55A1.65 1.65 0 0 1 13.73 15 8.23 8.23 0 0 1 5 6.27a1.65 1.65 0 0 1 1.65-1.65h.85Z" />
                </svg>
                Chat with us on WhatsApp
              </a>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="bg-[#1C2B35] py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-white text-base tracking-[0.22em] uppercase">
            Bellagio Italy
          </span>
          <p className="font-body text-xs text-white/45 text-center">
            Via Borgo Vico 42, 22100 Como (CO), Italy
          </p>
          <div className="flex items-center gap-5 font-body text-xs text-white/45">
            <span>© 2025 Bellagio Italy</span>
            <span className="text-[#B8966E]/50">·</span>
            <a href="#" className="hover:text-[#B8966E] transition-colors duration-200">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>

    </div>
  )
}
