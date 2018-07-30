import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  &:first-child {
    margin-top: 3rem;
  }
  & + & {
    margin-top: 6rem;
  }
`
export default Section
