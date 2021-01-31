import React from 'react'
import styled from 'styled-components'

import Helmet from 'react-helmet'
import Layout from '../layouts/layout'
import MainPageHeader from '../components/MainPageHeader'
import Section from '../components/Section'
import {Grid, Column} from '../components/ContentGrid'

import NewsletterForm from '../components/NewsletterForm'

export default ({ location }) => (
  <Layout location={location}>
    <Helmet>
      <title>Newsletter</title>
    </Helmet>
    <MainPageHeader>
      <h1>Newsletter</h1>
    </MainPageHeader>
    <Section>
    <Grid>
      <Column width={5}>
        <h3>There’s always been something magical to me about receiving letters in the mail. They tend to be very few and far between, but that only contributes to the feeling of receiving one. It’s kind of a lost art.</h3>
      </Column>
    </Grid>
      <Grid>
        <Column width={4}>
          <p>Our inboxes on the other hand, are filled with notifications and bills to pay and random spam mails that somehow made it through even some of the world’s most sophisticated algorithms. I’d like to try and bring some of the whimsy back. Let’s bring back the feeling of an old friend, writing you a personal letter. Now don’t get me wrong, these newsletters will be infrequent. On purpose.</p>
        </Column>
        <Column width={3} start={6} align='end'>
          <h3>Sign up for my newsletter</h3>
          <NewsletterForm />
        </Column>
      </Grid>
    </Section>
  </Layout>
)
