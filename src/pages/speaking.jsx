import React from 'react'
import Link from 'gatsby-link'
import MainPageHeader from '../components/MainPageHeader'
import ButtonLink from '../components/ButtonLink'
import Event from '../components/Event'
import styled from 'styled-components'
import { Media } from '../components/Media'

const Lead = styled.p`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  hyphens: none;
  max-width: 880px;
`

const Content = styled.div`
  margin-bottom: 3rem;

  ${Media.desktop`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4.5rem;
  `}
`

const Title = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
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
      <div>
        <MainPageHeader>Speaking</MainPageHeader>
        <Lead>I speak about the intersection between design and technology, building design teams, growing as a leader, creativity and many more.</Lead>
        <Content>
          <div>
            <Title>Upcoming events</Title>
            <p>I currently have no upcoming events, but I would love to come to your conference or meetup.</p>
            <ButtonLink to='mailto:kevin@kevinclark.ca'>Contact Me</ButtonLink>
          </div>
          <div>
            <Title>Past events</Title>
            {events.map(event =>
              <Event title={event.title} description={event.description} url={event.url} year={event.year} />
            )}
          </div>
        </Content>
      </div>
    )
  }
}

export default SpeakingPage;
