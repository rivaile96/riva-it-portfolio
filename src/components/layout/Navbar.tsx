'use client'
import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { profile } from '@/lib/data'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        /* glass effect */
        background: 'rgba(34,40,49,0.35)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
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
              background: 'var(--accent)',
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
              boxShadow: '0 0 12px rgba(255,211,105,0.4)',
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

        {/* Desktop nav */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
            listStyle: 'none',
          }}
          className="hidden md:flex"
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
                  e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(238,238,238,0.7)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              style={{
                marginLeft: 8,
                padding: '8px 20px',
                background: 'var(--accent)',
                color: '#222831',
                borderRadius: 6,
                fontSize: '0.85rem',
                fontWeight: 700,
                transition: 'all 0.2s',
                display: 'inline-block',
                boxShadow: '0 0 16px rgba(255,211,105,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--accent-hover)'
                e.currentTarget.style.boxShadow = '0 0 24px rgba(255,211,105,0.5)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.boxShadow = '0 0 16px rgba(255,211,105,0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            padding: 4,
          }}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu — glass too */}
      {open && (
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(34,40,49,0.6)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '12px 24px 20px',
          }}
          className="md:hidden"
        >
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '0.95rem',
                color: 'rgba(238,238,238,0.75)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              display: 'inline-block',
              marginTop: 16,
              padding: '10px 24px',
              background: 'var(--accent)',
              color: '#222831',
              borderRadius: 6,
              fontSize: '0.9rem',
              fontWeight: 700,
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
