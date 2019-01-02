import React from 'react'
import styled, { css } from 'styled-components'
import media from "styled-media-query"
import {FigCaption} from './Figure'

const Container = styled.figure`
  margin: 0;
  margin-bottom: 1.5rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`

const ImageContainer = styled.div`
  ${media.lessThan("medium")`
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
  `}
`

const NewFigure = ({caption, children, isPortrait, background}) => {
  var caption = []
  var newChildren = []

  React.Children.forEach(children, (child, i) => {
    if (child.type.name === 'FigCaption') {
      caption.push(child)
    } else {
      newChildren.push(child)
    }
  })

  return (
    <Container>
      <ImageContainer background={background} isPortrait={isPortrait}>
        {newChildren}
      </ImageContainer>

      {caption}
    </Container>
  )
}

export default NewFigure
