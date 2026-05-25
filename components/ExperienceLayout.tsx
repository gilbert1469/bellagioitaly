'use client'

import Image from 'next/image'
import Fade from './Fade'

export interface IncludedItem {
  title: string
  body: string
}

export interface ExperienceLayoutProps {
  title: string
  tagline: string
  heroPlaceholder: string
  heroAlt: string
  intro: string[]
  included: IncludedItem[]
  customization: string
}

export default function ExperienceLayout({
  title,
  tagline,
  heroPlaceholder,
  heroAlt,
  intro,
  included,
  customization,
}: ExperienceLayoutProps) {
  return (
    <div className="bg-[#FAF8F4] text-[#1C2B35]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[580px] flex items-center justify-center overflow-hidden">
        <Image
          src={heroPlaceholder}
          alt={heroAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2B35]/65 via-[#1C2B35]/50 to-[#1C2B35]/78" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <p className="font-body text-[10px] tracking-[0.38em] uppercase text-[#D4B896] mb-7">
            Bellagio Italy
          </p>
          <h1 className="font-display text-4xl md:text-[3.5rem] font-light leading-[1.08] mb-6 tracking-tight">
            {title}
          </h1>
          <p className="font-display text-xl md:text-[1.5rem] italic text-white/75 font-light">
            &ldquo;{tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <Fade>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#B8966E] mb-9">
              The Experience
            </p>
          </Fade>
          {intro.map((paragraph, i) => (
            <Fade key={i} delay={i * 90}>
              <p
                className={`font-body text-[#475569] leading-[1.9] text-[0.97rem] ${
                  i < intro.length - 1 ? 'mb-7' : ''
                }`}
              >
                {paragraph}
              </p>
            </Fade>
          ))}
        </div>
      </section>

      {/* Gold divider */}
      <div className="flex items-center max-w-5xl mx-auto px-6">
        <div className="h-px flex-1 bg-[#B8966E]/18" />
        <div className="mx-5 w-1.5 h-1.5 rounded-full bg-[#B8966E]/60" />
        <div className="h-px flex-1 bg-[#B8966E]/18" />
      </div>

      {/* ── What's Included ──────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto">
          <Fade>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#B8966E] mb-3">
              What&apos;s Included
            </p>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-light leading-[1.15] mb-11">
              What to expect
            </h2>
          </Fade>
          <ul className="space-y-7">
            {included.map((item, i) => (
              <Fade key={i} delay={i * 80}>
                <li className="flex gap-5">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B8966E] shrink-0" />
                  <div className="font-body text-[0.94rem] leading-[1.8]">
                    <span className="font-semibold text-[#1C2B35]">{item.title}. </span>
                    <span className="text-[#475569]">{item.body}</span>
                  </div>
                </li>
              </Fade>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How We Customize ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#1C2B35]">
        <div className="max-w-3xl mx-auto">
          <Fade>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#D4B896] mb-4">
              Made for You
            </p>
            <h2 className="font-display text-3xl md:text-[2.2rem] font-light leading-[1.15] text-white mb-8">
              How we tailor it for you
            </h2>
            <p className="font-body text-white/65 leading-[1.9] text-[0.97rem]">
              {customization}
            </p>
          </Fade>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section id="contact-cta" className="py-24 md:py-32 px-6 bg-[#FAF8F4] scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <Fade>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-[#B8966E] mb-5">
              Begin Here
            </p>
            <h2 className="font-display text-3xl md:text-[2.5rem] font-light leading-[1.15] mb-6">
              Begin this experience
              <br />
              with a conversation
            </h2>
            <p className="font-body text-[#475569] text-[0.93rem] leading-[1.8] mb-14 max-w-md mx-auto">
              There is no booking form. Write to us or send a message on WhatsApp and we
              will respond personally — typically within a few hours.
            </p>
          </Fade>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Fade delay={100}>
              <a
                href="mailto:hello@bellagioitaly.com"
                className="flex items-center gap-3 font-body text-xs tracking-[0.15em] uppercase bg-[#1C2B35] text-white px-8 py-4 hover:bg-[#2D4155] transition-colors duration-300 w-full sm:w-auto justify-center"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                >
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

    </div>
  )
}
