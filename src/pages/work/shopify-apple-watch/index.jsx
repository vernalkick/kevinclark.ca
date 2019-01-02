import React from 'react'
import styled from 'styled-components'

import Section from '../../../components/Section'
import {FigCaption} from '../../../components/Figure'
import PullQuote from '../../../components/PullQuote'
import { Media } from '../../../components/Media'
import { Grid, Column } from '../../../components/ContentGrid'
import HeroImage from '../../../components/HeroImage'
import NewFigure from '../../../components/NewFigure'
import Project from '../../../templates/Project'

import hero from "./hero.png"
import sketch from "./sketch.jpg"
import gif from "./shopify-watch.gif"

exports.frontmatter = {
  company: 'Shopify',
  title: 'Shopify for Apple Watch',
  image: './shopify-watch-thumb.png',
  date: '2018-07-30',
  slug: 'shopify-apple-watch'
}

const ShopifyAppleWatch = () => (
  <Project frontmatter={exports.frontmatter}>
    <div>
      <Section>
        <HeroImage>
          <Section>
            <img src={hero} alt=""/>
          </Section>
        </HeroImage>
        <Grid>
          <Column start={5} width={4}>
            <p><strong>This started as my Hack Days project.</strong> The SDK had came out a few months earlier, but the watch wasn’t even out yet. I decided I wanted to take a stab at figuring out what would be useful to see on the Apple Watch.</p>
            <p>My idea was simple, I wanted to be able to view how my store was doing at a glance and be notified of new sales. This way, both merchants with a lot of orders and merchants that are just starting out could get value out of the app and the interactions with the app wouldn’t be longer than a few seconds.</p>
            <p>I pulled out my sketchbook and started sketching a few ideas for ways to display your store’s data in a way that is visually interesting and makes the most of the small display of the watch.</p>
          </Column>
          <Column start={1} width={3}>
            <NewFigure>
              <img src={sketch} />
              <FigCaption title='Initial sketching'>Pen and paper really force you to distill a problem to its essence.</FigCaption>
            </NewFigure>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column start={3} width={4}>
            <p><strong>Then I put my headphones on</strong> and immediately started working on the actual UI in Sketch. A thing I kept asking myself when I was designing was “is this useful?”, “is this interesting?” It’s also easy to make the text too small. Because I had never seen one in person, mirroring the screen to my iPhone was really helpful in getting the sizing right.</p>
            <p>Next, I decided to prototype some of this stuff. I wasn’t sure how long it would take me to wrap my head around WatchKit, so I figured that if I couldn’t have a live demo working, I could at least show a prototype. I compared the pros and cons of Framer, Origami and Form but quickly decided to go with Origami. It required the least time to get set up, had a way to display the app on an iPhone and interact with it in realtime and a great way to present. One thing I noticed is that it’s pretty good at prototyping single interactions or transitions, but more complex things like having different states required a huge amount of effort. All in all, in a day I went from an idea to a mostly working prototype of the functionality I wanted. Not bad.</p>
          </Column>
          <Column start={7} width={2}>
            <FigCaption title="Aside" decoration={true}>
              Apple has made available resources for designing for the Apple Watch, like the San Francisco font and a few Sketch files of the different parts of the UI.
            </FigCaption>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={4}>
            <PullQuote>I kept asking myself questions when designing the app. Is this interesting? Is this going to be useful?</PullQuote>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={3}>
            <NewFigure isPortrait={true} background="#fff">
              <img src={gif} />
              <FigCaption title='First prototype'>This is the first working prototype I was able to see in the Simulator. I was so happy.</FigCaption>
            </NewFigure>
          </Column>
          <Column start={5} width={4}>
            <p><strong>Next morning, I fired up Xcode</strong> and got to work on a working version, well… It wasn’t pulling real data, but but at least it wast real code running on the Watch/Phone. Due to the inherent simplicity of WatchKit, getting the UI working in Interface Builder was relatively easy. I was making good progress, but time was running out.</p>
            <p>I presented my project, and luckily enough a few people were interested in it too! So over the next few weeks, I handed over my project files and assets and they rewrote my terribly rushed code, improved a ton over the initial functionality of the app, hooked it up to real data from the app (pretty important part) and put a huge amount of effort trying to reduce the load time of the app.</p>
            <p>This was a super fun quick project to work on and gave me a nice change from what I usually work on. As you might have guessed, one of the first things I did when I got my Apple Watch was load up the app.</p>
          </Column>
        </Grid>
      </Section>
    </div>
  </Project>
)

export default ShopifyAppleWatch
