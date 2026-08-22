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

const glass: React.CSSProperties = {
  background: 'rgba(34,40,49,0.45)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(0,173,181,0.15)',
  borderRadius: 12,
  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
}

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '100px 0',
        background: 'transparent',
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
            color: 'var(--text-primary)',
          }}
        >
          Who I Am
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 40,
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left — bio */}
          <div style={{ ...glass, padding: '36px 32px' }}>
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
              I hold Fortinet NSE 1 &amp; 2 certifications and a Zebra Technologies Field Engineer certification. I work
              across Cisco, Fortinet, and Zebra ecosystems and am comfortable at both the hardware layer and the
              application integration layer.
            </p>
          </div>

          {/* Right — info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {infoCards.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                style={{
                  ...glass,
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,173,181,0.35)'
                  e.currentTarget.style.background = 'rgba(34,40,49,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,173,181,0.15)'
                  e.currentTarget.style.background = 'rgba(34,40,49,0.45)'
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: 'rgba(0,173,181,0.12)',
                    border: '1px solid rgba(0,173,181,0.2)',
                    borderRadius: 8,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: '#00ADB5' }} weight="fill" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: 2,
                    }}
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
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
