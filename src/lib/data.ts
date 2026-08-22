export const profile = {
  name: 'Riva Imanudin',
  title: 'IT Field Engineer',
  subtitle: 'System Integration · RFID/Auto-ID · Server Infrastructure',
  location: 'South Jakarta, Indonesia',
  email: 'rifaimanudin@gmail.com',
  phone: '0878-0117-7413',
  portfolio: 'https://rivaimanudin.vercel.app',
  linkedin: 'linkedin.com/in/rivaimanudin',
  github: 'github.com/rivaile96',
  summary: 'IT Support professional with hands-on experience in hardware diagnostics, network troubleshooting, and end-user technical assistance. Proficient in Linux server administration, TCP/IP networking, and software deployment.',
}

export const skills = [
  { category: 'Hardware & Devices', items: ['RFID/Auto-ID (Impinj, Chainway, Zebra)', 'Peripheral Setup', 'Hardware Installation', 'Diagnostics & Troubleshooting'] },
  { category: 'Networking', items: ['TCP/IP Networking', 'Linux Debian Server', 'Fortinet Security Basics', 'Network Configuration'] },
  { category: 'Software & OS', items: ['Windows OS Administration', 'Linux Command Line', 'Python / PHP Scripting', 'Web Interface Troubleshooting'] },
  { category: 'Tools & Systems', items: ['MySQL / PostgreSQL', 'REST API', 'Ticketing & Documentation', 'Laravel'] },
]

export const experiences = [
  {
    title: 'IT Field Engineer',
    company: 'PT Global Trend Asia',
    period: '2025 – Present',
    points: [
      'Configuration, testing, and commissioning of RFID/Auto-ID solutions including fixed and handheld RFID readers',
      'Provided L2/L3 technical support for RFID hardware, network connectivity, middleware, and application integration',
      'Delivered product demonstrations and knowledge transfer to customer IT teams',
      'Created technical documentation, troubleshooting reports, and deployment guidelines',
    ],
  },
  {
    title: 'IT Support Specialist & Service Coordinator',
    company: 'PT Wahana Datarindo Sempurna',
    period: '2024 – 2025',
    points: [
      'Managed end-to-end repair process for Auto-ID units (Scanners, Printers, PDAs, POS)',
      'Handled RMA processes via Honeywell principal portal including warranty appeals',
      'Coordinated with external service centers: Zebra, Urovo, Newland, Idata, Kassen',
      'Engineered "G-Service" — Laravel-based After-Sales & RMA management system',
    ],
  },
  {
    title: 'IT Helpdesk',
    company: 'Dinas Koperasi',
    period: '2016 – 2018',
    points: [
      'Provided technical support troubleshooting hardware, software, and network issues',
      'Managed hardware and software inventory including procurement and maintenance',
      'Performed installation and configuration of hardware and software components',
    ],
  },
]

export const projects = [
  {
    name: 'G-Service',
    desc: 'Laravel-based After-Sales & RMA management system. Replaced manual Excel workflows with full automation for warranty management, repair tracking, and commercial document generation.',
    tech: ['Laravel', 'MySQL', 'PHP', 'REST API'],
    highlight: 'Enterprise-wide adoption — active operational backbone of technical division',
  },
  {
    name: 'ShipGuard',
    desc: 'Hybrid maritime tracking solution: People Tracking via BLE + Asset Tracking via RFID for PT Asian Bulk Logistics. Workflow matching logic to validate personnel and asset movements.',
    tech: ['BLE', 'RFID', 'IoT', 'System Architecture'],
    highlight: 'Secured full client approval, advanced to execution & field survey phase',
  },
  {
    name: 'UHF RFID SDK',
    desc: 'Custom UHF RFID Software Development Kit with dedicated web interface for advanced client demonstrations. Became operational standard for pre-sales team.',
    tech: ['UHF RFID', 'Web Interface', 'SDK', 'Data Visualization'],
    highlight: 'Accelerated client comprehension of Auto-ID technologies',
  },
]

export const certifications = [
  { name: 'Hack The Box Academy', detail: 'Penetration Testing Fundamentals & Linux Fundamentals' },
  { name: 'Fortinet NSE 1, 2, 3', detail: 'Network Security Associate' },
  { name: 'Honeywell Performance Partner', detail: 'Technical Accreditation — Mobility & Scanning' },
]

export const achievements = [
  { client: 'PT Adis Dimension Footwear (Nike)', detail: 'Technical pre-sales & PoC delivery' },
  { client: 'Bali United', detail: 'RFID solution deployment' },
  { client: 'PT Social Bella (Sociolla)', detail: 'Enterprise RFID integration' },
  { client: 'PT Klotifai', detail: 'WMS integration project' },
]
