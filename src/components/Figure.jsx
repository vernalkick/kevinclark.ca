import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import { Media } from '../components/Media'

const Container = styled.figure`
  margin: 0;
  position: relative;
`

const Image = styled.img`
  display: block;
  max-width: none;
  margin-left: -1rem;
  width: calc(100% + 2rem);

  ${Media.tablet`
    max-width: 100%;
    margin-left: 0;
    width: auto;

    ${props => props.overlap && css`
      width: 60%;
      padding-left: 40%;
    `};
  `}
`

const Caption = styled.figcaption`
  /* margin-top: 1rem; */

  ${Media.desktop`
    ${props => props.overlap && css`
      margin-top: -3rem;
      width: 65%;
    `}
  `}
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

export const FigCaption = ({title, children, decoration, overlap}) => (
  <Caption overlap={overlap}>
    {title ? <CaptionTitle>{title}</CaptionTitle> : ''}
    <CaptionText decoration={decoration}>{children}</CaptionText>
  </Caption>
)


const Figure = ({src, caption, alt, children, overlap}) => (
  <Container>
    <Image src={src} alt={alt} overlap={overlap} />
    {children}
    {caption ? <FigCaption title={caption.title} overlap={overlap}>{caption.content}</FigCaption> : ''}
  </Container>
)

export default Figure
