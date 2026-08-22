'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { experiences } from '@/lib/data'

const glass: React.CSSProperties = {
  background: 'rgba(34,40,49,0.45)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255,107,0,0.15)',
  borderRadius: 12,
  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: '100px 0',
        background: 'transparent',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel text="Work History" />
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginTop: 16,
            marginBottom: 56,
            color: 'var(--text-primary)',
          }}
        >
          Experience
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 32 }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 7,
              top: 8,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, #FF6B00 0%, rgba(255,107,0,0.05) 100%)',
            }}
          />

          {experiences.map((exp, idx) => (
            <div
              key={`${exp.company}-${idx}`}
              style={{
                position: 'relative',
                marginBottom: idx < experiences.length - 1 ? 48 : 0,
              }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: -32,
                  top: 6,
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  background: idx === 0 ? '#FF6B00' : 'var(--bg-elevated)',
                  border: `2px solid ${idx === 0 ? '#FF6B00' : 'rgba(255,107,0,0.2)'}`,
                  boxShadow: idx === 0 ? '0 0 10px rgba(255,107,0,0.5)' : 'none',
                  zIndex: 1,
                }}
              />

              {/* Card */}
              <div
                style={{
                  ...glass,
                  padding: '24px 28px',
                  transition: 'border-color 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.35)'
                  e.currentTarget.style.boxShadow = '0 0 24px rgba(255,107,0,0.08), 0 8px 32px rgba(0,0,0,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,107,0,0.15)'
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)'
                }}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        marginBottom: 4,
                      }}
                    >
                      {exp.title}
                    </h3>
                    <div
                      style={{
                        fontSize: '0.85rem',
                        color: '#FF6B00',
                        fontWeight: 600,
                      }}
                    >
                      {exp.company}
                    </div>
                  </div>
                  {/* Date badge */}
                  <span
                    style={{
                      padding: '4px 12px',
                      background: 'rgba(255,107,0,0.1)',
                      border: '1px solid rgba(255,107,0,0.2)',
                      borderRadius: 20,
                      fontSize: '0.75rem',
                      color: '#FF6B00',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
                  {exp.points.map((pt, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 12,
                        fontSize: '0.85rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          marginTop: 8,
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          background: '#FF6B00',
                          flexShrink: 0,
                          opacity: 0.6,
                        }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .timeline-card {
            padding: 20px 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
