/**
 * Portfolio Projects Data
 * Central source of truth for portfolio project items.
 */

export const projects = [
  {
    id: 'embryan-it-solutions',
    title: 'Embryan IT Solutions',
    category: 'web',
    type: 'Client Work',
    description: 'E-commerce site built for Embryan IT Solutions.',
    tech: ['PHP', 'React', 'MySQL'],
    timeline: {
      startDate: '2026-05-30',
      duration: 'About a month'
    },
    clientWork: true,
    image: 'ECOM.png'
  },
  {
    id: 'shop-viotor',
    title: 'Shop Viotor',
    category: 'web',
    type: 'Client Work',
    description: 'Student marketplace with hire purchase. Solo build with no teammates.',
    tech: ['PHP', 'React', 'MySQL'],
    timeline: {
      startDate: '2026-07-25',
      duration: 'About a month'
    },
    clientWork: true,
    soloBuild: true,
    metrics: null, // Strictly no order-volume or usage metrics
    image: 'VIOTOR.png'
  },
  {
    id: 'adroit-bureau',
    title: 'Adroit Bureau',
    category: 'web',
    type: 'Marketing Website',
    description: 'Marketing website for Adroit Bureau (built the marketing website, not the ERP).',
    tech: ['Web'],
    timeline: null, // Dates removed per instruction (no dates)
    note: 'Built marketing website only, not the ERP',
    image: 'desksetup.jpeg'
  },
  {
    id: 'wiloty-foundation',
    title: 'Wiloty Foundation',
    category: 'web',
    type: 'Informal / Freelance',
    description: 'Informal freelance website project arranged through a friend.',
    tech: ['Web'],
    siteOwner: null, // Do not name a site owner
    timeline: null,
    image: 'desksetup.jpeg'
  },
  {
    id: 'bank-reconciliation',
    title: 'AI Bank Reconciliation System',
    category: 'desktop',
    type: 'Prototype Application',
    status: 'Prototype',
    description: 'Intelligent bank reconciliation prototype software for automated financial matching and reporting.',
    tech: ['C#', '.NET', 'AI/ML'],
    image: 'bankrecon.png',
    links: {
      code: 'https://github.com/Joenyarko/bank-reconciliation-system'
    }
  },
  {
    id: 'neziz-invoice-pwa',
    title: 'Neziz Invoice PWA',
    category: 'mobile',
    type: 'Personal Tool',
    description: 'Personal progressive web application (PWA) invoicing tool.',
    tech: ['PWA', 'Web'],
    image: 'INV.png'
  }
];

export const draftProjects = [
  {
    id: 'willies-woodwork',
    title: 'Willies Woodwork',
    category: 'web',
    status: 'draft',
    note: 'Archived until details are confirmed.',
    image: 'willies.png',
    links: {
      preview: 'https://www.williescreation.com/'
    }
  },
  {
    id: 'rock-and-redeemer',
    title: 'Rock & Redeemer NGO',
    category: 'web',
    status: 'draft',
    note: 'Archived until details are confirmed.',
    image: 'r&r.png',
    links: {
      preview: 'https://myrockandmyredeemer.vercel.app/'
    }
  },
  {
    id: 'saly-wedding',
    title: 'Saly Wedding Program',
    category: 'web',
    status: 'draft',
    note: 'Archived until details are confirmed.',
    image: 'saly.png',
    links: {
      preview: 'https://saly26.vercel.app/'
    }
  },
  {
    id: 'nezizinvento',
    title: 'NezizInvento',
    category: 'desktop',
    status: 'draft',
    note: 'Archived - framework and database claims deleted.',
    image: 'INV.png'
  }
];

export default {
  projects,
  draftProjects
};

