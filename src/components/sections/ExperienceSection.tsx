'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { experiences } from '@/lib/data'

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: '100px 0',
        background: 'var(--bg-surface)',
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
              background: 'linear-gradient(to bottom, var(--accent) 0%, rgba(255,211,105,0.1) 100%)',
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
                  background: idx === 0 ? 'var(--accent)' : 'var(--bg-elevated)',
                  border: `2px solid ${idx === 0 ? 'var(--accent)' : 'var(--bg-border)'}`,
                  boxShadow: idx === 0 ? '0 0 10px rgba(255,211,105,0.4)' : 'none',
                }}
              />

              {/* Card */}
              <div
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 8,
                  padding: '24px 28px',
                  transition: 'border-color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,211,105,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--bg-border)')}
              >
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: 4,
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: 'var(--accent)',
                        fontWeight: 500,
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <span
                    style={{
                      padding: '4px 12px',
                      background: 'rgba(255,211,105,0.08)',
                      border: '1px solid rgba(255,211,105,0.15)',
                      borderRadius: 6,
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Bullet points */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
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
                          background: 'var(--accent)',
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
    </section>
  )
}
