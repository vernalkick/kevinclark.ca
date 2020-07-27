import React from 'react'
import styled, {keyframes} from 'styled-components'
import Section from '../../../components/Section'
import HeroImage from '../../../components/HeroImage'
import {Grid, Column} from '../../../components/ContentGrid'
import {CaptionTitle, Caption} from '../../../components/TextStyles'
import PullQuote from '../../../components/PullQuote'
import FullWidthContainer from '../../../components/FullWidthContainer'
import NewFigure from '../../../components/NewFigure'
import Project from '../../../templates/project'

import hero from './osp-hero.png'
import customer_journey from './customer-journey.png'
import user_research from './user-research.png'
import timeline from './timeline.png'
import first_card from './first-card.png'
import timeline_animation from './timeline-animation.gif'
import card_explorations_image from './card-explorations.png'
import flow from './flow.png'
import full_flow from './full-flow.jpg'
import iphone from './silver-iphone-frame.png'
import mobile from './mobile.gif'
import plan from './plan.png'

export const frontmatter = {
  company: 'Shopify',
  title: "Order Status Page",
  image: './osp-hero.png',
  date: '2018-06-01',
  slug: 'order-status-page'
}

const FirstCard = styled.img`
  width: 75%;
  filter: drop-shadow(0 18px 43px rgba(0,0,0,.15));
`

const TimelineAnimation = styled.img`
  width: 80%;
  filter: drop-shadow(0 18px 43px rgba(0,0,0,.15));
  margin-left: 15%;
  transform: translateY(-50%);
  border-radius: 3%/16%;
`

const CardContainer = styled.div`
  overflow: hidden;
  position: relative;
`

const translate = keyframes`
  from {
    transform: translateX(0%);
  }
  
  to {
    transform: translateX(-100%);
  }
`;

const CardsFirst = styled.img`
  animation: ${translate} 80s infinite linear;
`

const CardsSecond = styled.img`
  animation: ${translate} 80s infinite linear;
  position: absolute;
  top: 0;
  left: 100%;
`



const CardExplorations = styled.div`
  width: 100%;
  padding-bottom: 50.64%;
  background: url('${card_explorations_image}');
  background-size: contain;
  animation: ${translate} 80s infinite linear;
`

const IphoneContainer = styled.div`
  position: relative;
  filter: drop-shadow(0 18px 43px rgba(0,0,0,.15));
`

const Iphone = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const IphoneScreen = styled.img`
  max-width: none;
  position: absolute;
  top: 13%;
  /* left: 7.5%;
  width: 85.25%; */
  width: 100%;
  height: 74.8%;
  object-fit: contain;
`


