import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'

exports.frontmatter = {
  title: "Shopify Pay Landing Page",
  image: './gift-cards-thumb.png',
  date: '2017-05-01',
  slug: 'shopify-pay-landing'
}

const ShopifyPayLanding = () => (
  <div>
    <MainPageHeader preTitle='Shopify'>Shopify Pay</MainPageHeader>
  </div>
)

export default ShopifyPayLanding
