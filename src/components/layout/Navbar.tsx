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
        borderBottom: '1px solid var(--bg-border)',
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
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
              color: '#fff',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '-0.02em',
              flexShrink: 0,
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
            gap: 8,
            listStyle: 'none',
          }}
          className="hidden md:flex"
        >
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  borderRadius: 6,
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
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
                padding: '8px 18px',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: 6,
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'background 0.15s',
                display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}
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

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: '1px solid var(--bg-border)',
            background: 'var(--bg-surface)',
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
                padding: '10px 0',
                fontSize: '0.95rem',
                color: 'var(--text-secondary)',
                borderBottom: '1px solid var(--bg-border)',
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
              color: '#fff',
              borderRadius: 6,
              fontSize: '0.9rem',
              fontWeight: 600,
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
