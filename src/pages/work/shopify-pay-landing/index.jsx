import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import { FigCaption } from '../../../components/Figure'
import PullQuote from '../../../components/PullQuote'
import IpadPro from '../../../components/iPadPro'
import { Media } from '../../../components/Media'
import { Grid, Column } from '../../../components/ContentGrid'
import HeroImage from '../../../components/HeroImage'
import NewFigure from '../../../components/NewFigure'
import Project from '../../../templates/Project'

import heroIpad from "./shopify-pay-hero-ipad.png"
import announcement from "./on-stage-announcement.jpg"
import unite from "./unite-images.png"
import sketch from "./sketch-blob.png"
import landingPage from "./shopify-pay-landing-page.png"
import video from "./shopify-pay-video-2.mp4"

exports.frontmatter = {
  company: "Shopify",
  title: "Shopify Pay Landing Page",
  image: './shopify-pay-thumb.png',
  date: '2017-05-01',
  slug: 'shopify-pay-landing'
}

const ShopifyPayLanding = () => (
  <Project frontmatter={exports.frontmatter}>
    <div>
      <Section>
        <HeroImage>
          <IpadPro>
            <video src={video} autoPlay />
          </IpadPro>
        </HeroImage>
        <Grid>
          <Column width={2}>
            <FigCaption title="Photo Credit">
             Thanks to Facebook for providing these hands to use in our designs
            </FigCaption>
          </Column>
          <Column start={4} width={5}>
            <h2>Shopify Pay is the first buyer-facing product Shopify created to simplify and streamline the tedious parts of shopping to let people focus on the parts that they love.</h2>
          </Column>
        </Grid>
        <Grid>
          <Column start={4} width={4}>
            <p>In practice, Shopify Pay allows buyers to opt in to save their information at checkout and be able to automatically reuse it on any other Shopify store. While the core concept is fairly simple to grasp, we thought it would be helpful to provide a page for people to get all of the information on how it works.</p>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={4}>
            <h2>Our Goals</h2>
            <ol>
              <li><strong>To show people how simple the experience is</strong> and set the right expectation for what will happen at their next purchase.</li>
              <li><strong>Reassure people of the trustworthiness of Shopify</strong> as the guardian of people’s information. After all for many people, this is the first time they heard of Shopify. It was really important for us to give an explanation of who we are and what we do.</li>
              <li>The last goal was to <strong>give people a place to opt-out</strong> that was front and center. We didn’t want to bury it or hide it. If you’ve signed up by mistake or change your mind, it should be as easy to opt-out as it was to opt-in.</li>
            </ol>
          </Column>
          <Column start={5} width={4}>
            <img src={unite} />
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column start={4} width={4} align="end">
            <p><strong>A big question we had</strong> was “should we include the standard Shopify navigation?” While we all liked the consistency of including the same navigation as the rest of the website we ultimately decided to not include it. Why? Because the audience of this website are buyers, not merchants. Including things like our pricing page in the navigation here would’ve added more confusion than clarity. It’s a great example of how consistency is a not a goal in and of itself. In this case, consistency was working against our goal of creating a simple and clear message for our intended audience.</p>
          </Column>
          <Column start={1} width={3}>
            <NewFigure isPortrait={true}>
              <img src={sketch} />
            </NewFigure>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column start={5} width={5}>
            <PullQuote>In this case, consistency was working against our goal of creating a simple and clear message for our intended audience.</PullQuote>
          </Column>
        </Grid>
      </Section>
    </div>
  </Project>
)

export default ShopifyPayLanding
