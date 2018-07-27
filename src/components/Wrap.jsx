import React from 'react'
import styled from 'styled-components'
import { Media } from '../components/Media'

const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  ${Media.tablet`
    padding: 0 10%;
  `}

  ${Media.desktop`
    padding: 0 5%;
  `}
`

export default Wrap
