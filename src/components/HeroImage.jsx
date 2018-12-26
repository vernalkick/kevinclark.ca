import React from 'react'
import styled from 'styled-components'
import { Media } from '../components/Media'

const HeroImage = styled.div`
  position: relative;
  margin: 0 -15%;
  margin-bottom: 1.5rem;

  ${Media.desktop`
    margin: 0;
    margin-bottom: 3rem;
  `}
`

export default HeroImage
