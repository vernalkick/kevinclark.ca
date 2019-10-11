import React from 'react'
import styled from 'styled-components';
import { css } from 'styled-components';
import { device } from '../components/Media'

const Container = styled.figure`
  margin: 0;
  position: relative;
`

const ImageContainer = styled.div`
  margin-left: -1rem;
  width: calc(100% + 2rem);

  ${props => props.background && css`
    padding: 1rem 0;
    background: ${props.background};
  `}

  @media ${device.tabletUp} {
    padding: 0;
    background: transparent;
    margin-left: 0;
    width: auto;
  }
`

const Image = styled.img`
  display: block;
  max-width: none;
  width: 100%;

  ${props => props.isPortrait && css`
    width: auto;
    max-height: 400px;
    margin: 0 auto;
  `};

  @media ${device.tabletUp} {
    max-width: 100%;
    max-height: none;

    ${props => props.overlap && css`
      width: 60%;
      padding-left: 40%;
    `};
  }
`

const Caption = styled.figcaption`
  * + & {
    margin-top: 1.5rem;
  }

  @media ${device.desktopUp} {
    ${props => props.overlap && css`
      margin-top: -3rem;
      width: 65%;
    `}
  }
`

const CaptionTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.5rem;
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

  a {
    border-bottom: 2px solid var(--subdued-elements-color);
  }
`

export const FigCaption = ({title, children, decoration, overlap}) => (
  <Caption overlap={overlap}>
    {title ? <CaptionTitle>{title}</CaptionTitle> : ''}
    <CaptionText decoration={decoration}>{children}</CaptionText>
  </Caption>
)


const Figure = ({src, caption, alt, children, overlap, isPortrait, background}) => {
  return (
    <Container>
      <ImageContainer background={background}>
        <Image src={src} alt={alt} overlap={overlap} isPortrait={isPortrait} />
      </ImageContainer>
      {children}
      {caption ? <FigCaption title={caption.title} overlap={overlap}>{caption.content}</FigCaption> : ''}
    </Container>
  )
}

export default Figure
