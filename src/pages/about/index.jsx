import React from 'react'
import Layout from '../../layouts/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { device } from '../../components/Media'
import MainPageHeader from '../../components/MainPageHeader'
import NewFigure from '../../components/NewFigure'
import { Caption } from '../../components/TextStyles'

import AboutItem from './AboutItem'

import profilePicture from '../../assets/images/profile.jpg'

const MainColumn = styled.div`
  grid-column: 2;
`

const Portrait = styled.div`
  display: block;
  margin-bottom: 1.5rem;

  @media ${device.mobileLargeUp} {
    width: 65%;
    float: right;
    margin: 0 -15% 2rem 2rem;
  }
`

const ContentContainer = styled.div`
  @media ${device.tabletUp} {
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: 3fr 6fr;
    grid-gap: 3rem;
  }

  @media ${device.desktopUp} {
    grid-template-columns: 2fr 3fr;
    grid-gap: 5rem;
  }
`

const Sidebar = styled.div`
  grid-column: 1;

  @media ${device.mobileLarge} {
    column-count: 2;
    column-gap: 3rem;
  }

  @media ${device.mobileLargeDown} {
    border-top: 2px solid var(--subdued-elements-color);
    padding-top: 2rem;
    margin-top: 2rem;
  }
`

const SidebarContent = styled.div`
  position: sticky;
  top: 3rem;
`


const InfoBlock = styled.div`
  break-inside: avoid;

  @media ${device.desktopUp} {
    max-width: 320px;
  }

  & + & {
    margin-top: 3rem;
  }
`

const Lead = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media ${device.tabletUp} {
    margin-bottom: 2rem;
  }

  @media ${device.desktopUp} {
    margin-bottom: 4rem;
  }
`

const Items = styled.div`
  margin-top: 1.5rem;
`

const features = [
  {
    title: "Rooki.Design",
    desc: "Interview",
    url: "https://www.rooki.design/interviews/kevin-clark",
  },
  {
    title: "Infopresse 30 under 30",
    desc: "Award",
    url: "https://www.infopresse.com/dossier/2016/10/24/kevin-clark-redefinir-le-monde-du-commerce",
  },
  {
    title: "Design Details",
    desc: "Episode 196",
    url: "https://spec.fm/podcasts/design-details/68532",
  },
  {
    title: "The Artboard",
    desc: "Episode 3",
    url: "http://www.theartboard.net/episodes/2015/5/26/03-managing-side-projects-with-kevin-clark",
  },
  {
    title: "Typekit blog",
    desc: "Feature",
    url: "https://blog.typekit.com/2014/08/01/sites-we-like-kevin-clark-evan-kerrigan-isaac-paavola/",
  },
  {
    title: "Typ.io",
    desc: "Feature",
    url: "http://typ.io/s/4cmb",
  }
]

class AboutPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
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
                <img src={profilePicture} alt="Kevin Clark" />
                <Caption>
                  Picture by <a href="https://www.instagram.com/sweetyams/?hl=en">Willem Shepherd</a>
                </Caption>
              </NewFigure>
            </Portrait>

            <p>I’ve been spending the last few years building product design teams to make commerce better for everyone and bring more entrepreneurship into the world. I currently lead the Checkout UX team where we build experiences used by millions of people every year. A big part of my work is to figure out how to make buying things online as enjoyable as possible and rally the team towards that vision. Another important part of what I do is help designers achieve their full potential through feedback and mentorship.</p>

            <p>I co-host the <a href="https://layout.fm">Layout</a> podcast with my friend <a href="https://rafa.design">Rafael Conde</a>. The thing I enjoy the most about podcasting is the intimate connection it gives us with every single one of our listeners all around the world (even in South Korea!) They’re an important part of what makes our show successful and I always try to meet as many as possible whenever I’m traveling.</p>


            <p>I’m also the founder of the <a href="https://mtldesign.club">Montréal Design Club</a>: an event series and community for designers of all kind in Montreal. Each month, <a href="https://www.instagram.com/p/BqVx6W9Aa9Z/">my team and I</a> put together an event featuring two speakers with a unique perspective who can teach us something new. While it started small, we now have over 200+ people that are actively engaged in the community. It’s incredibly rewarding to see people come back each time and tell all of their friends.</p>

            <h4>About this website</h4>
            <p>This website is powered by <a href="https://www.gatsbyjs.org">Gatsby</a> and hosted on <a href="https://www.netlify.com">Netlify</a>. The type is set in <a href="https://commercialtype.com/catalog/graphik">Graphik by Commercial Type</a> and <a href="https://www.grillitype.com/typeface/gt-pressura">GT Pressura Mono by Grilli Type</a>.</p>

{/*
            <h4>How I got started</h4>
            <p>Growing up, I couldn’t help but integrate design into every part of my life without realizing it. I would carefully typeset my essays (and always ignore the requirement of using Times New Roman for everything) and I was notorious for my intensive usage of animations in keynote for my presentations. I even had a radio show in High School for which I designed countless posters (that’s how I learned Illustrator). At one point, a friend of mine showed me a service that let you make simple websites using their WYSIWYG interface. It sounds a bit silly now, but I was blown away that something I made on my computer could be seen by anyone in the world. From that point on, all I could think about was making websites. That’s what got me into design and programming. I would read every article I could find, watch every video I could get my hands on and buy every book I could afford. I got my first real paid gig after convincing my boss at the restaurant I worked for that their website sucked and that it would be a better use of their money to pay me to redesign it. It worked. They gave me a chance and I delivered. After that, word of mouth started spreading and I started to get freelance projects. Nothing fancy, but I treated every project like my life depended on it. Did a few more projects, learned more about running a business, did some contract work for agencies, helped a few startups. Eventually, someone from Shopify asked me if I wanted to join them on this crazy adventure.</p> */}
          </MainColumn>
          <Sidebar>
            <SidebarContent>
              <InfoBlock>
                <h4>Contact</h4>
                <p>If you'd like to talk about anything, please don't hesitate to <a href="mailto:kevin@kevinclark.ca">email me</a>.</p>
              </InfoBlock>
              <InfoBlock>
                <h4>Work Inquiries</h4>
                <p>I’m not currently taking any new work at the moment.</p>
              </InfoBlock>
              <InfoBlock>
                <h4>Featured in</h4>
                <Items>
                  {features.map(feature =>
                    <AboutItem title={feature.title} description={feature.desc} url={feature.url} />
                  )}
                </Items>
              </InfoBlock>
            </SidebarContent>
          </Sidebar>
        </ContentContainer>
      </Layout>
    )
  }
}

export default AboutPage;
