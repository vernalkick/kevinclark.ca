import React from 'react'
import styled from 'styled-components'
import { Media } from '../components/Media'

const Section = styled.div`
  &:first-child {
    margin-top: 1.5rem;

    ${Media.desktop`
      margin-top: 3rem;
    `}
  }
  & + & {
    margin-top: 3rem;

    ${Media.desktop`
      margin-top: 6rem;
    `}
  }
`
export default Section