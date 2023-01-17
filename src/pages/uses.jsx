import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Justin Esders</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, 6-Core i7, 32GB RAM (2019)">
              Believe it or not, before I was using the MacBook, I was a PC 
              person. I still can’t believe I used a PC all those years as it
              hindered my development speed dramatically. Once you go Mac, you
              never go back 😉.
            </Tool>
            <Tool title="Viotek 32” display (Standard Glass)">
              Not the fanciest monitor on the market, but a solid 1080p 
              monitor nonetheless. When you are designing for the web,
              every pixel matters.
            </Tool>
            <Tool title="Apple Magic Keyboard">
              I used to have an old mechanical keyboard back in the day. While the 
              clicky feeling and lights were a cool aesthetic, I was ready for a change. 
              This keyboard lets me seamlessly go from laptop to keyboard without missing 
              a beat. 
            </Tool>
            <Tool title="Apple Magic Trackpad">
              Something about all the gestures makes me feel like a wizard with
              special powers. Like my keyboard I really like the ease of going from 
              my MacBook to my trackpad without missing a beat.
            </Tool>
            <Tool title="Autonomous ErgoChair Pro">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in a fancy chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development Tools">
            <Tool title="Visual Studio Code">
              I’ve used Notepad++, Atom, Sublime Text, and now 
              Visual Studio Code. I will never go back to another IDE.
            </Tool>
            <Tool title="iTerm2">
              I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I don’t design often, but when I do I reach for Figma.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Visual Studio Code of the application launcher world.
            </Tool>
            <Tool title="Spectacle">
              I often find myself needing to reach for Spectacle for situations 
              such as building responsive websites. This allows me to split screen 
              my editor and the browser so I can work more efficiently.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
