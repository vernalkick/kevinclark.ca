import React from 'react'
import styled, { css } from 'styled-components'
import media from "styled-media-query"
import {FigCaption} from './Figure'

const Container = styled.figure`
  margin: 0;
  position: relative;
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
  return (
    <Container>
      <ImageContainer background={background} isPortrait={isPortrait}>
        {children}
      </ImageContainer>

      {caption ? <FigCaption title={caption.title}>{caption.content}</FigCaption> : ''}
    </Container>
  )
}

export default NewFigure
