import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Media } from '../../components/Media'
import MainPageHeader from '../../components/MainPageHeader'
import NewFigure from '../../components/NewFigure'
import {FigCaption} from '../../components/Figure'

import AboutItem from './AboutItem'

import profilePicture from '../../assets/images/profile.jpg'

const MainColumn = styled.div`
  grid-column: 2;
`

const Portrait = styled.div`
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

const Lead = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 1rem;

  ${Media.desktop`
    font-size: 36px;
    margin-bottom: 4rem;
  `}
`

const Items = styled.div`
  margin-top: 1.5rem;
`

class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About</title>
        </Helmet>
        <MainPageHeader>
          <h1>About Me</h1>
        </MainPageHeader>
        <Lead>I’m a Design Lead at Shopify, I run the Montreal Design Club, host the Layout podcast and I make iOS apps in my spare time. I live and work in the beautiful city of Montreal in Canada.</Lead>
        <ContentContainer>
          <MainColumn>
            <Portrait>
              <NewFigure>
                <img src={profilePicture} />
                <FigCaption>Image by <a href="https://www.instagram.com/sweetyams/?hl=en">Willem Shepherd</a></FigCaption>
              </NewFigure>
            </Portrait>
            <p>As a Design Lead, I’ve been spending the last few years building product and design teams to make commerce better for everyone. A big part of my work is mentoring the designers I hire and helping them achieve their full potential. While mastery of design tools like Sketch and knowledge of HTML & CSS are what got me where I am today, leadership requires a whole new skill set. Helping others develop their skills really forces me to understand the deeper fundamentals behind the ways I work and the experience has been extremely rewarding so far. And I might be biased, but I truly think I have one of the best product design teams in the world right now.</p>

            <h3>Layout</h3>
            <p>In October 2015, my friend Rafa and I started a design podcast called Layout. We had never met in person at the time, but we knew that we were both huge podcast fans and we wanted to give it a go. To see if we would enjoy recording a podcast together every week, we decided to record a few test episodes before telling anyone about it. If either of us didn’t want to do it anymore, we would back away and never tell anyone. We loved doing these test episodes and announced the podcast soon after. We’ve been podcasting every week together since then. We now have over 120 episodes, we’ve joined the Spec network, we sold stickers to listeners all around the world (even in South Korea!) and have been sponsored by companies like InVision, Atomic, Shopify and more. The thing I enjoy the most about podcasting is the intimate connection it gives us with every single one of our listeners. They welcome our voices into their homes and they inform the show with each message they send us. It’s been a real joy to get to meet quite a few of our listeners in the last few years and I hope I get to meet tons more in the future.</p>

            <h3>Montreal Design Club</h3>
            <p>In June 2013, I had just started as the only designer at Shopify (in Montreal) and had the itch to connect with other designers. I decided to organize Montreal’s very first Dribbble Meetup. We got about 5 or 6 attendees, but just knowing that there were other people made me incredibly excited. Since then, I’ve graduated the Dribbble Meetup to the Montreal Design Club, built a fantastic team around it and we know have a 200+ people that are actively participating in our monthly events. I’ve been really thankful to be able to give back to the community and give a voice to people you don’t often hear from.</p>

            <h3>How did I get started</h3>
            <p>Now you might be wondering “how did he get started with all of this?” Here’s how. Growing up I had always been creative: I would make my own greeting cards in a software called The Printshop, I went to day camps where you learned things like oil painting, and how to play the violin. Without realizing it, I couldn’t help but integrate design into every part of my life. I would spend hours finding the right font to use to label my school supplied, I would carefully typeset my essays (and always ignore the requirement of using Times New Roman for everything), I would go to town designing crazy transitions and animations in keynote for my presentations. I even had a radio show in High School for which I designed countless posters (that’s how I learned Illustrator). At one point, a friend of mine showed me how to make a simple website using this WYSIWYG tool. My mind was blown and from that point on I spent all of my spare time making and designing websites. As a self-taught designer, I never saw a separation between design and front-end. I had to build everything I designed otherwise it would stay a static image on my computer. I learned how to get good at HTML/CSS by reading tons and tons of articles, books, and YouTube videos. I got my first real paid gig after convincing my boss at the restaurant I worked for that their website sucked and that it would be a better use of their money to pay me to redesign it. They gave me a chance and I delivered. After that, word of mouth spread pretty quickly and I got lots of freelance projects and eventually joined Shopify where I still am today more than 5 years later.</p>
          </MainColumn>
          <Sidebar>
            <InfoBlock>
              <h4>Contact</h4>
              <p>If you'd like to talk about anything, don't hesitate to email me. </p>
            </InfoBlock>
            <InfoBlock>
              <h4>Work Inquiries</h4>
              <p>I’m really happy at Shopify, I’m not looking for a new gig anytime soon. I’m interested in parnerships for side projects though.</p>
            </InfoBlock>
            <InfoBlock>
              <h4>Featured in</h4>
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
