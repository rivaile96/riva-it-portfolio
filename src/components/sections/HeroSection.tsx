'use client'
import { MapPin, EnvelopeSimple, ArrowRight, DownloadSimple } from '@phosphor-icons/react/dist/ssr'
import { profile } from '@/lib/data'

const stats = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Projects', value: '10+' },
  { label: 'Clients', value: '4+' },
  { label: 'Certifications', value: '3' },
]

const glassCard: React.CSSProperties = {
  background: 'rgba(34,40,49,0.45)',
  backdropFilter: 'blur(24px) saturate(160%)',
  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
  border: '1px solid rgba(0,173,181,0.15)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 24px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left — glass content card */}
        <div
          style={{
            ...glassCard,
            padding: '40px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          {/* Profile row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: '2px solid #00ADB5',
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 0 24px rgba(0,173,181,0.35)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Riva Imanudin"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Status badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.25)',
                borderRadius: 20,
                fontSize: '0.75rem',
                color: 'var(--signal-green)',
                fontWeight: 500,
                backdropFilter: 'blur(8px)',
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--signal-green)',
                }}
                className="animate-pulse-dot"
              />
              Available for work
            </div>
          </div>

          {/* Name + title */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.1,
                marginBottom: 8,
                color: 'var(--text-primary)',
              }}
            >
              {profile.name}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: '#00ADB5',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              {profile.title}
            </p>
          </div>

          {/* Bio */}
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            {profile.summary}
          </p>

          {/* Location + email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <MapPin size={14} weight="fill" style={{ color: '#00ADB5', flexShrink: 0 }} />
              {profile.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <EnvelopeSimple size={14} weight="fill" style={{ color: '#00ADB5', flexShrink: 0 }} />
              {profile.email}
            </div>
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 22px',
                background: '#00ADB5',
                color: '#222831',
                borderRadius: 8,
                fontSize: '0.875rem',
                fontWeight: 700,
                transition: 'background 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#00c5ce'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,173,181,0.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#00ADB5'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Get In Touch <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="/resume.pdf"
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 22px',
                background: 'rgba(34,40,49,0.45)',
                border: '1px solid rgba(0,173,181,0.2)',
                color: 'var(--text-primary)',
                borderRadius: 8,
                fontSize: '0.875rem',
                fontWeight: 600,
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#00ADB5'
                e.currentTarget.style.background = 'rgba(0,173,181,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,173,181,0.2)'
                e.currentTarget.style.background = 'rgba(34,40,49,0.45)'
              }}
            >
              <DownloadSimple size={16} weight="bold" /> Resume
            </a>
          </div>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {profile.subtitle.split(' · ').map((t: string) => (
              <span
                key={t}
                style={{
                  padding: '4px 12px',
                  background: 'rgba(34,40,49,0.6)',
                  border: '1px solid rgba(0,173,181,0.15)',
                  borderRadius: 20,
                  fontSize: '0.72rem',
                  color: 'rgba(238,238,238,0.7)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.15s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,173,181,0.4)'
                  e.currentTarget.style.color = '#00ADB5'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,173,181,0.15)'
                  e.currentTarget.style.color = 'rgba(238,238,238,0.7)'
                }}
              >
                {t.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Right — stats glass card */}
        <div
          style={{
            ...glassCard,
            padding: '40px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
          }}
        >
          {stats.map(s => (
            <div
              key={s.label}
              style={{
                padding: '24px 20px',
                background: 'rgba(0,173,181,0.04)',
                border: '1px solid rgba(0,173,181,0.1)',
                borderRadius: 12,
                textAlign: 'center',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,173,181,0.3)'
                e.currentTarget.style.background = 'rgba(0,173,181,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,173,181,0.1)'
                e.currentTarget.style.background = 'rgba(0,173,181,0.04)'
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                  fontWeight: 800,
                  color: '#00ADB5',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 8,
                  textShadow: '0 0 20px rgba(0,173,181,0.4)',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                  lineHeight: 1.3,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
