'use client'
import { ShieldCheck, Certificate, Star } from '@phosphor-icons/react/dist/ssr'
import SectionLabel from '@/components/ui/SectionLabel'
import { certifications, achievements } from '@/lib/data'

const certIcons = [ShieldCheck, Certificate, Star]

const glass: React.CSSProperties = {
  background: 'rgba(34,40,49,0.45)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(0,173,181,0.15)',
  borderRadius: 12,
  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
}

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      style={{
        padding: '100px 0',
        background: 'transparent',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel text="Credentials" />
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
          Certifications &amp; Clients
        </h2>

        {/* Cert cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            marginBottom: 56,
          }}
          className="certs-grid"
        >
          {certifications.map((cert, idx) => {
            const Icon = certIcons[idx % certIcons.length]
            return (
              <div
                key={cert.name}
                style={{
                  ...glass,
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,173,181,0.4)'
                  e.currentTarget.style.boxShadow = '0 0 28px rgba(0,173,181,0.1), 0 8px 32px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,173,181,0.15)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)'
                }}
              >
                {/* Icon badge */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: 'rgba(0,173,181,0.12)',
                    border: '1px solid rgba(0,173,181,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={24} style={{ color: '#00ADB5' }} weight="duotone" />
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: 6,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.name}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      marginTop: 4,
                    }}
                  >
                    {cert.detail}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Clients / Achievements */}
        {achievements && achievements.length > 0 && (
          <>
            <h3
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: 20,
                letterSpacing: '-0.02em',
              }}
            >
              Notable Clients
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 12,
              }}
              className="clients-grid"
            >
              {achievements.map((a, idx) => (
                <div
                  key={idx}
                  style={{
                    ...glass,
                    padding: '16px 18px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,173,181,0.35)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,173,181,0.15)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {a.client}
                  </div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {a.detail}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .certs-grid {
            grid-template-columns: 1fr !important;
          }
          .clients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 640px) and (max-width: 768px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
