import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'

const Container = styled.figure`
  margin: 0;
  position: relative;
`

const ImageContainer = styled.div`
  @media ${device.mobileLargeDown} {
    margin-left: -1rem;
    width: calc(100% + 2rem);
  }
`

const ActualImage = styled.img`
  display: block;
  max-width: none;
  width: 100%;
`

const Caption = styled.figcaption`
  margin-top: 0.75rem;
`

const CaptionText = styled.span`
  color: var(--secondary-text-color);
  font-size: 16px;
  font-family: var(--secondary-font);
  line-height: 1.5;
`

export default ({ src, srcSet, caption }) => (
  <Container>
    <ImageContainer>
      <ActualImage src={src} srcSet={srcSet} />
    </ImageContainer>
    <Caption>
      <CaptionText>{caption}</CaptionText>
    </Caption>
  </Container>
)
