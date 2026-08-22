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
  background: 'rgba(255,255,255,0.04)',
  backdropFilter: 'blur(24px) saturate(160%)',
  WebkitBackdropFilter: 'blur(24px) saturate(160%)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 16,
  boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
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
                width: 72,
                height: 72,
                borderRadius: '50%',
                border: '2px solid var(--accent)',
                overflow: 'hidden',
                flexShrink: 0,
                background: 'rgba(255,211,105,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--accent)',
                boxShadow: '0 0 20px rgba(255,211,105,0.2)',
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
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: 'var(--signal-green)',
                  display: 'inline-block',
                  boxShadow: '0 0 6px #22c55e',
                }}
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
                fontSize: '0.82rem',
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
              lineHeight: 1.75,
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
                color: '#222831',
                borderRadius: 8,
                fontWeight: 700,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                boxShadow: '0 0 20px rgba(255,211,105,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-hover)'
                e.currentTarget.style.boxShadow = '0 0 32px rgba(255,211,105,0.5)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255,211,105,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
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
                background: 'rgba(255,255,255,0.05)',
                color: 'var(--text-primary)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.9rem',
                transition: 'all 0.2s',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)'
                e.currentTarget.style.background = 'rgba(255,211,105,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}
            >
              View Projects <DownloadSimple size={16} />
            </a>
          </div>
        </div>

        {/* Right — glass stats card */}
        <div
          style={{
            ...glassCard,
            padding: 32,
          }}
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
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: i === 0 ? '10px 0 0 0' : i === 1 ? '0 10px 0 0' : i === 2 ? '0 0 0 10px' : '0 0 10px 0',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,211,105,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
              >
                <div
                  style={{
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    color: 'var(--accent)',
                    lineHeight: 1,
                    marginBottom: 6,
                    fontFamily: 'var(--font-mono)',
                    textShadow: '0 0 20px rgba(255,211,105,0.4)',
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.08em',
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
                  padding: '4px 12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 20,
                  fontSize: '0.72rem',
                  color: 'rgba(238,238,238,0.7)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 500,
                  backdropFilter: 'blur(4px)',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,211,105,0.4)'
                  e.currentTarget.style.color = 'var(--accent)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.color = 'rgba(238,238,238,0.7)'
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
            gap: 24px !important;
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
