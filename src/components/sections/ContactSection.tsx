'use client'
import { useState } from 'react'
import { EnvelopeSimple, Phone, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react'
import SectionLabel from '@/components/ui/SectionLabel'
import { profile } from '@/lib/data'

const contactItems = [
  { icon: EnvelopeSimple, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: LinkedinLogo, label: 'LinkedIn', value: profile.linkedin, href: `https://${profile.linkedin}` },
  { icon: GithubLogo, label: 'GitHub', value: profile.github, href: `https://${profile.github}` },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:${profile.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`
    window.open(mailto, '_blank')
    setSent(true)
  }

  return (
    <section
      id="contact"
      style={{
        padding: '100px 0',
        background: 'var(--bg-surface)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <SectionLabel text="Get In Touch" />
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            marginTop: 16,
            marginBottom: 48,
          }}
        >
          Contact
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 64,
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left — contact info */}
          <div>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              I&apos;m open to IT Field Engineer roles, RFID/Auto-ID system integration projects, and consulting
              engagements. Reach out through any channel below.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '14px 18px',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--bg-border)',
                    borderRadius: 8,
                    transition: 'border-color 0.15s, background 0.15s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,211,105,0.35)'
                    e.currentTarget.style.background = 'rgba(255,211,105,0.04)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--bg-border)'
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 8,
                      background: 'var(--accent-glow)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} style={{ color: 'var(--accent)' }} weight="fill" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 2 }}>
                      {label}
                    </div>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-primary)', fontWeight: 500 }}>{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label
                htmlFor="name"
                style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 8,
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--bg-border)')}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 8,
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--bg-border)')}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--bg-border)',
                  borderRadius: 8,
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.15s',
                  fontFamily: 'var(--font-display)',
                }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--bg-border)')}
              />
            </div>
            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '13px 24px',
                background: sent ? 'rgba(34,197,94,0.2)' : 'var(--accent)',
                color: sent ? 'var(--signal-green)' : '#fff',
                border: sent ? '1px solid rgba(34,197,94,0.3)' : 'none',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'background 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => {
                if (!sent) {
                  e.currentTarget.style.background = 'var(--accent-hover)'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255,211,105,0.3)'
                }
              }}
              onMouseLeave={e => {
                if (!sent) {
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.boxShadow = 'none'
                }
              }}
            >
              {sent ? 'Message Sent ✓' : <><PaperPlaneTilt size={16} weight="fill" /> Send Message</>}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}
