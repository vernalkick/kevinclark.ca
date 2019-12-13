import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'

const Container = styled.div`
  display: grid;
  @media ${device.desktop} {
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      align-items: center;
  }


  grid-gap: 40px;
`

const Image = styled.img`
  box-shadow: 0 18px 43px -10px rgba(0,0,0,0.15);
`

const More = styled.a`
  font-size: 18px;
  font-weight: 500;
  margin-top: 1rem;
  display: block;
`

const Description = styled.div`
`

const Title = styled.h3`
  margin-bottom: 0.5em;
`

const Talk = ({ image, title, description, slides }) => (
  <Container>
    <Image src={image} />
    <Description>
      <Title>{title}</Title>
      <p>{description}</p>
      <More href={slides}>View slides on Speaker Deck →</More>
    </Description>
  </Container>
)

export default Talk
