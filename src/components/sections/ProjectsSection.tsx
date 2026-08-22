'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { projects } from '@/lib/data'

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: '100px 0',
        background: 'var(--bg-void)',
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
                background: 'var(--bg-surface)',
                border: '1px solid var(--bg-border)',
                borderRadius: 8,
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,107,0,0.4)'
                e.currentTarget.style.boxShadow = '0 0 32px rgba(255,107,0,0.1)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--bg-border)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Index + name */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--accent)',
                    opacity: 0.6,
                    marginBottom: 8,
                    letterSpacing: '0.1em',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')} / project
                </div>
                <h3
                  style={{
                    fontSize: '1.15rem',
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
                  fontSize: '0.84rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {project.desc}
              </p>

              {/* Highlight */}
              <div
                style={{
                  padding: '12px 14px',
                  background: 'rgba(255,107,0,0.06)',
                  borderLeft: '2px solid var(--accent)',
                  borderRadius: '0 6px 6px 0',
                }}
              >
                <p
                  style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {project.highlight}
                </p>
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {project.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      padding: '3px 10px',
                      background: 'var(--bg-elevated)',
                      border: '1px solid var(--bg-border)',
                      borderRadius: 20,
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
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
        @media (max-width: 900px) {
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
