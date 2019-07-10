import styled from 'styled-components'
import { device } from '../components/Media'

const HeroImage = styled.div`
  position: relative;
  margin: 0 -15%;
  margin-bottom: 1.5rem;

  @media ${device.desktopUp} {
    margin: 0;
    margin-bottom: 3rem;
  }
`

export default HeroImage
