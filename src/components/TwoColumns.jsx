import React from 'react'
import styled from 'styled-components'
import { Media } from '../components/Media'

const TwoColumns = styled.div`
  ${Media.desktop`
    display: grid;
    grid-template-columns: 3fr 4fr;
    grid-column-gap: 5rem;

    > *:first-child {
      grid-column-start: 2;
    }

    > *:last-child {
      grid-column-start: 1;
      grid-row-start: 1;
    }
  `}
`

export default TwoColumns
