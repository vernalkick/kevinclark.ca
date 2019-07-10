import styled from 'styled-components'
import { device } from '../components/Media'

export const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-row-gap: 1.5rem;
  grid-template-columns: 1fr;

  & + & {
    margin-top: 3rem;
  }

  @media ${device.desktopUp} {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(8, 1fr);

    & + & {
      margin-top: 4rem;
    }
  }
`

export const Column = styled.div`
  position: relative;

  @media ${device.desktopUp} {
    grid-row-start: ${props => props.row || 1};
    grid-row-end: span ${props => props.height};
    grid-column-start: ${props => props.start};
    grid-column-end: span ${props => props.width};
    align-self: ${props => props.align};
  }
`
