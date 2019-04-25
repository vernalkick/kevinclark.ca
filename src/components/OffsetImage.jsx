import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Media } from '../components/Media'

const ImageContainer = styled.div`
  ${Media.desktop`
    height: 100%;
    position: absolute;
    ${props => props.direction}: 0;
  `}
`

const Image = styled.img`
  filter: drop-shadow(0 15px 20px rgba(0,0,0,.6));

  ${Media.desktop`
    max-width: none;
    height: 100%;
    position: absolute;
    ${props => props.direction}: 0;
  `}
`

class OffsetImage extends React.Component {
  static defaultProps = {
    direction: 'left'
  }

  static propTypes = {
    direction: PropTypes.oneOf(['left', 'right']).isRequired
  }

  render() {
    const { src, direction } = this.props
    const oppositeDirection = direction === 'left' ? 'right' : 'left'

    return (
      <ImageContainer direction={oppositeDirection}>
        <Image src={src} direction={oppositeDirection} />
      </ImageContainer>
    )
  }
}

export default OffsetImage
