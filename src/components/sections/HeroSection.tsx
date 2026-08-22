'use client'
import Image from 'next/image'
import { MapPin, EnvelopeSimple, ArrowRight, DownloadSimple } from '@phosphor-icons/react/dist/ssr'
import { profile } from '@/lib/data'

const stats = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Projects', value: '10+' },
  { label: 'Clients', value: '4+' },
  { label: 'Certifications', value: '3' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(255,211,105,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

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
          gap: 64,
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left — content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Profile row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                border: '2px solid var(--accent)',
                overflow: 'hidden',
                flexShrink: 0,
                background: 'var(--bg-elevated)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--accent)',
              }}
            >
              RI
            </div>
            {/* Status badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: 20,
                fontSize: '0.75rem',
                color: 'var(--signal-green)',
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--signal-green)',
                  display: 'inline-block',
                }}
                className="animate-pulse-dot"
              />
              Available for opportunities
            </div>
          </div>

          {/* Name + title */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.2rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: 8,
              }}
            >
              {profile.name}
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: 'var(--accent)',
                fontWeight: 600,
                marginBottom: 4,
              }}
            >
              {profile.title}
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.05em',
              }}
            >
              {profile.subtitle}
            </p>
          </div>

          {/* Location + email */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
              }}
            >
              <MapPin size={14} weight="fill" style={{ color: 'var(--accent)' }} />
              {profile.location}
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
              }}
            >
              <EnvelopeSimple size={14} weight="fill" style={{ color: 'var(--accent)' }} />
              {profile.email}
            </span>
          </div>

          {/* Summary */}
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: 480,
            }}
          >
            {profile.summary}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'background 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-hover)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,211,105,0.35)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Get in Touch <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '1px solid var(--bg-border)',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--bg-border)')}
            >
              View Projects <DownloadSimple size={16} />
            </a>
          </div>
        </div>

        {/* Right — stats card */}
        <div
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--bg-border)',
            borderRadius: 12,
            padding: 32,
          }}
          className="animate-float"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 2,
              marginBottom: 24,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: 24,
                  background: 'var(--bg-elevated)',
                  borderRadius: i === 0 ? '8px 0 0 0' : i === 1 ? '0 8px 0 0' : i === 2 ? '0 0 0 8px' : '0 0 8px 0',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: 6,
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['RFID', 'Linux', 'Laravel', 'TCP/IP', 'IoT', 'Fortinet', 'Python', 'REST API'].map(t => (
              <span
                key={t}
                style={{
                  padding: '4px 10px',
                  background: 'rgba(255,211,105,0.08)',
                  border: '1px solid rgba(255,211,105,0.15)',
                  borderRadius: 20,
                  fontSize: '0.72rem',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
