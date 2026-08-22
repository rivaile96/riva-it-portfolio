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

const glass: React.CSSProperties = {
  background: 'rgba(34,40,49,0.45)',
  backdropFilter: 'blur(20px) saturate(160%)',
  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
  border: '1px solid rgba(255,107,0,0.15)',
  borderRadius: 12,
  boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)',
}

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
        background: 'transparent',
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
            color: 'var(--text-primary)',
          }}
        >
          Contact
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 40,
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left — contact info */}
          <div style={{ ...glass, padding: '32px 28px' }}>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: 28,
              }}
            >
              I&apos;m open to IT Field Engineer roles, RFID/Auto-ID system integration projects, and consulting
              engagements. Reach out through any channel below.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
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
                    padding: '12px 16px',
                    background: 'rgba(255,107,0,0.04)',
                    border: '1px solid rgba(255,107,0,0.12)',
                    borderRadius: 8,
                    transition: 'border-color 0.15s, background 0.15s',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,107,0,0.35)'
                    e.currentTarget.style.background = 'rgba(255,107,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,107,0,0.12)'
                    e.currentTarget.style.background = 'rgba(255,107,0,0.04)'
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      background: 'rgba(255,107,0,0.1)',
                      border: '1px solid rgba(255,107,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={17} style={{ color: '#FF6B00' }} weight="fill" />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: 1,
                      }}
                    >
                      {label}
                    </div>
                    <div style={{ fontSize: '0.83rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            style={{
              ...glass,
              padding: '32px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Name */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label
                htmlFor="name"
                style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}
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
                  padding: '10px 14px',
                  background: 'rgba(34,40,49,0.6)',
                  border: '1px solid rgba(255,107,0,0.2)',
                  borderRadius: 8,
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                  width: '100%',
                }}
                onFocus={e => (e.target.style.borderColor = '#FF6B00')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,107,0,0.2)')}
              />
            </div>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label
                htmlFor="email"
                style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}
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
                  padding: '10px 14px',
                  background: 'rgba(34,40,49,0.6)',
                  border: '1px solid rgba(255,107,0,0.2)',
                  borderRadius: 8,
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.15s',
                  width: '100%',
                }}
                onFocus={e => (e.target.style.borderColor = '#FF6B00')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,107,0,0.2)')}
              />
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label
                htmlFor="message"
                style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}
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
                placeholder="What are you working on?"
                style={{
                  padding: '10px 14px',
                  background: 'rgba(34,40,49,0.6)',
                  border: '1px solid rgba(255,107,0,0.2)',
                  borderRadius: 8,
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.15s',
                  width: '100%',
                  fontFamily: 'inherit',
                }}
                onFocus={e => (e.target.style.borderColor = '#FF6B00')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,107,0,0.2)')}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={sent}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '12px 24px',
                background: sent ? 'rgba(255,107,0,0.4)' : '#FF6B00',
                color: '#222831',
                borderRadius: 8,
                border: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: sent ? 'default' : 'pointer',
                transition: 'background 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => {
                if (!sent) {
                  e.currentTarget.style.background = '#ff8533'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(255,107,0,0.4)'
                }
              }}
              onMouseLeave={e => {
                if (!sent) {
                  e.currentTarget.style.background = '#FF6B00'
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
            gap: 24px !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
        }
      `}</style>
    </section>
  )
}
