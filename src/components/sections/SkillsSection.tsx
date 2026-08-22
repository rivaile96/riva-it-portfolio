'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { skills } from '@/lib/data'

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: '100px 0',
        background: 'var(--bg-void)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel text="Technical Skills" />
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginTop: 16,
            marginBottom: 48,
          }}
        >
          What I Work With
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
          }}
          className="skills-grid"
        >
          {skills.map((group, idx) => (
            <div
              key={group.category}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: 8,
                padding: '28px 28px 24px',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.3)'
                e.currentTarget.style.boxShadow = '0 0 24px rgba(255,107,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--bg-border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Category header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 6,
                    background: 'var(--accent-glow)',
                    border: '1px solid rgba(255,107,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Items list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {group.items.map(item => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                        opacity: 0.8,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
