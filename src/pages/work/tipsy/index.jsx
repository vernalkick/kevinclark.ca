import React from 'react'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import PullQuote from '../../../components/PullQuote'
import TwoColumns from '../../../components/TwoColumns'

import hero from './tipsy-hero-2.png'

exports.frontmatter = {
  title: "Tipsy",
  image: "./tipsy-thumb.png",
  date: '2018-07-31'
}

const Tipsy = () => (
  <div>
    <MainPageHeader>Tipsy</MainPageHeader>
    <div>
      <Section>
        <img src={hero} alt=""/>
      </Section>
      <Section>
        <TwoColumns>
          <div>
            <p><strong>I work on the web day in, day out.</strong> I know the medium very well: its capabilities, its limitations, its opportunities. But I’m doing a lot less on the web today than I did just a few years ago. My phone is an incredible computer that is not only more convenient, but often more enjoyable to use. I thought it’d be interesting to start designing for it. It would be a new canvas to play with and would make me understand the constraints of mobile a lot better.</p>
            <p>I didn’t want to just make fake apps though. There is some value in designing just for the sake of designing, but It’s incredibly limiting. I wanted to make apps that people could use.</p>
          </div>
          <PullQuote>It’s extremely simple and it’s definitely not setting the world on fire, but I’m super proud of it. I learned so much.</PullQuote>
        </TwoColumns>
      </Section>
      <Section>
        <TwoColumns>
          <div />
          <div>
            <p>So I started looking for iOS classes or tutorials online. Most of them were either focused on learning how to achieve one specific effect for someone who already knows the ins and outs of UIKit or was so broad and so theoretical that I could’t bring myself to go through it all. And then, <a href="http://joshlong.cc/">Josh Long</a> and <a href="http://soff.es/">Sam Soffes</a> announced Execute iOS. It was exactly what I wanted: an experienced iOS developer reaches someone new to programming how to make a real iOS app, top to bottom. No theory bullshit, just things you’re actually going to use. I bought it right away.</p>

            <p>Listening to the first few videos and following along, I was able to pick up the basics of Objective-C pretty quickly. The language is intimidating at first, but when you look past the square brackets and verbose method names, it’s a pretty good language.</p>
          </div>
        </TwoColumns>
      </Section>

      <Section>
        <TwoColumns>
          <div>
            <p>I was so motivated to write my own little app that I never actually finished watching all the videos. Towards the middle of the series I knew enough that I could get started and know what to Google for if there was something specific I didn’t know or remember.</p>

            <p>So in a few hours I designed and wrote Tipsy, my first iOS app. It’s extremely simple and it’s definitely not setting the world on fire. The App Store has countless tip calculator apps and their usefulness is pretty limited. But I’m super proud of it. I learned so much building this little app that I consider it a success despite the fact that it hasn’t gotten very many downloads.</p>

            <p>Speaking of which, you can download it for free if you want to check it out.</p>
          </div>
          <div />
        </TwoColumns>
      </Section>
    </div>
  </div>
)

export default Tipsy
