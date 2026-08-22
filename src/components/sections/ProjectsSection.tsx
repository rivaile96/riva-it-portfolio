'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { projects } from '@/lib/data'

const glass: React.CSSProperties = {
  background: 'rgba(34,40,49,0.45)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255,107,0,0.15)',
  borderRadius: 12,
  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: '100px 0',
        background: 'transparent',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel text="Selected Work" />
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
          Projects
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="projects-grid"
        >
          {projects.map((project, idx) => (
            <div
              key={project.name}
              style={{
                ...glass,
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.4)'
                e.currentTarget.style.boxShadow = '0 0 32px rgba(255,107,0,0.1), 0 8px 32px rgba(0,0,0,0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.15)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Index + name */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#FF6B00',
                    opacity: 0.6,
                    marginBottom: 8,
                    letterSpacing: '0.1em',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')} / project
                </div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {project.name}
                </h3>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  flexGrow: 1,
                }}
              >
                {project.desc}
              </p>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '3px 10px',
                      background: 'rgba(255,107,0,0.06)',
                      border: '1px solid rgba(255,107,0,0.18)',
                      borderRadius: 20,
                      fontSize: '0.7rem',
                      color: 'rgba(255,107,0,0.85)',
                      fontFamily: 'var(--font-mono)',
                      transition: 'border-color 0.15s, color 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,107,0,0.5)'
                      e.currentTarget.style.color = '#FF6B00'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,107,0,0.18)'
                      e.currentTarget.style.color = 'rgba(255,107,0,0.85)'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 640px) and (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
