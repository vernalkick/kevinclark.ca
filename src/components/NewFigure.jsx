import React from 'react'
import styled, { css } from 'styled-components'
import { device } from "../components/Media"

const Container = styled.figure`
  margin: 0;
  margin-bottom: 1.5rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`

const ImageContainer = styled.div`
  @media ${device.mobileLargeDown} {
    margin-left: -1rem;
    width: calc(100% + 2rem);

    ${props => props.background && css`
      padding: 1rem 0;
      background: ${props.background};
    `}

    ${props => props.isPortrait && css`
      & > * {
        width: auto;
        height: 400px;
        margin: 0 auto;
      }
    `};
  }
`

const NewFigure = ({caption, children, isPortrait, background}) => {
  var captionArray = []
  var newChildren = []

  React.Children.forEach(children, (child, i) => {
    console.log(child.props)
    if (child.props.isFigCaption === true) {
      captionArray.push(child)
    } else {
      newChildren.push(child)
    }
  })

  return (
    <Container>
      <ImageContainer background={background} isPortrait={isPortrait}>
        {newChildren}
      </ImageContainer>

      {captionArray}
    </Container>
  )
}

export default NewFigure
