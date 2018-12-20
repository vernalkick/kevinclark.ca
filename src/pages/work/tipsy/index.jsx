import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import PullQuote from '../../../components/PullQuote'
import { Grid, Column } from '../../../components/ContentGrid'
import OffsetImage from '../../../components/OffsetImage'
import { FigCaption } from '../../../components/Figure'
import { Media } from '../../../components/Media'

import hero from './tipsy-hero-2.png'
import code from './code.png'

exports.frontmatter = {
  title: "Tipsy",
  image: "./tipsy-thumb.png",
  date: '2018-07-31',
  slug: 'tipsy'
}

const HalfHeader = styled.div`
  margin-bottom: 3rem;

  ${Media.desktop`
    width: 45%;
    margin-bottom: 6rem;
    position: relative;
  `}
`

const MainImage = styled.div`
  margin-top: 1rem;
  margin-left: -15%;
  width: 130%;

  ${Media.desktop`
    position: absolute;
    margin: 0;
    left: 105%;
    width: 150%;
    top: -2rem;
  `}
`

const MainContent = styled.div`
  margin-top: 1.5rem;

  ${Media.desktop`
    margin-top: 3rem;
  `}
`

const Tipsy = () => (
  <div>
    <HalfHeader>
      <MainPageHeader>Tipsy</MainPageHeader>
      <MainImage>
        <img src={hero} alt="Mockup of the Tipsy app on an iPhone 6" />
      </MainImage>
      <MainContent>
        <p><strong>I work on the web day in, day out.</strong> I know the medium very well: its capabilities, its limitations, its opportunities. But I’m doing a lot less on the web today than I did just a few years ago. My phone is an incredible computer that is not only more convenient, but often more enjoyable to use. I thought it’d be interesting to start designing for it. It would be a new canvas to play with and would make me understand the constraints of mobile a lot better.</p>
        <p>I didn’t want to just make fake apps though. There is some value in designing just for the sake of designing, but It’s incredibly limiting. I wanted to make apps that people could use.</p>
      </MainContent>
    </HalfHeader>
    <div>
      <Section>
        <Grid>
          <Column width={2}>
            <OffsetImage src={code} />
          </Column>
          <Column width={4}>
            <p><strong>So I started looking for iOS classes or tutorials online.</strong> Most of them were either focused on learning how to achieve one specific effect for someone who already knows the ins and outs of UIKit or was so broad and so theoretical that I could’t bring myself to go through it all. And then, <a href="http://joshlong.cc/">Josh Long</a> and <a href="http://soff.es/">Sam Soffes</a> announced Execute iOS. It was exactly what I wanted: an experienced iOS developer reaches someone new to programming how to make a real iOS app, top to bottom. No theory bullshit, just things you’re actually going to use. I bought it right away.</p>
            <p>Listening to the first few videos and following along, I was able to pick up the basics of Objective-C pretty quickly. The language is intimidating at first, but when you look past the square brackets and verbose method names, it’s a pretty good language.</p>
          </Column>
          <Column width={2}>
            <FigCaption title="Note" decoration={true}>
             The course is now pretty outdated, so if you’re also interested in learning how to develop for iOS, I wouldn’t recommend it. I haven’t found any new courses with a similar focus unfortunately.
           </FigCaption>
          </Column>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Column start={5} width={4}>
            <p>I was so motivated to write my own little app that I never actually finished watching all the videos. Towards the middle of the series I knew enough that I could get started and know what to Google for if there was something specific I didn’t know or remember.</p>
            <p>So in a few hours I designed and wrote Tipsy, my first iOS app. It’s extremely simple and it’s definitely not setting the world on fire. The App Store has countless tip calculator apps and their usefulness is pretty limited. But I’m super proud of it. I learned so much building this little app that I consider it a success despite the fact that it hasn’t gotten very many downloads.</p>
            <p>Speaking of which, you can download it for free if you want to check it out.</p>
          </Column>
          <Column start={1} width={3}>
            <PullQuote>The app is extremely simple and it’s definitely not setting the world on fire, but I’m super proud of it. I learned so much.</PullQuote>
          </Column>
        </Grid>
      </Section>
    </div>
  </div>
)

export default Tipsy
