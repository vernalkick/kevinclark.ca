import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../../layouts/layout'
import MainPageHeader from '../../components/MainPageHeader'
import ButtonLink from '../../components/ButtonLink'
import Event from '../../components/Event'
import styled from 'styled-components'
import { Media } from '../../components/Media'
import { Grid, Column } from '../../components/ContentGrid'
import Tweet from '../../components/Tweet'
import Section from '../../components/Section'

import slide1 from './dark-patterns-slide-1.png'
import slide2 from './dark-patterns-slide-2.png'
import robert from './robert.jpeg'
import thorsten from './thorsten.jpg'
import antifragile from './antifragile.jpg'
import darkpatterns from './darkpatterns.jpg'
import onStage from './on-stage.jpg'

const Lead = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  hyphens: none;
  color: var(--primary-text-color);
  margin-top: 1rem;
  margin: 0;

  ${Media.desktop`
    font-size: 36px;
  `}
`

const TalkImage = styled.img`
  box-shadow: 0 18px 43px -10px rgba(0,0,0,0.15);
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1em;

  ${Media.desktop`
    font-size: 36px;
  `}
`

const Hero = styled.div`
  max-width: none;
  margin-left: -1rem;
  width: calc(100% + 2rem);
  overflow: hidden;

  ${Media.tablet`
    max-width: 100%;
    margin-left: 0;
    width: auto;
  `}

  ${Media.desktop`
    overflow: visible;
  `}
`

const HeroImage = styled.img`
  margin-top: -25%;
  margin-bottom: -40%;

  ${Media.desktop`
    max-width: none;
    width: 150%;
    margin-top: -9rem;
    margin-bottom: 0;
  `}
`

const More = styled.a`
  font-size: 18px;
  font-weight: 500;
  margin-top: 1rem;
  display: block;
`

const EventList = styled.div`
  ${Media.desktop`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

const Content = styled.div`

`

const events = [
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
                <Lead>I speak about the intersection between design and technology, building design teams, growing as a leader, creativity and many more.</Lead>
              </Column>
              <Column width={4} start={1} row={2} align='start'>
                <p>One thing I love about the world of technology is that you have to be continually learning new things. More and more, a big part of my career is sharing with others my process designing experiences used by millions of people. My talks range from inspirational (diving into what motivates us to make things) to more practical (filled with real-world examples and tips that people can apply into their own work). My goal is to give people a good time while hopefully teaching them a thing or two.</p>
                <ButtonLink to='mailto:kevin@kevinclark.ca'>Get in touch</ButtonLink>
              </Column>
            </Grid>
          </Section>

          <Section>
            <Title>What people say about my talks</Title>
            <Grid>
              <Column width={4}>
                <Tweet image={slide1} profile={robert} name="Robert Stulle" username="@robertstulle">
                  Great talk by @vernalkick about Dark Patterns. They happen. Sometimes unintentional. Often they backfire.
                </Tweet>
              </Column>
              <Column width={4}>
                <Tweet image={slide2} profile={thorsten} name="Thorsten Jonas" username="@dolbydigger">
                  &ldquo;Dark patterns can happen, even if you have the best intentions.&rdquo; &mdash; @vernalkick
                </Tweet>
              </Column>
            </Grid>
          </Section>

          <Section>
            <Title>Past Talks</Title>
            <Grid>
              <Column width={4}>
                <TalkImage src={antifragile} />
              </Column>
              <Column width={4}>
                <h3>Antifragile Design</h3>
                <p>As designers, we often seek certainty and control. When designing at scale, this is simply not possible. We must learn to thrive in unpredictability. Antifragile Design is about embracing constraints and using them to our advantage in order to create interfaces that adapt to a wide variety of different users, contexts and situations. It’s about managing complexity, so that the users of our products don’t have to.</p>
                <More href="https://speakerdeck.com/vernalkick/antifragile-design-great-wide-open">View slides on Speaker Deck →</More>
              </Column>
            </Grid>
            <Grid>
              <Column width={4}>
                <TalkImage src={darkpatterns} />
              </Column>
              <Column width={4}>
                <h3>Defense Against The Dark Patterns</h3>
                <p>What do you do when you realize you’ve accidentally created a Dark Pattern? This talk is my attempt to understand the systemic causes that lead the world’s most well intentioned teams to design interfaces that trick people. In order to do that, we learn to recognize the different types of dark patterns, understand why they were used and explore strategic ways to avoid them.</p>
                <More href="#">View slides on Speaker Deck →</More>
              </Column>
            </Grid>
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
