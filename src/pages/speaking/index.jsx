import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../layouts/layout'
import MainPageHeader from '../../components/MainPageHeader'
import Button from '../../components/Button'
import Event from '../../components/Event'
import styled from 'styled-components'
import { device } from '../../components/Media'
import { Grid, Column } from '../../components/ContentGrid'
import Tweet from '../../components/Tweet'
import Section from '../../components/Section'
import Talk from '../../components/Talk'

import slide1 from './dark-patterns-slide-1.png'
import slide2 from './dark-patterns-slide-2.png'
import robert from './robert.jpeg'
import thorsten from './thorsten.jpg'
import antifragile from './antifragile.jpg'
import darkpatterns from './darkpatterns.jpg'
import onStage from './on-stage.jpg'


const Title = styled.h2`
  margin-bottom: 1em;
`

const Hero = styled.div`
  max-width: none;
  margin-left: -1rem;
  width: calc(100% + 2rem);
  overflow: hidden;

  @media ${device.tabletUp} {
    max-width: 100%;
    margin-left: 0;
    width: auto;
  }

  @media ${device.desktopUp} {
    overflow: visible;
  }
`

const HeroImage = styled.img`
  margin-top: -25%;
  margin-bottom: -40%;

  @media ${device.desktopUp} {
    max-width: none;
    width: 150%;
    margin-top: -9rem;
    margin-bottom: 0;
  }
`



const TweetList = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`

const EventList = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const TalkList = styled.div`
  display: grid;
  grid-gap: 40px;

  @media ${device.tabletDown} {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`

const Content = styled.div`

`

const events = [
  {
    title: 'Montreal Design Club',
    year: '2019',
    description: "A monthly event series highlighting some of the best designers of Montreal.",
    url: 'https://mtldesign.club'
  },
  {
    title: 'UXDX',
    year: '2019',
    description: "The conference that bridges the gap between UX, UI, Dev and Product.",
    url: 'https://2017.mobxcon.com/'
  },
  {
    title: 'Shopify Summit',
    year: '2019',
    description: "Shopify's yearly internal conference, livestreamed across the world. This conference sets the tone for the direction of the company.",
    url: 'https://2017.mobxcon.com/'
  },
  {
    title: 'MOBX Mobile UX Summit',
    year: '2017',
    description: "MOBX is Europe's premier annual conference for mobile User Experience, modern Interaction Design, usable interfaces and successful Product Design.",
    url: 'https://2017.mobxcon.com/'
  },
  {
    title: 'GIANT Conf',
    year: '2016',
    description: "GIANT Conference is a gathering for people who do rad work. Their unique venues and diverse speaker lineups set the tone for GIANT.",
    url: 'http://www.giantux.com/'
  },
  {
    title: 'Great Wide Open',
    year: '2016',
    description: "Great Wide Open is a technical conference exploring open tech and the open web. Attendees can gain knowledge about a variety of topics including UI/UX design, front-end development and more.",
    url: 'http://greatwideopen.org/'
  }
]

class SpeakingPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title>Speaking</title>
        </Helmet>
        <MainPageHeader>
          <h1>Speaking</h1>
        </MainPageHeader>
        <Content>
          <Section>
            <Grid>
              <Column width={3} height={2}>
                <Hero>
                  <HeroImage src={onStage} />
                </Hero>
              </Column>
              <Column width={5} start={1}>
                <h2>I speak about the intersection between design and technology, building design teams, growing as a leader, creativity and many more.</h2>
              </Column>
              <Column width={4} start={1} row={2} align='start'>
                <p>One thing I love about the world of technology is that you have to be continually learning new things. More and more, a big part of my career is sharing with others my process designing experiences used by millions of people. My talks range from inspirational (diving into what motivates us to make things) to more practical (filled with real-world examples and tips that people can apply into their own work). My goal is to give people a good time while hopefully teaching them a thing or two.</p>
                <Button href='mailto:kevin@kevinclark.ca' primary={true}>Get in touch</Button>
              </Column>
            </Grid>
          </Section>

          <Section>
            <Title>What people say about&nbsp;my&nbsp;talks</Title>
            <TweetList>
              <Tweet image={slide1} profile={robert} name="Robert Stulle" username="@robertstulle">
                Great talk by @vernalkick about Dark Patterns. They happen. Sometimes unintentional. Often they backfire.
              </Tweet>
              <Tweet image={slide2} profile={thorsten} name="Thorsten Jonas" username="@dolbydigger">
                &ldquo;Dark patterns can happen, even if you have the best intentions.&rdquo; &mdash; @vernalkick
              </Tweet>
            </TweetList>
          </Section>

          <Section>
            <Title>Past Talks</Title>
            <TalkList>
              <Talk
                title="Antifragile Design"
                image={antifragile}
                description="As designers, we often seek certainty and control. When designing at scale, this is simply not possible. We must learn to thrive in unpredictability. Antifragile Design is about embracing constraints and using them to our advantage in order to create interfaces that adapt to a wide variety of different users, contexts and situations. It’s about managing complexity, so that the users of our products don’t have to."
                slides="https://speakerdeck.com/vernalkick/antifragile-design-great-wide-open"
              />
              <Talk
                title="Defense Against The Dark Patterns"
                image={darkpatterns}
                description="What do you do when you realize you’ve accidentally created a Dark Pattern? This talk is my attempt to understand the systemic causes that lead the world’s most well intentioned teams to design interfaces that trick people. In order to do that, we learn to recognize the different types of dark patterns, understand why they were used and explore strategic ways to avoid them."
                slides="https://speakerdeck.com/vernalkick/defense-against-the-dark-patterns"
              />
            </TalkList>
          </Section>

          <Section>
            <Title>Past events</Title>
            <EventList>
              {events.map(event =>
                <Event title={event.title} description={event.description} url={event.url} year={event.year} />
              )}
            </EventList>
          </Section>
        </Content>
      </Layout>
    )
  }
}

export default SpeakingPage;
