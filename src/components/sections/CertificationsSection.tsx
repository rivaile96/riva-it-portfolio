'use client'
import { ShieldCheck, Certificate, Star } from '@phosphor-icons/react/dist/ssr'
import SectionLabel from '@/components/ui/SectionLabel'
import { certifications, achievements } from '@/lib/data'

const certIcons = [ShieldCheck, Certificate, Star]

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      style={{
        padding: '100px 0',
        background: 'var(--bg-void)',
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
          }}
        >
          Certifications & Clients
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
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 8,
                  padding: '28px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,211,105,0.35)'
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(255,211,105,0.08)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--bg-border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(255,211,105,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={24} style={{ color: 'var(--accent)' }} weight="duotone" />
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: 6,
                      lineHeight: 1.3,
                    }}
                  >
                    {cert.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                    }}
                  >
                    {cert.detail}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Achievements / Clients */}
        <div>
          <p
            style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            Notable Clients
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 12,
            }}
            className="clients-grid"
          >
            {achievements.map(a => (
              <div
                key={a.client}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 8,
                  padding: '16px 18px',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,211,105,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--bg-border)')}
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
        </div>
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
