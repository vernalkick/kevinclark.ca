import styled from 'styled-components'
import { device } from '../components/Media'

const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;

  @media ${device.tabletUp} {
    padding: 0 5%;
  }
`

export default Wrap
