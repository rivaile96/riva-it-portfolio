'use client'
import { House, User, Briefcase, Code, Certificate, Envelope } from '@phosphor-icons/react'
import { profile } from '@/lib/data'

const links = [
  { label: 'About',    href: '#about',          icon: User },
  { label: 'Skills',   href: '#skills',          icon: Code },
  { label: 'Experience', href: '#experience',    icon: Briefcase },
  { label: 'Projects', href: '#projects',        icon: Code },
  { label: 'Certs',    href: '#certifications',  icon: Certificate },
  { label: 'Contact',  href: '#contact',         icon: Envelope },
]

export default function Navbar() {
  return (
    <>
      {/* ── Top bar (desktop + mobile) ─────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(34,40,49,0.4)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid rgba(255,107,0,0.15)',
          boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            height: 64,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span
              style={{
                width: 36,
                height: 36,
                background: '#FF6B00',
                borderRadius: 6,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#222831',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '-0.02em',
                flexShrink: 0,
                boxShadow: '0 0 12px rgba(255,107,0,0.4)',
              }}
            >
              RI
            </span>
            <span
              style={{
                fontWeight: 600,
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
              }}
            >
              {profile.name}
            </span>
          </a>

          {/* Desktop nav links */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
            className="desktop-nav"
          >
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.85rem',
                    color: 'rgba(238,238,238,0.7)',
                    borderRadius: 6,
                    transition: 'all 0.2s',
                    display: 'block',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#EEEEEE'
                    e.currentTarget.style.background = 'rgba(255,107,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(238,238,238,0.7)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {l.label === 'Experience' ? 'Exp' : l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="desktop-cta"
            style={{
              padding: '8px 20px',
              background: '#FF6B00',
              color: '#222831',
              borderRadius: 6,
              fontSize: '0.85rem',
              fontWeight: 700,
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#ff8533'
              e.currentTarget.style.boxShadow = '0 0 16px rgba(255,107,0,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#FF6B00'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* ── Bottom nav bar (mobile only) ──────────────────────────── */}
      <nav
        className="mobile-bottom-nav"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(34,40,49,0.75)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderTop: '1px solid rgba(255,107,0,0.15)',
          boxShadow: '0 -4px 32px rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          padding: '8px 0 max(8px, env(safe-area-inset-bottom))',
        }}
      >
        {links.map(l => {
          const Icon = l.icon
          return (
            <a
              key={l.href}
              href={l.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3,
                padding: '6px 10px',
                borderRadius: 10,
                color: 'rgba(238,238,238,0.5)',
                fontSize: '0.6rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
                textDecoration: 'none',
                minWidth: 44,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FF6B00'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(238,238,238,0.5)'
              }}
            >
              <Icon size={22} />
              {l.label === 'Experience' ? 'Exp' : l.label === 'Certifications' ? 'Certs' : l.label}
            </a>
          )
        })}
      </nav>

      <style>{`
        /* Desktop: show top links + CTA, hide bottom bar */
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-bottom-nav { display: none !important; }
        }
        /* Mobile: hide desktop links + CTA, show bottom bar */
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-bottom-nav { display: flex !important; }
        }
      `}</style>
    </>
  )
}
