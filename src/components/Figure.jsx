import React from 'react'
import styled from 'styled-components';

const Container = styled.figure`
  margin: 0;
`

const Image = styled.img`
  display: block;
  max-width: 100%;
`

const Caption = styled.figcaption`
  margin-top: 1.5rem;
`

const CaptionTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 1rem;
`

const CaptionText = styled.span`
  color: var(--secondary-text-color);
  font-size: 16px;
  font-family: var(--secondary-font);
  line-height: 1.5;
  display: block;
  position: relative;

  &:before {
    content: "";
    display: ${props => props.decoration ? 'block' : 'none'};
    position: absolute;
    height: 140px;
    width: 2px;
    background: var(--subdued-elements-color);
    transform: rotate(45deg) translateY(15%);
    bottom: -2rem;
    right: 1rem;
    z-index: -1;
  }
`

export const FigCaption = ({title, children, decoration}) => (
  <Caption>
    {title ? <CaptionTitle>{title}</CaptionTitle> : ''}
    <CaptionText decoration={decoration}>{children}</CaptionText>
  </Caption>
)


const Figure = ({src, caption, alt, children}) => (
  <Container>
    {children}
  </Container>
)

export default Figure
