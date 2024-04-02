import Head from 'next/head'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

const projects = [
  {
    name: 'Passhole',
    description: 'A configurable ephemeral secret storage system.',
    link: {
      href: 'https://passhole.org',
      label: 'passhole.org',
    },
  },
  {
    name: 'Stop The Water Steal',
    description:
      'A local nonprofit organization combatting the steal of water resources in Tippecanoe County.',
    link: {
      href: 'https://stopthewatersteal.demo.pixelparasol.com/',
      label: 'stopthewatersteal.demo.pixelparasol.com/',
    },
  },
  {
    name: 'Stat Tackler',
    description:
      'A football statistic tracking application, meant to help get high school students recruited.',
    link: {
      href: '',
      label: '',
    },
  },
]

const favorites = [
  {
    name: 'Gotham Gives',
    description:
      'I had little design input on this one. I thought it was pretty clean, while still giving the client what they wanted. More importantly, this was one of the first accessibility audits I ever did on a site. Unfortunately, the headings are not in order as they should be, but I can’t control that, as the client updates the site pretty regularly.',
    link: {
      href: 'https://gothamgives.org/',
      label: 'gothamgives.org/',
    },
  },
  {
    name: 'National Lung Cancer Roundtable',
    description:
      'I was pretty happy to work on this and support the American Cancer Society. I did multiple sites for them at my current job, and accessibility was put as a consideration on this one when I built it. Score isn’t what I would like, but lots of that is on the client',
    link: {
      href: 'https://nlcrt.org',
      label: 'nlcrt.org',
    },
  },
  {
    name: 'Storyware',
    description:
      'Designed and built the hero on this one and implemented animations. Sure they aren’t crazy, but I was pretty happy.',
    link: {
      href: 'https://storyware.co',
      label: 'storyware.co',
    },
  },
  {
    name: 'Igloo Frozen Custard',
    description:
      'I like the subtle animations, and this was one of my first video banners. I built this in [previous year] with my previous employer and it has not been mainted properly. <------- Not proud of how it was maintained since I am not at the company I was at when I built this, but I was pretty happy about the subtle animations, and the one of my first video hero’s.',
    link: {
      href: 'https://igloofrozencustard.com',
      label: 'igloofrozencustard.com',
    },
  },
  {
    name: 'Indiana Rubber',
    description:
      'Not proud of how it was maintained since I am not at the company I was at when I built this, but I was pretty happy about the subtle animations, and the one of my first video hero’s.',
    link: {
      href: 'https://indianarubber.com/',
      label: 'indianarubber.com/',
    },
  },
  {
    name: "DT Kirby's",
    description:
      'Sometimes not the biggest sites are always the best. In this one, I made the entire site, but I was particularly proud of the banner animation on the homepage. I thought it added a little bit of flare that it wouldn’t otherwise have.',
    link: {
      href: 'https://dtkirbys.com',
      label: 'dtkirbys.com/',
    },
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

export default function Application() {
  return (
    <>
      <Head>
        <title>Tailwind Labs Application</title>
        <meta
          name="description"
          content="This is my application for Tailwind Labs"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="prose-invert prose prose-h2:text-zinc-600 prose-p:mt-6 prose-p:space-y-7 prose-p:text-base prose-p:text-zinc-600 prose-blockquote:rounded prose-blockquote:border-l-4 prose-blockquote:border-l-teal-400 prose-blockquote:bg-zinc-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:text-zinc-600 prose-blockquote:shadow-lg prose-blockquote:shadow-zinc-800/5 prose-li:mt-6 prose-li:space-y-7 prose-li:text-base prose-li:text-zinc-600 dark:prose-h2:text-white dark:prose-p:text-zinc-400 dark:prose-blockquote:bg-zinc-800/50 dark:prose-blockquote:text-zinc-200 dark:prose-li:text-zinc-400">
          <blockquote>
            A query walks into a bar. It goes up to two tables and says,
            &quot;Can I join you?&quot;
          </blockquote>
          <p>
            I am Justin Esders, master of dad jokes, based in West Lafayette,
            Indiana. With over 12 years of experience in front-end engineering,
            I have cultivated a deep understanding of various technologies.
            While my focus has mostly been front-end engineering, I invite you
            to explore my resume&apos; for a comprehensive overview of my skills
            and experiences, which can be found{' '}
            <a href="/docs/resume.pdf" target="_blank">
              here
            </a>
            .
          </p>
          <blockquote>Current Timezone: Eastern (UTC-5)</blockquote>
          <hr />
          <h2>What makes me a great fit?</h2>
          <p>
            I am excited about the opportunity to bring my expertise to the
            Design Engineer role at Tailwind Labs. I have a passion for
            executing designs with pixel perfect attention to detail, enjoyable
            user experiences, and intuitive interfaces while also ensuring that
            my work is accessible to everyone. While I do not own loupes, my
            glasses are +6.00, so I have plenty of magnification 🤓.
          </p>
          <p>
            I am dedicated to delivering high-quality work and have a keen eye
            for detail. I excel at translating designs into functional and
            visually appealing websites and web applications. I think a crucial
            step in the design process is reviewing and revising a preliminary
            design with an engineer's eye to guarantee it can be executed with
            the desired functionality.
          </p>
          <p>
            I am passionate about accessibility and believe that technology
            should be inclusive and accessible to all users. I have a thorough
            understanding of accessibility standards and best practices, and I
            strive to incorporate them into every project I am involved in.
          </p>
          <p>
            In addition to my technical skills, I am a committed team player who
            thrives in collaborative environments. I have always worked as part
            of a small team. Communication is crucial for a team and project to
            be successful, so I prioritize clear and thorough communication with
            collaborators and clients.
          </p>
          <h2 className="mb-12">Projects I am working on</h2>
          <div className="not-prose">
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
                  <Card.Description>{project?.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    {project?.link?.href != '' && (
                      <LinkIcon className="h-6 w-6 flex-none" />
                    )}

                    <span className="ml-2">{project?.link?.label}</span>
                  </p>
                </Card>
              ))}
            </ul>
          </div>
          <h2>Projects I am proud of</h2>
          <p>
            Generally, I am pretty proud of most projects that I take on. During
            some projects, I faced challenges making the entire final product
            exactly what I envisioned because of limitations set by the clients
            or upper management. Nonetheless, there are projects and features
            that I am particularly proud of. Below are some highlights, but for
            a more extensive list of projects that turned out well, you can
            check{' '}
            <a href="/projects" target="_blank">
              this
            </a>{' '}
            out.
          </p>
          <div className="not-prose">
            <ul
              role="list"
              className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
              {favorites.map((favorite) => (
                <Card as="li" key={favorite?.name}>
                  <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <Card.Link href={favorite?.link?.href}>
                      {favorite?.name}
                    </Card.Link>
                  </h2>
                  <Card.Description>{favorite?.description}</Card.Description>
                  <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    {favorite?.link?.href != '' && (
                      <LinkIcon className="h-6 w-6 flex-none" />
                    )}

                    <span className="ml-2">{favorite?.link?.label}</span>
                  </p>
                </Card>
              ))}
            </ul>
          </div>
          <h2>What excites me about this role?</h2>
          <p>
            I am enthusiastic about the opportunity at Tailwind Labs, where I
            aspire to contribute to innovative and impactful projects. I look
            forward to collaborating with a team that shares my dedication to
            creating meaningful solutions and driving positive change in our
            community. The prospect of working with an ideal tech stack is
            particularly exciting, as I believe it will not only enable me to
            excel in my contributions but also provide valuable opportunities
            for professional growth as an engineer.
          </p>
          <h2>Those who cannot do, teach.</h2>
          <p>
            In my previous position as a senior front-end engineer, I had a
            leadership role, which involved teaching junior engineers and
            interns. I was responsible for training them on front-end standards,
            which I also had a hand in creating. This experience not only honed
            my leadership skills but also deepened my understanding of how to
            effectively communicate complex technical topics to others.
          </p>
          <p>
            I excel at breaking down complex topics into easily digestible
            concepts and making them understandable for individuals with varying
            levels of technical expertise. Whether I am explaining the
            intricacies of a new technology to a colleague or guiding a team
            through a project, I strive to ensure that everyone understands the
            topic at hand. My patient and supportive approach to teaching has
            been well-received by my peers, and I take pride in helping others
            develop their skills and achieve their goals.
          </p>
          <p>
            Additionally, I have written a lot of documentation, which has been
            instrumental in assuring that our team follows best practices and
            maintains a high standard of quality in our work.
          </p>
          <p>
            In my current role, I am responsible for educating the team about
            accessibility and advocating for and implementing standards that
            ensure our products are accessible to all users. I set up the
            standards and create relevant tasks in Asana so that the standards
            are met on every project. I also conduct training sessions to
            educate the team about best practices. Additionally, I spearheaded
            the adoption of Polypane, a tool that has significantly sped up our
            engineering process and guaranteed that our work meets the highest
            standards of quality.
          </p>
        </div>
      </Container>
    </>
  )
}
