/**
 * Portfolio Projects Data
 * Synchronized with verified live work from Neziz (https://neziz.vercel.app/portfolio)
 * and Joe Nyarko's portfolio.
 */

export const projects = [
  // 1. E-Commerce
  {
    id: 'embryan-it-solutions',
    title: 'Embryan IT Solutions — Electronics & Hardware Store',
    category: 'web',
    tag: 'Live Storefront',
    type: 'Client Work',
    description: 'High-conversion digital retail platform for premium consumer electronics, computing hardware, and accessories in Ghana with automated invoicing, secure cart checkout, and product filtering.',
    tech: ['PHP', 'React', 'MySQL', 'E-Commerce'],
    timeline: {
      startDate: '2026-05-30',
      duration: 'About a month'
    },
    clientWork: true,
    image: 'ECOM.png',
    url: 'https://embryanitsolutions.site/'
  },
  {
    id: 'shop-viotor',
    title: 'Shop Viotor — Premier Ghana & ATU Marketplace',
    category: 'web',
    tag: 'Live Marketplace',
    type: 'Client Work',
    description: 'Premier Ghanaian digital commerce marketplace with hire purchase built for the Accra Technical University (ATU) community and Ghanaian consumers. Solo build (no teammates).',
    tech: ['PHP', 'React', 'MySQL', 'Multi-Vendor Architecture'],
    timeline: {
      startDate: '2026-07-25',
      duration: 'About a month'
    },
    clientWork: true,
    soloBuild: true,
    image: 'shopviotor.png',
    url: 'https://www.shopviotor.com/'
  },

  // 2. SaaS & Desktop Applications
  {
    id: 'neziz-cloud-erp',
    title: 'Neziz Cloud — Susu & Cloud ERP Platform',
    category: 'web',
    tag: 'Live Cloud ERP',
    type: 'SaaS Platform',
    description: 'Enterprise multi-tenant cloud platform built for micro-finance institutions, credit unions, and daily contribution (Susu) collectors. Features real-time cash reconciliation, agent collection tracking, digital customer passbooks with QR verification, branch reporting, and automated financial ledgers.',
    tech: ['Multi-Tenant Cloud ERP', 'Daily Susu Ledger', 'Digital QR Passbooks', 'Cash Reconciliation'],
    image: 'Neziz-mockup.png',
    url: 'https://neziz.cloud/'
  },
  {
    id: 'nezizinvento',
    title: 'NezizInvento — Desktop Inventory & Point-of-Sale System',
    category: 'desktop',
    tag: 'Desktop Software',
    type: 'Desktop Application',
    description: 'Bespoke offline-first desktop inventory and sales terminal designed for fast-paced retail environments. Features real-time stock valuation, low stock warning telemetry, categorized sales logs, and local backup capability.',
    tech: ['Desktop Application', 'Offline-First POS', 'Stock Telemetry', 'Local Storage'],
    image: 'nezizinvento.jpg',
    url: null
  },
  {
    id: 'bank-reconciliation',
    title: 'AI Bank Reconciliation System (Prototype)',
    category: 'desktop',
    tag: 'Prototype',
    status: 'Prototype',
    type: 'Desktop Application',
    description: 'Intelligent bank reconciliation software prototype powered by AI for automated financial matching and reporting.',
    tech: ['C#', '.NET', 'AI/ML'],
    image: 'bankrecon.png',
    url: 'https://github.com/Joenyarko/bank-reconciliation-system'
  },

  // 3. NGO & Non-Profit
  {
    id: 'wiloty-foundation',
    title: 'Wiloty Foundation — Community Development & Education NGO',
    category: 'web',
    tag: 'Education & Charity',
    type: 'Freelance',
    description: 'Grassroots Ghanaian NGO portal committed to community advancement, basic education advocacy, underprivileged school support, and rural educational development (informal/freelance arranged through a friend).',
    tech: ['Advocacy Web Platform', 'Community Outreach', 'Events Portal'],
    image: 'wiloty.jpg',
    url: 'https://wilotyfoundation.org/'
  },
  {
    id: 'radiant-trust-international',
    title: 'Radiant Trust International (RTI) — Social Enterprise & NGO',
    category: 'web',
    tag: 'Humanitarian NGO',
    type: 'NGO Website',
    description: 'Ghanaian social enterprise and humanitarian non-governmental organization driving community empowerment, youth vocational training, vulnerable outreach, and sustainable social welfare programs across Ghana.',
    tech: ['Advocacy Web Platform', 'Community Outreach', 'Impact Stories'],
    image: 'radianttrust.png',
    url: 'https://www.radianttrust.org/'
  },
  {
    id: 'rock-and-redeemer',
    title: 'R&R Non-Governmental Organization',
    category: 'web',
    tag: 'Civil Society',
    type: 'NGO Website',
    description: 'Impactful digital advocacy portal designed to communicate NGO initiatives, field project transparency, and public humanitarian initiatives.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'r&r.png',
    url: 'https://myrockandmyredeemer.vercel.app/'
  },

  // 4. Corporate & Financial Websites
  {
    id: 'adroit-bureau',
    title: 'Adroit Bureau — Corporate Website',
    category: 'web',
    tag: 'Corporate Website',
    type: 'Website',
    description: 'Corporate marketing website designed and built for Adroit Bureau (built the marketing website, not the ERP), showcasing their services and business offerings with a responsive, modern presentation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: 'Adroit.png',
    url: 'https://home.adroitcloud.online/'
  },
  {
    id: 'shade-micro-credit',
    title: 'Shade Micro-Credit Enterprise — Accessible Loans in Accra',
    category: 'web',
    tag: 'Financial Services',
    type: 'Financial Portal',
    description: 'Trustworthy financial services portal facilitating accessible micro-loans, SME business financing packages, and rapid loan inquiry processing for micro-entrepreneurs in Accra, Ghana.',
    tech: ['Micro-Finance Portal', 'Loan Eligibility Tool', 'Mobile-First UX'],
    image: 'shade.png',
    url: 'https://shademicrocredit.vercel.app/'
  },
  {
    id: 'sbinc-solutions',
    title: 'Sbinc Solutions — Dream, Desire, Create!',
    category: 'web',
    tag: 'Creative Agency',
    type: 'Agency Website',
    description: 'Sleek, modern corporate website and digital portfolio showcasing creative design, branding strategy, and software solutions with fluid interactive animations.',
    tech: ['Creative Agency', 'Interactive UI/UX', 'Portfolio Showcase'],
    image: 'sbinc.png',
    url: 'https://sbincsolutions.vercel.app/'
  },
  {
    id: 'sappcloud',
    title: 'SappCloud — Free Microsoft SQL Teaching Sessions',
    category: 'web',
    tag: 'Learning Platform',
    type: 'Cloud Web Application',
    description: 'Interactive cloud educational platform and technical resource hub providing structured Microsoft SQL Server training, database administration coursework, student sessions, and technical community management.',
    tech: ['Cloud Web Application', 'SQL Training Modules', 'Student Portal'],
    image: 'B.A.png',
    url: 'https://sappcloud.net/'
  },
  {
    id: 'willies-woodwork',
    title: 'Willies Woodwork & Custom Craftsmanship',
    category: 'web',
    tag: 'Craftsmanship & Design',
    type: 'Website',
    description: 'Professional website for a woodwork business showcasing craftsmanship, custom furniture pieces, and bespoke interior installations.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: 'willies.png',
    url: 'https://www.williescreation.com/'
  },

  // 5. Mobile & Personal Tools
  {
    id: 'neziz-invoice-pwa',
    title: 'Neziz Invoice PWA',
    category: 'mobile',
    tag: 'Personal Tool',
    type: 'Personal Tool',
    description: 'Personal progressive web application (PWA) invoicing tool with offline resilience and instant receipt generation.',
    tech: ['PWA', 'Web Application', 'Offline Storage'],
    image: 'INV.png',
    url: null
  }
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'mobile', label: 'Mobile' }
];

export default projects;
