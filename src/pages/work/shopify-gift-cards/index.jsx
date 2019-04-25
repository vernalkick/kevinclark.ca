import React from 'react'
import Project from '../../../templates/project'

export const frontmatter = {
  company: "Shopify",
  title: "Gift Cards",
  image: './gift-cards-thumb.png',
  date: '2016-05-01',
  slug: 'shopify-gift-cards'
}

const GiftCards = ({location}) => (
  <Project frontmatter={frontmatter} location={location}>
  </Project>
)

export default GiftCards
