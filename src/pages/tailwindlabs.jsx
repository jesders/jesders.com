import Head from 'next/head'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

const projects = [
  {
    name: 'Passhole',
    description: 'A football stat tracking app for getting recruited.',
    link: {
      href: 'https://passhole.pixelparasol.com/',
      label: 'passhole.pixelparasol.com/',
    },
  },
  {
    name: 'Stop The Water Steal',
    description: 'A local nonprofit ',
    link: {
      href: 'https://stopthewatersteal.demo.pixelparasol.com/',
      label: 'stopthewatersteal.demo.pixelparasol.com/',
    },
  },
  {
    name: 'Stat Tackler',
    description: 'A football stat tracking app for getting recruited.',
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
      'I had a little design input on this one. I thought it was pretty clean, while still giving the client what they wanted. More importantly, this was one of the first accessibility audits I ever did on a site. Unfortunately, the headings are not in order as they should be, but I can’t control that, as the client updates the site pretty regularly.A football stat tracking app for getting recruited.',
    link: {
      href: 'https://gothamgives.org/',
      label: 'gothamgives.org/',
    },
  },
  {
    name: 'National Lung Cancer Roundtable',
    description:
      'I was pretty happy to work on this and help out the American Cancer Society. I did multiple sites for them at my current job, and accessibility was put as a consideration on this one when I built it. Score isn’t what I would like, but lots of that is on the client',
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
      'Not proud of how it was maintained since I am not at the company I was at when I built this, but I was pretty happy about the subtle animations, and the one of my first video hero’s.',
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
            Now that I have broke the ice go on to other stuff. I am Justin
            Esders, based in West Lafayette, Indiana. With over 12 years of
            experience in front-end engineering, I have cultivated a deep
            understanding of various technologies. While my expertise extends
            beyond front-end development, I invite you to explore my resume for
            a comprehensive overview of my skills and experiences.
          </p>
          <blockquote>Current Timezone: Eastern (UTC-5)</blockquote>
          <hr />
          <h2>What makes me a great fit?</h2>
          <p>
            I am excited about the opportunity to bring my expertise to the
            Design Engineer role at Tailwind Labs. With over 12 years of
            experience in frontend engineering, I have developed a strong skill
            set that includes creating pixel-perfect designs, ensuring
            accessibility, and enhancing user experience and interfaces.
          </p>
          <p>
            Throughout my career, I have been dedicated to delivering
            high-quality work and have a keen eye for detail. I excel at
            translating designs into functional and visually appealing websites,
            ensuring that every element is precisely placed and that the overall
            user experience is seamless.
          </p>
          <p>
            I am passionate about accessibility and believe that technology
            should be inclusive and accessible to all users. I have a thorough
            understanding of accessibility standards and best practices and
            strive to incorporate them into every project I work on.
          </p>
          <p>
            In addition to my technical skills, I am a committed team player who
            thrives in collaborative environments. I have a proven track record
            of working effectively on small teams and am always willing to go
            the extra mile to ensure the success of the team and the project.
          </p>
          <p>
            I am eager to bring my passion for frontend development and my
            dedication to creating exceptional user experiences to the talented
            team at Tailwind Labs.
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
            Generally, I am pretty proud of most projects that I take on. I have
            worked with clients big and small. However, there are always certain
            challenges, whether from clients, upper management, designers, or
            other factors, that can sometimes hinder achieving my ideal outcome.
            Nonetheless, there are a few projects that I am particularly proud
            of still to this day. My resume has most of the project that I
            thought turned out good, but below are some of the best IMO.
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
          <h2>
            What makes me excited about / what I look forward to in this role?
          </h2>
          <p>
            I am enthusiastic about the opportunity at Tailwind Labs, where I
            aspire to contribute to innovative and impactful projects. I look
            forward to collaborating with a team that shares my dedication to
            creating meaningful solutions and driving positive change in our
            community. The prospect of working with an ideal tech stack is
            particularly exciting, as I believe it will not only enable me to
            excel in my contributions but also provide valuable opportunities
            for professional growth as a developer.
          </p>
          <h2>Teaching ability and how I can break down complex topics</h2>
          <p>
            In my previous role as a senior front-end engineer, I took on a
            leadership role, leading collaborative efforts, conducting meetings,
            and providing training on new practices. I was responsible for
            training interns and new developers on our frontend standards, which
            I also had a hand in creating. This experience not only honed my
            leadership skills but also deepened my understanding of how to
            effectively communicate complex technical topics to others.
          </p>
          <p>
            I excel at breaking down complex topics into easily digestible
            concepts, making them accessible to individuals with varying levels
            of technical expertise. Whether I am explaining the intricacies of a
            new technology to a colleague or guiding a team through a project, I
            strive to ensure that everyone understands the topic at hand. My
            patient and supportive approach to teaching has been well-received
            by my peers, and I take pride in helping others develop their skills
            and achieve their goals.
          </p>
          <p>
            In addition to my teaching and leadership roles, I have written
            plenty of documentation, which has been instrumental in ensuring
            that our team follows best practices and maintains a high standard
            of quality in our work.
          </p>
          <p>
            In my current role, I have taken the lead on accessibility
            initiatives, advocating for and implementing standards that ensure
            our products are accessible to all users. I have been instrumental
            in setting up these standards in Asana and have conducted training
            sessions to educate the team on best practices. Additionally, I
            spearheaded the adoption of Polypane, a tool that has significantly
            sped up our development process and ensured that our work meets the
            highest standards of quality.
          </p>
          <p>
            I have also shared my knowledge and insights through blog posts,
            which you can find [link to blog posts]. I am passionate about
            sharing my knowledge and expertise with others and am committed to
            creating a supportive and inclusive learning environment. I believe
            that by empowering others with the skills and knowledge they need to
            succeed, we can achieve great things together.
          </p>
        </div>
      </Container>
    </>
  )
}
