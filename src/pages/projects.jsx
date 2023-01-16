import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  // Pixel Parasol Projects
  {
    name: 'Purdue Center for Cancer Research',
    description:
      'The Purdue Center for Cancer Research has been fighting cancer for over 40 years. Our mission is discovery. Our goal is to cure cancer.',
      link: { href: '', label: '' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  
  // SFP Projects
  {
    name: 'Purdue Center for Cancer Research',
    description:
      'The Purdue Center for Cancer Research has been fighting cancer for over 40 years. Our mission is discovery. Our goal is to cure cancer.',
      link: { href: '', label: '' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'The Wireless Guys',
    description:
      'Let Wireless Networking Solutions help you stay connected with our many wireless products.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Purdue University Impact',
    description:
      'Through collaboration and research-based practices, IMPACT at Purdue creates student-centered teaching and learning environments.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Richardson Plowden',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Fumigation Service &amp; Supply',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'SOAPKCO',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Chyall Pharma',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Central Indiana Rubber',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Cherokee County',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'AWAKE Center',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'David Thompson Labs',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Garmon Construction',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Lafayette Brewing Company',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Insects Limited',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'LoD Offroad',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Roseville Pottery',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Route32 Restorations',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Automated Payroll Services',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Fumigation Zone',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'IU Transgender Surgery',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Play Again Now',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Surepak-12',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'The Blunt Truth',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Online Resources',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Becks Auto Center',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'DAODAS',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Ward Contracting',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Dormakaba',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Now I See',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Leatherneck Hardware',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Illinois Foundation Seeds, Inc',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'O&amp;R Precision Imaging',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Unified Group',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Dorma Huppe - Germany',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Rossville Quilts',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Dorma Huppe - Malaysia',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Trinity UMC',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Modernfold',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: logoModernfold,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Enjoy White County',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Gibson Painting',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'ERMCO',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Punchdrunk Digital',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'ZZ Diesel',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Shoups County Foods',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'ioSafe',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Wintek',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'The Frozen Igloo',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: '130 Agency',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'University Plastic Surgeons',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'CyberPay',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'DT Kirby&#39;s',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Natures Mulch',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Dorma Huppe - Germany',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Aeroscout',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },
  {
    name: 'Dandelion Puff',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    // services: ['Development', 'Design', 'Consulting'],
    // technologies: ['Laravel, WordPress, Whatever'],
    builtFor: 'SFP',
  },

// Storyware Projects
  {
    name: 'Focused Ultrasound Foundation',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Fields Frisco',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'LoyalBrew',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Gotham Gives',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Commonwealth Senior Living',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Accent Global',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Living Central Virginia',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'AGallery',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Storyware',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Allied Concrete',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Eagle Corporation',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'Valley Building Supply',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'http://igloofrozencustard.com', label: 'igloofrozencustard.com' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
  {
    name: 'New Mexico Museum of Art',
    description:
      'Creating technology to empower civilians to explore space on their own terms.',
    link: { href: 'https://www.nmartmuseum.org/', label: 'nmartmuseum.org' },
    // logo: projectLogoHere,
    services: ['Development', 'Design', 'Consulting'],
    technologies: ['Laravel, Tailwind, Themosis, WordPress'],
    builtFor: 'Storyware',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Justin Esders</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the world (wide web 😉)."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the world (wide web 😉)."
        intro="Throughout my career, I've had the opportunity to work on a diverse range of projects. These featured on my portfolio are the ones that I'm particularly proud of. Some of them were developed for companies I've been affiliated with, so don't hesitate to visit their website and reach out if something catches your eye."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project?.name}>
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project?.link?.href}>{project?.name}</Card.Link>
              </h2>
              {/* <p className="mt-1 text-xs font-normal text-zinc-600 dark:text-zinc-600">
                Built for {project?.builtFor}
              </p> */}
              <Card.Description>{project?.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project?.link?.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
