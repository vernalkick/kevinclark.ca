import React from 'react'
import styled from 'styled-components'
import {Caption} from '../../components/TextStyles'
import Arrow from '../../assets/arrow.svg'

const Container = styled.a`
  list-style-type: none;
  display: flex;

  & + & {
    margin-top: 1.5rem;
  }
`

const TextContainer = styled.div`
  margin-left: 0.5rem;
`

const Title = styled.span`
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  border-bottom: 2px solid var(--subdued-elements-color);
`

const AboutItem = ({ title, description, url }) => (
  <Container href={url}>
    <Arrow />
    <TextContainer>
      <Title>{title}</Title>
      <Caption>{description}</Caption>
    </TextContainer>
  </Container>
)

export default AboutItem
