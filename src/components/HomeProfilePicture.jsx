import React from 'react'
import styled from 'styled-components'
import {Caption} from '../components/TextStyles'

const Description = styled.figcaption`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 1rem;
  align-items: baseline;
`

const Img = styled.img`
  box-shadow: 0 45.4px 70px -20.4px rgba(0,0,0,0.3);
`

const Title = styled.p`
  color: var(--primary-text-color);
  font-weight: 500;
`

export default ({ src }) => (
  <figure>
    <Img src={src} />
    <Description>
      <Title>↑ That’s me</Title>
      <Caption>Picture by <a href="https://instagram.com/sweetyams">Willem Shepherd</a></Caption>
    </Description>
  </figure>
)
