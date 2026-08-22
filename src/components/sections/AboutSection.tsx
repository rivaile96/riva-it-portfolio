'use client'
import { MapPin, EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import SectionLabel from '@/components/ui/SectionLabel'
import { profile } from '@/lib/data'

const infoCards = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: EnvelopeSimple, label: 'Email', value: profile.email },
  { icon: GithubLogo, label: 'GitHub', value: profile.github },
  { icon: LinkedinLogo, label: 'LinkedIn', value: profile.linkedin },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        background: 'var(--bg-surface)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel text="About Me" />
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginTop: 16,
            marginBottom: 48,
          }}
        >
          Who I Am
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left — bio */}
          <div>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              I&apos;m an IT Field Engineer based in South Jakarta with 7+ years of hands-on experience across hardware
              diagnostics, network troubleshooting, and enterprise system integration. My focus area is Auto-ID and RFID
              technology — from low-level commissioning of readers and antennas to middleware integration and L2/L3
              technical support.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              I&apos;ve deployed RFID solutions for clients including Nike, Bali United, and Sociolla, bridging the gap
              between hardware field work and software integration. When I&apos;m not on-site, I build internal tooling
              — like G-Service, which replaced an entire Excel-based workflow with a Laravel system now in daily use.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
              }}
            >
              I hold Fortinet NSE and Honeywell technical accreditations, and I actively expand my security knowledge
              through Hack The Box Academy. I care about clean documentation and making complex technology
              approachable for end-users.
            </p>
          </div>

          {/* Right — info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '16px 20px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 8,
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,211,105,0.3)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--bg-border)')}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: 'var(--accent-glow)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: 'var(--accent)' }} weight="fill" />
                </div>
                <div>
                  <div
                    style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
