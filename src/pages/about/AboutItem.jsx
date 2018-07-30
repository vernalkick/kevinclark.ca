import React from 'react'
import styled from 'styled-components'
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
  display: block;
  font-size: 18px;
`

const Description = styled.span`
  display: block;
  font-family: var(--secondary-font);
  color: var(--secondary-text-color);
  margin-top: 0.25rem;
`

const AboutItem = ({ title, description, url }) => (
  <Container href={url}>
    <Arrow />
    <TextContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </TextContainer>
  </Container>
)

export default AboutItem
