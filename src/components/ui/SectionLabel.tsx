interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        style={{
          display: 'inline-block',
          width: 28,
          height: 1,
          background: '#00ADB5',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#00ADB5',
          fontWeight: 500,
        }}
      >
        {text}
      </span>
    </div>
  )
}
