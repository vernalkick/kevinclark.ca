import React from 'react'
import styled from 'styled-components'
import { Media } from '../components/Media'

const OuterContainer = styled.div`
  position: relative;
`

const ImageContainer = styled.div`
  height: 100%;
  padding-left: 350%;
  position: absolute;
  right: 0;
`

const Image = styled.img`
  max-width: none;
  height: 100%;
  position: absolute;
  right: 0;
`

const OffsetImage = ({ src }) => (
  <OuterContainer>
    <ImageContainer>
      <Image src={src} />
    </ImageContainer>
  </OuterContainer>
)

export default OffsetImage
