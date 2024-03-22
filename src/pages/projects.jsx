import Image from 'next/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  // Storyware Projects
  {
    name: 'National Colorectal Cancer Roundtable',
    description:
      'The American Cancer Society National Colorectal Cancer Roundtable (ACS NCCRT) is a consortium of public, private, and voluntary organizations that work together to fight colorectal cancer by engaging in research and projects that no one organization can take on alone.',
    link: { href: 'https://nccrt.org/', label: 'nccrt.org' },
    builtFor: 'Storyware',
  },
  {
    name: 'National Lung Cancer Roundtable',
    description:
      'The American Cancer Society National Lung Cancer Roundtable (ACS NLCRT) is a consortium of public, private, and voluntary organizations that work together to fight lung cancer by engaging in research and projects that no one organization can take on alone.',
    link: { href: 'https://nlcrt.org/', label: 'nlcrt.org' },
    builtFor: 'Storyware',
  },
  {
    name: 'RecRe',
    description:
      'RecRe is an automated rental platform that enables universities to offer secure rentals to students 24/7, with minimal management.',
    link: { href: 'https://recrebox.com/', label: 'recrebox.com' },
    builtFor: 'RecRe',
  },
  {
    name: 'LoyalBrew',
    description:
      'LoyalBrew is an intuitive and captivating mobile web application that encourages patrons to increase their spending through incentives.',
    link: { href: 'http://loyalbrew.com', label: 'loyalbrew.com' },
    builtFor: 'Storyware',
  },
  {
    name: 'Gotham Gives',
    description:
      'Gotham Gives invests in initiatives that reflect the rich diversity of New York City and improve systemic equity by creating social, educational, and cultural opportunities for all New Yorkers.',
    link: { href: 'https://gothamgives.org/', label: 'gothamgives.org' },
    builtFor: 'Storyware',
  },
  {
    name: 'Accent Global',
    description:
      'Accent Global is committed to promoting global perspectives and have been doing so for over 30 years as a trusted partner, revolutionizing global education in collaboration with colleges, universities, and university systems.',
    link: { href: 'https://accentglobal.com/', label: 'accentglobal.com' },
    builtFor: 'Storyware',
  },
  {
    name: 'Living Central Virginia',
    description:
      'Charlottesville has been ranked among the top 100 best places to live in America by Livability.com for 2021 and 2022. Discover more about the city and the entire Central Virginia region by visiting their digital publication.',
    link: {
      href: 'https://livingcentralva.org/',
      label: 'livingcentralva.org',
    },
    builtFor: 'Storyware',
  },
  {
    name: 'Storyware',
    description:
      'Storyware offers a full service of strategy, design and development for all your web and digital needs. From planning to execution, they create tailored solutions to achieve your business goals.',
    link: { href: 'http://storyware.co', label: 'storyware.co' },
    builtFor: 'Storyware',
  },
  {
    name: 'New Mexico Museum of Art',
    description:
      "The New Mexico Museum of Art is a division of the state's Department of Cultural Affairs, part of the Museum of New Mexico System including eight historic sites, and supported by the Museum of New Mexico Foundation for exhibitions and educational programs.",
    link: { href: 'https://www.nmartmuseum.org/', label: 'nmartmuseum.org' },
    builtFor: 'Storyware',
  },
  // Pixel Parasol Projects
  {
    name: 'Agricultural Economic Insights',
    description:
      'A more refined method of tracking, monitoring, and evaluating forecasts over an extended period.',
    link: { href: 'https://aeipremium.ag', label: 'aeipremium.ag' },
    builtFor: 'Pixel Parasol',
  },

  // SFP Projects
  {
    name: 'Central Indiana Rubber',
    description:
      'With over 125 years of experience, Central Indiana Rubber is ready to serve you in the manner you expect and deserve.',
    link: { href: 'https://indianarubber.com/', label: 'indianarubber.com' },
    builtFor: 'SFP',
  },
  {
    name: 'Garmong Construction',
    description:
      'Garmong Construction, a full-service general contractor based in Terre Haute, Indiana, offers a comprehensive range of building and construction services.',
    link: { href: 'http://garmong.net', label: 'garmong.net' },
    builtFor: 'SFP',
  },
  {
    name: 'Automated Payroll Services',
    description:
      'Take care of payroll, time tracking, reporting, vacation days, HR (benefit enrollment, ACA, onboarding, etc.), and more in Elements—our easy-to-use workforce management software.',
    link: {
      href: 'https://apsworkforcemanagement.com/',
      label: 'apsworkforcemanagement.com',
    },
    builtFor: 'SFP',
  },
  {
    name: 'Ward Contracting',
    description:
      'Ward Contracting & Building Restoration, Inc. is a family-run general contracting and masonry restoration company serving the Chicago metropolitan area since 1976. We are capable of completing all your new construction, remodeling, renovation and restoration projects.',
    link: {
      href: 'https://www.wardcontracting.com/',
      label: 'wardcontracting.com',
    },
    builtFor: 'SFP',
  },
  {
    name: 'Illinois Foundation Seeds, Inc',
    description:
      "The seed industry's leading independent company for sweet corn and field crops research, product development, licensing and production.",
    link: { href: 'https://www.ifsi.com/', label: 'ifsi.com' },
    builtFor: 'SFP',
  },
  {
    name: 'O&R Precision Imaging',
    description:
      'O&R Precision Imaging offers precision tooling, gauging, and fixturing for various industries utilizing modern equipment and skilled staff.',
    link: { href: 'https://orprecision.com/', label: 'orprecision.com' },
    builtFor: 'SFP',
  },
  {
    name: 'Modernfold',
    description:
      'Modernfold’s operable partitions and glass wall systems are the best performing and most desired flexible space solution to maximizing interior space and controlling acoustics.',
    link: { href: 'http://modernfold.com', label: 'modernfold.com' },
    builtFor: 'SFP',
  },
  {
    name: 'Skyfold',
    description:
      "Skyfold's operable partitions and glass wall systems are the best performing and most desired flexible space solution to maximizing interior space and controlling acoustics.",
    link: { href: 'https://skyfold.com', label: 'skyfold.com' },
    builtFor: 'SFP',
  },
  {
    name: 'Dorma Hueppe',
    description:
      "Dorma Hueppe's operable partitions and glass wall systems are the best performing and most desired flexible space solution to maximizing interior space and controlling acoustics.",
    link: { href: 'https://www.dorma-hueppe.com/', label: 'dorma-hueppe.com' },
    builtFor: 'SFP',
  },
  {
    name: 'Gibson Painting',
    description:
      "Gibson Painting, a family owned and operated business, is Indiana's preferred residential and commercial painting contractor. Get a free estimate today!",
    link: {
      href: 'https://gibson-painting.com/',
      label: 'gibson-painting.com',
    },
    builtFor: 'SFP',
  },
  {
    name: 'Punchdrunk Digital',
    description:
      'PunchDrunk offers a unique approach to strategy, standing out from other agencies that prioritize excel sheets and jargon over tailored solutions. Our team excels in creating distinct strategies for clients, instead of generic and overwhelming options.',
    link: {
      href: 'https://punchdrunkdigital.com/',
      label: 'punchdrunkdigital.com',
    },
    builtFor: 'SFP',
  },
  {
    name: 'The Frozen Igloo',
    description:
      'The Frozen Igloo is a locally owned small business that takes pride in serving meals made from family recipes handed down for 4 generations, always made fresh to order.',
    link: {
      href: 'http://igloofrozencustard.com',
      label: 'igloofrozencustard.com',
    },
    builtFor: 'SFP',
  },
  {
    name: 'DT Kirbys',
    description:
      "The original Kirby's in Downtown Lafayette. They built their bar with the pure intention of Great Food first, the feel of a corner family bar in the heart of Chicago & the dedication to love of our Chicago teams.",
    link: { href: 'http://dtkirbys.com', label: 'dtkirbys.com' },
    builtFor: 'SFP',
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
                <Card.Link href={project?.link?.href}>
                  {project?.name}
                </Card.Link>
              </h2>
              <p className="mt-1 text-xs font-normal text-zinc-600 dark:text-zinc-600">
                Built for {project?.builtFor}
              </p>
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
