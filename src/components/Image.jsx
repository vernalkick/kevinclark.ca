import React from 'react'
import styled, { css } from 'styled-components'
import { device } from '../components/Media'

const Container = styled.figure`
  margin: 0;
  position: relative;
`

const Caption = styled.figcaption`
  * + & {
    margin-top: 1.5rem;
  }

  @media ${device.desktopUp} {
    ${props => props.overlap && css`
      margin-top: -3rem;
      width: 65%;
    `}
  }
`

const CaptionText = styled.span`
  color: var(--secondary-text-color);
  font-size: 16px;
  font-family: var(--secondary-font);
  line-height: 1.5;
  display: block;
  position: relative;

  &:before {
    content: "";
    display: ${props => props.decoration ? 'block' : 'none'};
    position: absolute;
    height: 140px;
    width: 2px;
    background: var(--subdued-elements-color);
    transform: rotate(45deg) translateY(15%);
    bottom: -2rem;
    right: 1rem;
    z-index: -1;
  }
`

export default ({ src, caption }) => (
  <Container>
    <img src={src} />
    <Caption>
      <CaptionText>{caption}</CaptionText>
    </Caption>
  </Container>
)
