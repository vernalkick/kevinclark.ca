import styled from 'styled-components'
import { device } from '../components/Media'

const Section = styled.div`
  &:first-child {
    margin-top: 1.5rem;

    @media ${device.desktopUp} {
      margin-top: 3rem;
    }
  }
  & + & {
    margin-top: 3rem;

    @media ${device.desktopUp} {
      margin-top: 9rem;
    }
  }
`
export default Section
