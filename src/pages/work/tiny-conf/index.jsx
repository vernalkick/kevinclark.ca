import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import { Grid, Column } from '../../../components/ContentGrid'
import { FigCaption } from '../../../components/Figure'

import hero from './tiny-conf-hero.png'

exports.frontmatter = {
  title: "Tiny Conf",
  image: './tiny-conf-thumb.png',
  date: '2018-04-01',
  slug: 'tiny-conf'
}

const TinyConf = () => (
  <div>
    <MainPageHeader>Tiny Conf</MainPageHeader>
    <div>
      <Section>
        <img src={hero} alt=""/>
      </Section>
      <Section>
        <Grid>
          <Column width={2}>
            <FigCaption title="Note" decoration={true}>The conference never really happened, but we all had some fun thinking of how we would go about organizing the whole thing.</FigCaption>
          </Column>
          <Column start={3} width={4}>
            <p><strong>A few months ago,</strong> a couple of coworkers decided to organize a conference. At the time, they weren’t really sure how the conference would evolve, but they knew a few things: they wanted an intimate conference that would inspire people instead of focusing on technical challenges.</p>
            <p>I quickly made this landing page to allow people to sign up before the rest of the details are figured out. I played with a few concepts, but eventually settled on this fake lanyard. It instantly conveyed that this was a conference and allow us to use playful animations to make the page come to life.</p>
            <p>One of my favorite little details is when you subscribe to the newsletter, the lanyard flips over to reveal more information. It was my first time playing with perspective and 3D elements in CSS, so I learned a lot.</p>
          </Column>
        </Grid>
      </Section>
    </div>
  </div>
)

export default TinyConf
