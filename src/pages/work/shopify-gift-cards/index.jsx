import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'

exports.frontmatter = {
  title: "Shopify Gift Cards",
  image: './gift-cards-thumb.png',
  date: '2018-05-01',
  slug: 'shopify-gift-cards'
}

const GiftCards = () => (
  <div>
    <MainPageHeader preTitle='Shopify'>Gift Cards</MainPageHeader>
  </div>
)

export default GiftCards
