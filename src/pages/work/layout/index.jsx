import React from 'react'
import Section from '../../../components/Section'
import {Grid, Column} from '../../../components/ContentGrid'
import HeroImage from '../../../components/HeroImage'
import Project from '../../../templates/project'
import IpadPro from '../../../components/iPadPro'
import styled from 'styled-components'
import { device } from '../../../components/Media'

import heroLight from './layout-light.png'
import heroDark from './layout-dark.png'
import pictures from './pictures.png'

export const frontmatter = {
  company: 'Personal Project',
  title: "Layout",
  image: './thumbnail.png',
  date: '2015-10-27',
  slug: 'layout',
  link: "https://layout.fm"
}

const SecondColumn = styled(Column)`
  @media ${device.desktopUp} {
    margin-top: -57%;
  }
`

const Layout = ({location}) => (
  <Project frontmatter={frontmatter} location={location}>
    <div>
      <Section>
        <HeroImage>
          <IpadPro>
            <picture>
              <source srcset={heroDark} media="(prefers-color-scheme: dark)" />
              <img src={heroLight} alt="Layout website screenshot" />
            </picture>
          </IpadPro>
        </HeroImage>
        </Section>
        <Section>
        <Grid>
          <Column width={5}>
            <h2>Layout is a podcast about design, technology and everything else. I’ve been lucky to be doing this podcast every week with my friend <a href="https://twitter.com/rafahari">Rafa</a>.</h2>
          </Column>
        </Grid>
        <Grid>
          <Column width={4}>
            <p>For as long as I can remember I’ve been a fan of podcasts. I first started by listening to <a href="https://5by5.tv/talkshow">The Talk Show</a> on <a href="https://5by5.tv">5by5</a> and quickly discovered, <a href="https://5by5.tv/buildanalyze">Build & Analyse</a>, <a href="https://5by5.tv/hypercritical">Hypercritical</a>, <a href="https://podcasts.apple.com/us/podcast/irl-talk/id732909708">Geek Friday</a> and the many other shows on the network. To say podcasts were a revelation for me is a bit of an understatement.</p>
            
            <p>These people were smart, funny and nerdy in all of the right ways. And I felt like podcasts were able to get in depth in a way very few other mediums could. It would be cool to do that someday too, I thought.</p>
          </Column>
           <SecondColumn width={4} start={5}>
            <img src={pictures} alt="Pictures of Layout stickers" />
            <p>A few months later, Rafa reached out to me to know if I’d be interested in doing a podcast with him. We barely knew each other back then. <a href="https://twitter.com/rafahari">Rafa</a> was just someone I followed on Twitter. And he lived in Portugal. I couldn’t miss this opportunity to give this thing a shot.</p>
            
            <p>We decided we would record 3 episodes in secret and if either one of us didn’t like the result, we would stop there and never tell anyone that we’d even had the idea of doing a show together.</p>
            
            <p>5 years later, Layout is still going strong and I consider Rafa to be one of my best friends. It’s been a wild ride and allowed me to meet so many incredible people.</p>
          </SecondColumn>
        </Grid>

      </Section>
      
    </div>
  </Project>
)

export default Layout
