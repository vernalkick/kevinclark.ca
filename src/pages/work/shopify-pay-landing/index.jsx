import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'
import Section from '../../../components/Section'
import Figure from '../../../components/Figure'
import {FigCaption} from '../../../components/Figure'
import PullQuote from '../../../components/PullQuote'
import { Media } from '../../../components/Media'
import ContentGrid from '../../../components/ContentGrid'

const Half = styled.div`
  ${Media.desktop`
    max-width: 55%;
  `}
`

import hero from "./shopify-pay-hero.png"

exports.frontmatter = {
  title: "Shopify Pay Landing Page",
  image: './gift-cards-thumb.png',
  date: '2017-05-01',
  slug: 'shopify-pay-landing'
}

const ShopifyPayLanding = () => (
  <div>
    <MainPageHeader preTitle='Shopify'>Shopify Pay Landing Page</MainPageHeader>
    <div>
      <Section>
        <img src={hero} alt=""/>
      </Section>
      <Section>
        <PullQuote>Shopify Pay is the first buyer-facing product Shopify created. It’s goal at the time was to simplify and streamline the tedious parts of shopping to let people focus on the parts that they love.</PullQuote>
        <Half>
          <p>In practice, Shopify Pay allows buyers to opt in to save their information at checkout and be able to automatically reuse it on any other Shopify store. While the core concept is fairly simple to grasp, we thought it would be helpful to provide a page for people to get all of the information on how it works.</p>
        </Half>
      </Section>
      <Section>
        <ContentGrid columns={3}>
          <ContentGrid.Column number={2}>
            <h2>Our Goals</h2>
            <ol>
              <li><strong>To show people how simple the experience is</strong> and set the right expectation for what will happen at their next purchase.</li>
              <li><strong>Reassure people of the trustworthiness of Shopify</strong> as the guardian of people’s information. After all for many people, this is the first time they heard of Shopify. It was really important for us to give an explanation of who we are and what we do.</li>
              <li>The last goal was to <strong>give people a place to opt-out</strong> that was front and center. We didn’t want to bury it or hide it. If you’ve signed up by mistake or change your mind, it should be as easy to opt-out as it was to opt-in.</li>
            </ol>
          </ContentGrid.Column>
          <ContentGrid.Column number={3}>
            <FigCaption title="Note" decoration={true}>
             Having clarity in your goals from the very start makes it so much easier to execute on the solution effectively. User research was really useful in deepening our understanding of our varied user base.
            </FigCaption>
          </ContentGrid.Column>
        </ContentGrid>
      </Section>
      <Section>
        <ContentGrid columns={2}>
          <ContentGrid.Column>
            <p><strong>A big question we had</strong> was “should we include the standard Shopify navigation?” While we all liked the consistency of including the same navigation as the rest of the website we ultimately decided to not include it. Why? Because the audience of this website are buyers, not merchants. Including things like our pricing page in the navigation here would’ve added more confusion than clarity. It’s a great example of how consistency is a not a goal in and of itself. In this case, consistency was working against our goal of creating a simple and clear message for our intended audience.</p>
          </ContentGrid.Column>
          <ContentGrid.Column>
            <PullQuote>In this case, consistency was working against our goal of creating a simple and clear message for our intended audience.</PullQuote>
          </ContentGrid.Column>
        </ContentGrid>
      </Section>
    </div>
  </div>
)

export default ShopifyPayLanding
