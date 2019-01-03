import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import PullQuote from '../../../components/PullQuote'
import {Grid, Column} from '../../../components/ContentGrid'
import {FigCaption} from '../../../components/Figure'
import HeroImage from '../../../components/HeroImage'
import FullWidthContainer from '../../../components/FullWidthContainer'
import Project from '../../../templates/project'

import hero from './climate-hero.png'
import appleWeather from './apple-weather-app.png'
import breakdown from './climate-breakdown-new.png'
import complication from './climate-complication.jpg'

exports.frontmatter = {
  company: 'Personal Project',
  title: "Climate",
  image: './climate-hero.png',
  date: '2018-07-01',
  slug: 'climate'
}

const Climate = () => (
  <Project frontmatter={exports.frontmatter}>
    <div>
      <Section>
        <HeroImage>
          <img src={hero} alt="" />
        </HeroImage>
        <h2>After getting the Apple Watch, I noticed that in my usage the most useful apps were the ones that presented me with information quickly and let me go along with my day. Apps like Calendar, Activity and Weather were the apps that really worked well on the watch. There was one major problem with that: the 1st-party weather app for the Apple Watch leaves a lot to be desired.</h2>
      </Section>
      <Section>
        <Grid>
          <Column width={8}>
            <img src={appleWeather} />
          </Column>
        </Grid>
        <Grid>
          <Column width={3}>
            <FigCaption title="Apple's Weather app">
              The default Weather app, as pictured here, uses three different screens to present the day’s weather information. To switch between them you can either tap or force touch.
            </FigCaption>
          </Column>
          <Column width={4} start={5}>
            <p>I decided that instead of complaining about it on Twitter, I’d do something a bit more productive: I’d make my own app. It seemed like an interesting challenge both from a design and development standpoint.</p>
            <p>If you own an Apple Watch, you know exactly what I’m talking about in regards to the stock weather app.</p>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={4}>
            <p>Needless to say, this is a very odd design choice. Putting the information around a circle means that there’s very little space to fit the necessary information, so they had to split it up across three views. In a device where the time spent should be counted in fractions, switching between these view takes what seems like an eternity.</p>
            <p>I decided that instead of complaining about it on Twitter, I’d do something a bit more productive: I’d make my own app. What I decided to do with my app was simplify the interaction model and putting things you want to know immediately at the top and what’s happening later at the bottom.</p>
          </Column>
          <Column width={4}>
            <PullQuote>
              I decided to simplify the interaction model of the app and put things you want to know immediately at the top and what’s happening later at the bottom.
            </PullQuote>
          </Column>
        </Grid>
      </Section>
      <Section>
        <FullWidthContainer>
          <img src={complication} />
        </FullWidthContainer>
      </Section>
      <Section>
        <Grid>
          <Column width={4} start={5}>
            <img src={breakdown} alt=""/>
          </Column>
          <Column width={4} start={1}>
            <h2>Here’s a breakdown of the sections of the app</h2>
            <ol>
              <li>The first section is all about what is happening right now. At a glance, you get the temperature, the condition, as well as a text description of what’s happening. I love being able to read a human-friendly description of the situation.</li>
              <li>The second section is about what is happening in the next few hours. Want to know how warm it’s going to be when you go out for lunch? The app’s got you covered.</li>
              <li>Finally, the third section is about what the forcast is going to be during the week. You can drill down to a specific day to get more information if you want to know more details.</li>
            </ol>
          </Column>
        </Grid>
      </Section>
    </div>
  </Project>
)

export default Climate
