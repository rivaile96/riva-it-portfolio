import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import CertificationsSection from '@/components/sections/CertificationsSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--bg-border)',
          background: 'var(--bg-void)',
          padding: '32px 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          © {new Date().getFullYear()} Riva Imanudin — Built with Next.js & Tailwind
        </p>
      </footer>
    </main>
  )
}
