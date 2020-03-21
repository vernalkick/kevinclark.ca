import React from 'react'
import styled from 'styled-components'

import AppStore from '../assets/appstore.svg'
import Compass from '../assets/compass.svg'

const Container = styled.a`
  font-size: 18px;
  // margin: 0;
  display: block;
  font-weight: 500;
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  margin-right: 0.5rem;
  display: flex;
`

const labels = {
  appStore: "Get it on the App Store",
  website: "View website"
}

const icons = {
  appStore: <AppStore />,
  website: <Compass />
}

const categorize = (url) => {
  return url.includes("apple.com") ? "appStore" : "website"
}

export default ({href, ...props}) => {
  const type = categorize(href)
  
  return (
    <Container href={href} {...props}>
      <Icon>{icons[type]}</Icon>
      <span>{labels[type]} →</span>
    </Container>
  )
}