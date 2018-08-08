import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import TwoColumns from '../../../components/TwoColumns'
import Figure from '../../../components/Figure'
import {FigCaption} from '../../../components/Figure'
import PullQuote from '../../../components/PullQuote'
import { Media } from '../../../components/Media'
import ContentGrid from '../../../components/ContentGrid'

import hero from "./hero.png"
import sketch from "./sketch.jpg"
import gif from "./shopify-watch.gif"

const Half = styled.div`
  ${Media.desktop`
    max-width: 55%;
  `}
`

exports.frontmatter = {
  title: 'Shopify for Apple Watch',
  image: './shopify-watch-thumb.png',
  date: '2018-07-30',
  slug: 'shopify-apple-watch'
}

const ShopifyAppleWatch = () => (
  <div>
    <MainPageHeader preTitle='Shopify'>Shopify for Apple Watch</MainPageHeader>
    <div>
      <Section>
        <img src={hero} alt=""/>
      </Section>
      <Section>
        <ContentGrid columns={2}>
          <ContentGrid.Column number={2}>
            <p><strong>This started as my Hack Days project.</strong> The SDK had came out a few months earlier, but the watch wasn’t even out yet. I decided I wanted to take a stab at figuring out what would be useful to see on the Apple Watch.</p>
            <p>My idea was simple, I wanted to be able to view how my store was doing at a glance and be notified of new sales. This way, both merchants with a lot of orders and merchants that are just starting out could get value out of the app and the interactions with the app wouldn’t be longer than a few seconds.</p>
            <p>I pulled out my sketchbook and started sketching a few ideas for ways to display your store’s data in a way that is visually interesting and makes the most of the small display of the watch.</p>
          </ContentGrid.Column>
          <ContentGrid.Column>
            <Figure src={sketch} caption={{
              title: 'Initial sketching',
              content: 'Pen and paper really force you to distill a problem to its essence.'
            }} />
          </ContentGrid.Column>
        </ContentGrid>
      </Section>
      <Section>
        <ContentGrid columns={3}>
          <ContentGrid.Column number={2}>
            <p><strong>Then I put my headphones on</strong> and immediately started working on the actual UI in Sketch. A thing I kept asking myself when I was designing was “is this useful?”, “is this interesting?” It’s also easy to make the text too small. Because I had never seen one in person, mirroring the screen to my iPhone was really helpful in getting the sizing right.</p>
            <p>Next, I decided to prototype some of this stuff. I wasn’t sure how long it would take me to wrap my head around WatchKit, so I figured that if I couldn’t have a live demo working, I could at least show a prototype. I compared the pros and cons of Framer, Origami and Form but quickly decided to go with Origami. It required the least time to get set up, had a way to display the app on an iPhone and interact with it in realtime and a great way to present. One thing I noticed is that it’s pretty good at prototyping single interactions or transitions, but more complex things like having different states required a huge amount of effort. All in all, in a day I went from an idea to a mostly working prototype of the functionality I wanted. Not bad.</p>
          </ContentGrid.Column>
          <ContentGrid.Column number={3}>
            <FigCaption title="Aside" decoration={true}>
              Apple has made available resources for designing for the Apple Watch, like the San Francisco font and a few Sketch files of the different parts of the UI.
            </FigCaption>
          </ContentGrid.Column>
        </ContentGrid>
      </Section>
      <Section>
        <Half>
          <PullQuote>I kept asking myself questions when designing the app. Is this interesting? Is this going to be useful?</PullQuote>
        </Half>
      </Section>
      <Section>
        <ContentGrid columns={2}>
          <ContentGrid.Column>
            <Figure src={gif} overlap caption={{
              title: 'First Prototype',
              content: 'This is the first working prototype I was able to see in the Simulator. I was so happy.'
            }} />
          </ContentGrid.Column>
          <ContentGrid.Column>
            <p><strong>Next morning, I fired up Xcode</strong> and got to work on a working version, well… It wasn’t pulling real data, but but at least it wast real code running on the Watch/Phone. Due to the inherent simplicity of WatchKit, getting the UI working in Interface Builder was relatively easy. I was making good progress, but time was running out.</p>
            <p>I presented my project, and luckily enough a few people were interested in it too! So over the next few weeks, I handed over my project files and assets and they rewrote my terribly rushed code, improved a ton over the initial functionality of the app, hooked it up to real data from the app (pretty important part) and put a huge amount of effort trying to reduce the load time of the app.</p>
            <p>This was a super fun quick project to work on and gave me a nice change from what I usually work on. As you might have guessed, one of the first things I did when I got my Apple Watch was load up the app.</p>
          </ContentGrid.Column>
        </ContentGrid>
      </Section>
    </div>
  </div>
)

export default ShopifyAppleWatch