const OrderStatusPage = ({location}) => (
  <Project frontmatter={frontmatter} location={location}>
    <div>
      <Section>
        <HeroImage>
          {/* <img src={hero} alt="Order status page" /> */}
        </HeroImage>
        <Grid>
          <Column width={6}>
            <h2>Not too long after shipping Checkout, we decided to shift our focus to the post purchase experience, aka what happens once you complete your order. This project also served as a great way to experiment with our process.</h2>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={3} start={1}>
            <NewFigure>
              {/* <img src={customer_journey} alt="Customer journey map" /> */}
              <Caption>Thanks to <a href="https://twitter.com/cynthiasavard">Cynthia Savard Saucier</a> for introducing me to this method and leading the session.</Caption>
            </NewFigure>
          </Column>
          <Column width={4} start={5}>
            <h2>User journey</h2>
            <p>We started off by locking ourselves in a room in our office with a bunch of sharpies and a stack of post-its. Our goal for this exercise was to uncover different problems that occur once the order is placed.</p>
            <p>So we started listing off everything that could happen: you receive a confirmation email, you maybe archive it, then you might forget about your order for a while. Now, maybe you remember you still haven’t received your package and you start wondering what happened to it. So you search your emails, find the original email and maybe contact the merchant to ask when your package is supposed to arrive.</p>
            <p>This is just one of the many scenarios we uncovered.</p>
            <p>One thing we noticed was that there were moments when the experience was actually quite good, like the excitement you have once you’ve completed your order, and others that were not so great like not knowing when you’re going to receive your order. So we then went in and thought of potential solution to turn a bad experience into a good one and a good experience into an even better one.</p>
            <p>That was a fun process for me. Dreaming up ideas freely without even trying to make everything fit together yet. We could make sense of everything later. By not sitting down in front of a computer right away, it helped not getting attached to one particular solution and discuss them all on equal footing.</p>
          </Column>
          <Column width={4} start={1} align='end'>
            <PullQuote>Not sitting down in front of a computer right away helped us avoid getting attached to one particular solution and allowed us to discuss them all on equal footing.</PullQuote>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={3} start={6}>
            <NewFigure>
              {/* <img src={user_research} alt="User research" /> */}
              <Caption>Shout out to <a href="http://delshimy.com">Dalia El-Shimy</a> for creating this amazing poster with all of the research findings.</Caption>
            </NewFigure>
          </Column>
          <Column width={4} start={1}>
            <h2>Reality check, aka user-research</h2>
            <p>At that point, we got results from the research that was done by our UX research team. Dalia, our rockstar researcher, likes to experiment with different ways to present results so this time she made a big poster with all the findings. That was a great way to bring awareness to the project to the whole office, while making the information easier to understand. That’s the moment where we go back to our room full of post-its and see what we got right and what we got wrong. It allows us to calibrate what we think with what actual users think the problems are.</p>
            <p>We also pull in relevant data to help us understand the full picture. We looked at things like the percentage of recurring customers, percentage of stores who customize the order receipt, etc.</p>
            <p>From that came a big problem and one opportunity:</p>
            <p>Merchants spend an incredible amount of time replying to emails about the status of their customers order. By bringing more clarity in the shipping process, we could give merchants more time to focus on their business and increase customers’ trust in the merchants and in turn increase the likelihood of them returning to that store later.</p>
            <p>That’s how the Order Status Page project was born.</p>
          </Column>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Column width={4} start={1}>
            <h2>The plan</h2>
            <p>After many discussions, here’s what we ended up with: have a page where customers can see the shipping status updated in real-time with estimated delivery date and easy-to-find contact information.</p>
            <p>We also came up with a series of design principles that would help us determine if the project was successful:</p>
          </Column>
          <Column width={4}>
            {/* <img src={plan} alt="Plan" /> */}
          </Column>
        </Grid>
        <Grid>
          <Column width={2}>
            <CaptionTitle>Accuracy and consistency</CaptionTitle>
            <Caption>
              Order status information should be consistent across any channels, internal or external, from which it may be retrieved.
            </Caption>
          </Column>
          <Column width={2}>
            <CaptionTitle>Clarity and transparency</CaptionTitle>
            <Caption>
              Customers should be able to quickly glean the status of their order, and understand all pertinent information, both in a lexical and semantic sense.
            </Caption>
          </Column>
          <Column width={2}>
            <CaptionTitle>Confidence</CaptionTitle>
            <Caption>
              Clear and transparent communication of the order status, from confirmation to shipment to receipt, should instill confidence in the online shopping process.
            </Caption>
          </Column>
        </Grid>
        <Grid>
          <Column width={2}>
            <CaptionTitle>Positive affect</CaptionTitle>
            <Caption>
              Customers should feel positive about progress in their order status. The availability of order status information should also help eliminate confusion, friction or frustration from the online shopping process.
            </Caption>
          </Column>
          <Column width={2}>
            <CaptionTitle>Trust</CaptionTitle>
            <Caption>
              Customers should trust that their order status information lives in a secure location.
            </Caption>
          </Column>
          <Column width={2}>
            <CaptionTitle>Orientation</CaptionTitle>
            <Caption>
              Customers should be able to determine where order status information is located and arrive there efficiently.
            </Caption>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={5} start={4}>
            <h2>We then started to explore different ideas for how to best present the information we wanted to present. My first idea was to treat it like a message thread. Events would show up in a linear fashion. I thought it was a clever way to see a history of your package over time.</h2>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={4} start={1} align="center">
            <h2>The timeline... didn't work out</h2>
            <p>The more I worked on it, the more I realized that the full history didn’t matter that much. Most people care about where their shipment is right now, not two weeks ago. It also raised a lot of questions around where should the most recent content appear, at the top or at the bottom of the page? So I decided to move on to a different concept.</p>
          </Column>
          <Column width={4} start={5}>
            <img src={timeline} alt="Timeline exploration" />
          </Column>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Column width={4} start={5} align="center">
            <h2>Cards</h2>
            <p>Next, I thought about using collapsible cards to display only the most relevant information, but also giving a hint of what came before. This direction obviously worked a lot better than the first one, but it felt like something was missing. This approach was lacking a fundamental emotional aspect: each step should feel like you’re accomplishing something, like you’re one step closer to getting that awesome pair of headphones you’ve been waiting for. In other words: it lacked delight.</p>
            <p>I then decided to try to merge the two ideas together. Keep the cards, but bring back the progress bar. On top of helping you know exactly where you are in the process, progress bars bring an inherent playfulness to the page. As humans, the desire of seeing a progress bar fill up is hardwired into our brain.</p>
          </Column>
          <Column width={4} start={1}>
            <FirstCard src={first_card} />
            <TimelineAnimation src={timeline_animation} />
          </Column>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Column width={6}>
            <PullQuote>
              Getting the style of the bar just right turned out to be a bigger challenge than I thought. I needed it to be flexible, easy to understand and visually interesting without being overpowering.
            </PullQuote>
          </Column>
        </Grid>
      </Section>

      <Section>
        <Grid>
          <Column width={4} start={5}>
            <h2>Putting it all together</h2>
            <p>At this point I had all the components: the progress bar, the map, the description, the related information like the tracking code, etc. All I had to do was put it all together. Simple, right? After just a few hours I had roughly 30 different ways of assembling the information, each one of them having their pros and cons. It was time to decide which one was the best.</p>
            <p>To better visualize everything, I printed every card on a piece of paper and asked my colleague Markus to help me cut them and decide on our favorites.</p>
          </Column>
          <Column width={2} start={1} align='end'>
            <CaptionTitle>Sketch Tip</CaptionTitle>
            <Caption>
              I’ve always found Sketch’s printing functionality to be unreliable, so my trick is to export my artboard as a PDF and print that with an app like Preview.
            </Caption>
          </Column>
        </Grid>
      </Section>

      <Section>
        <FullWidthContainer>
          <CardContainer>
            {/* <CardsFirst src={card_explorations_image} /> */}
            {/* <CardsSecond src={card_explorations_image} /> */}
          </CardContainer>
        </FullWidthContainer>
      </Section>

      <Section>
        <Grid>
          <Column width={4}>
            <h2>The Flow</h2>
            <p>Now that we had our card designed, it was time to cover all of our bases and make sure we didn’t forget any essential part of the fulfillment process. There were a lot of variables coming into play: is the product a digital good? Do we have a tracking number? Is the carrier supported by Shopify Shipping?</p>
            <p>Trying to maintain a map of all of that into all of our head started to become problematic, so I decided to create a flow diagram to make sense of it all. It also helped me refine my design system to make sure it could accommodate all cases</p>
            <p>Our content strategy team also helped out quite a bit to make sense of all the different codes returned by shipping carriers and create content that was consistent and easy to understand. We put a lot of thought into the copy we used because we knew that this would make or break our design.</p>
            <p>Putting all of these pieces together really helped us get a better sense of how the entire process would be like from beginning to end and how the different flows branched out.</p>
          </Column>
          <Column width={4} start={5}>
            {/* <img src={flow} alt="Flow chart" /> */}
            <Caption><a href={full_flow}>View the full flow</a></Caption>
          </Column>
        </Grid>
      </Section>

      <Section>
        <Grid>

          <Column width={4} start={5}>
            <h2>What I learned</h2>
            <ol>
              <li><strong>Your design is only as good as the content.</strong> When you’re talking about increasing trust and clarity, content is extremely important. Having content strategists involved from a very early stage allowed us to produce design that suits the content, rather than the opposite.</li>
              <li><strong>Fall in love with the problem, not the solution.</strong> A very valuable part of design happens away from the computer. Earlier in my career I would often jump to solutions as soon as possible without having that complete understanding of the full context. On this project I realized that by taking the time to research and listen and understand, I could not only make better solutions but it would also be faster in the long run because everyone on the team was aligned on the same goals.</li>
              <li><strong>Try everything.</strong> When you’re exploring design solutions to the problems you’ve discovered, make sure you try a lot of different ideas. It’s highly unlikely that your first idea ends up being the best one, but when you’ve tried everything the solution is forcibly hidden somewhere in there. For this technique to work you also have to turn down the judgmental part of your brain. Your goal here should be to produce a lot of different ideas, you’ll decide which ones make the cut after.</li>
            </ol>
          </Column>
          <Column width={3}>
            <NewFigure isPortrait={true}>
              <IphoneContainer>
                {/* <Iphone src={iphone} /> */}
                {/* <IphoneScreen src={mobile} /> */}
              </IphoneContainer>
            </NewFigure>
          </Column>
        </Grid>
      </Section>
    </div>
  </Project>
)

export default OrderStatusPage
