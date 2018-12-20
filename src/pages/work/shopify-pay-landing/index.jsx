import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import Figure from '../../../components/Figure'
import {FigCaption} from '../../../components/Figure'
import PullQuote from '../../../components/PullQuote'
import { Media } from '../../../components/Media'
import { Grid, Column } from '../../../components/ContentGrid'

import heroIpad from "./shopify-pay-hero-ipad.png"
import announcement from "./on-stage-announcement.jpg"

exports.frontmatter = {
  title: "Shopify Pay Landing Page",
  image: './shopify-pay-thumb.png',
  date: '2017-05-01',
  slug: 'shopify-pay-landing'
}

const FullWidthContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`

const ShopifyPayLanding = () => (
  <div>
    <MainPageHeader preTitle='Shopify'>Shopify Pay Landing Page</MainPageHeader>
    <div>
      <Section>
        <img src={heroIpad} alt=""/>
      </Section>
      <Section>

        <Grid>
          <Column width={6}>
            <PullQuote>Shopify Pay is the first buyer-facing product Shopify created. It’s goal at the time was to simplify and streamline the tedious parts of shopping to let people focus on the parts that they love.</PullQuote>
          </Column>
          <Column width={4}>
            <p>In practice, Shopify Pay allows buyers to opt in to save their information at checkout and be able to automatically reuse it on any other Shopify store. While the core concept is fairly simple to grasp, we thought it would be helpful to provide a page for people to get all of the information on how it works.</p>
          </Column>
        </Grid>
      </Section>
      <Section>
        <FullWidthContainer>
          <img src={announcement} alt=""/>
        </FullWidthContainer>
      </Section>
      <Section>
        <Grid>
          <Column start={3} width={4}>
            <h2>Our Goals</h2>
            <ol>
              <li><strong>To show people how simple the experience is</strong> and set the right expectation for what will happen at their next purchase.</li>
              <li><strong>Reassure people of the trustworthiness of Shopify</strong> as the guardian of people’s information. After all for many people, this is the first time they heard of Shopify. It was really important for us to give an explanation of who we are and what we do.</li>
              <li>The last goal was to <strong>give people a place to opt-out</strong> that was front and center. We didn’t want to bury it or hide it. If you’ve signed up by mistake or change your mind, it should be as easy to opt-out as it was to opt-in.</li>
            </ol>
          </Column>
          <Column start={7} width={2}>
            <FigCaption title="Note" decoration={true}>
             Having clarity in your goals from the very start makes it so much easier to execute on the solution effectively. User research was really useful in deepening our understanding of our varied user base.
            </FigCaption>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={4}>
            <p><strong>A big question we had</strong> was “should we include the standard Shopify navigation?” While we all liked the consistency of including the same navigation as the rest of the website we ultimately decided to not include it. Why? Because the audience of this website are buyers, not merchants. Including things like our pricing page in the navigation here would’ve added more confusion than clarity. It’s a great example of how consistency is a not a goal in and of itself. In this case, consistency was working against our goal of creating a simple and clear message for our intended audience.</p>
          </Column>
          <Column start={6} width={3}>
            <PullQuote>In this case, consistency was working against our goal of creating a simple and clear message for our intended audience.</PullQuote>
          </Column>
        </Grid>
      </Section>
    </div>
  </div>
)

export default ShopifyPayLanding
