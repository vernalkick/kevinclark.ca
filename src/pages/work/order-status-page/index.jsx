import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'

exports.frontmatter = {
  title: "Order Status Page",
  image: './osp-hero.png',
  date: '2018-06-01'
}

const OrderStatusPage = () => (
  <div>
    <MainPageHeader preTitle='Shopify'>Order Status Page</MainPageHeader>
  </div>
)

export default OrderStatusPage
