import React from 'react'
import styled from 'styled-components'
import {CaptionText} from '../components/TextStyles'

const Caption = styled.figcaption`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-top: 1rem;
  align-items: baseline;
`

const Img = styled.img`
  box-shadow: 0 45.4px 70px -20.4px rgba(0,0,0,0.3);
`

const Description = styled.p`
  font-weight: 500;
`

export default ({ src }) => (
  <figure>
    <Img src={src} />
    <Caption>
      <Description>↑ That’s me</Description>
      <CaptionText>Picture by <a href="https://instagram.com/sweetyams">Willem Shepherd</a></CaptionText>
    </Caption>
  </figure>
)
