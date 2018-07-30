import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Media } from '../../components/Media'
import MainPageHeader from '../../components/MainPageHeader'

import AboutItem from './AboutItem'

import profilePicture from './profile.jpg'

const MainColumn = styled.div`
  grid-column: 2;
`

const Portrait = styled.img`
  display: block;
  margin-bottom: 1.5rem;

  ${Media.desktop`
    width: 65%;
    float: right;
    margin: 0 -15% 2rem 2rem;
  `}
`

const ContentContainer = styled.div`
  ${Media.desktop`
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 2fr 3fr;
    grid-gap: 5rem;
  `}
`

const Sidebar = styled.div`
  grid-column: 1;
  border-top: 2px solid var(--subdued-elements-color);
  padding-top: 2rem;
  margin-top: 2rem;

  ${Media.desktop`
    margin: 0;
    padding: 0;
    border: none;
  `}
`

const InfoBlock = styled.div`
  ${Media.desktop`
    max-width: 320px;
  `}

  & + & {
    margin-top: 3rem;
  }
`

const InfoTitle = styled.h3`
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0.5rem;
`

const Lead = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 4rem;

  ${Media.desktop`
    font-size: 36px;
  `}
`

const Items = styled.div`
  margin-top: 1.5rem;
`

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <MainPageHeader>About Me</MainPageHeader>
        <Lead>I’m a Design Lead at Shopify, I run the Montreal Design Club, host the Layout podcast and I make iOS apps in my spare time. I live and work in the beautiful city of Montreal in Canada.</Lead>
        <ContentContainer>
          <MainColumn>
            <Portrait src={profilePicture} />
            <p>I’m a Product Designer at Shopify, I run the Montreal Dribbble meetups and I make apps in my spare time. I live and work in the beautiful city of Montreal in Canada.</p>
            <p>I’m just a normal guy who likes making stuff. I’m lucky enough that this passion for crafting and designing experiences also happens to be a job that you can make a good living from. Lately, what really gets me going is creating products. Tools that people can use and interact with. It’s not always the easiest task, but it’s definitely the most rewarding. I also run the Montreal Dribbble Meetups, a great way to get to know the people behind the 300 x 400 shots. We love meeting new people. If you’re in town, don’t forget to say hi!</p>
            <p>I’ve designed things for Bell Media, Busbud, H-Grégoire, OKAM and many more. How did I get there? Hard work? Luck? Probably a bit of both, but I’m currently a product designer at Shopify. We’re completely redefining what it means to run a successful business online (and off!) We’re working hard everyday to make starting your passion project accessible to anyone. It’s a fun challenge.</p>
            <h3>Side Projects</h3>
            <p>In my spare time, I’m dabbling in the world of iOS design and development. Being able to take an idea and execute on it from start to finish is really empowering. Plus, the mobile phone screen is a really interesting medium to experiment with.</p>
            <p>Keep an eye on my Dribbble account to see the behind the scenes of whatever I'm hacking on these days.</p>
          </MainColumn>
          <Sidebar>
            <InfoBlock>
              <InfoTitle>Contact</InfoTitle>
              <p>If you have questions or comments, I encourage you to write me. I get lots of email so I might take a while to reply, but I’ll get there.</p>
            </InfoBlock>
            <InfoBlock>
              <InfoTitle>Work Inquiries</InfoTitle>
              <p>I’m really happy at Shopify, I’m not looking for a new gig anytime soon. I’m interested in parnerships for side projects though.</p>
            </InfoBlock>
            <InfoBlock>
              <InfoTitle>Featured in</InfoTitle>
              <Items>
                <AboutItem title="Infopresse 30 under 30" description="Award" url="https://www.infopresse.com/dossier/2016/10/24/kevin-clark-redefinir-le-monde-du-commerce" />
                <AboutItem title="Design Details" description="Episode 196" url="https://spec.fm/podcasts/design-details/68532" />
                <AboutItem title="The Artboard" description="Episode 3" url="http://www.theartboard.net/episodes/2015/5/26/03-managing-side-projects-with-kevin-clark" />
                <AboutItem title="Typekit blog" description="Feature" url="https://blog.typekit.com/2014/08/01/sites-we-like-kevin-clark-evan-kerrigan-isaac-paavola/" />
                <AboutItem title="Typ.io" description="Feature" url="http://typ.io/s/4cmb" />
              </Items>
            </InfoBlock>
          </Sidebar>
        </ContentContainer>
      </div>
    )
  }
}

export default AboutPage;
