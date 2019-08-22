import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { device } from '../components/Media'

const Container = styled.div`
  @media ${device.mobileLargeUp} {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-row-gap: 2rem;
    grid-template-areas:
      "title button"
      "content content";
    align-items: center;
  }

  & + & {
    margin-top: 8rem;
  }
`

const SectionTitle = styled.h1`
  grid-area: title;
  color: var(--subdued-elements-color);
  font-size: 50px;
  line-height: 0.9;
  margin-bottom: -0.2em;

  @media ${device.mobileLargeUp} {
    font-size: 60px;
    margin-bottom: -0.75em;
  }

  @media ${device.tabletUp} {
    font-size: 85px;
    margin-bottom: -0.6em;
  }

  @media ${device.desktop} {
    font-size: 120px;
    margin-bottom: -0.5em;
  }
`

const ViewMoreButton = styled(Button)`
  grid-area: button;
  align-self: end;
`

const Content = styled.div`
  grid-area: content;
`

const FeaturedContentSection = ({title, url, children}) => (
  <Container>
    <SectionTitle dangerouslySetInnerHTML={{__html: title.replace(/ /, `<br/>`)}}/>
    <Content>
      {children}
    </Content>
    <ViewMoreButton to={url}>View All</ViewMoreButton>
  </Container>
)

export default FeaturedContentSection
