import React from 'react'
import styled from 'styled-components'
import { Media } from '../components/Media'

const Quote = styled.blockquote`
  padding: 0;

  &:before {
    content: "";
    height: 140px;
    width: 2px;
    background: var(--subdued-elements-color);
    transform: rotate(45deg) translateY(-15%);
    top: -2rem;
    z-index: -1;
  }
`

const Paragraph = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;

  ${Media.tablet`
    font-size: 32px;
  `}
`

const Source = styled.p`
  position: relative;
  display: block;
  font-weight: 500;
  margin-top: 1rem;

  &:before {
    content: "";
    display: inline-block;
    width: 70px;
    height: 2px;
    background: #333;
    margin-bottom: 0.8%;
    margin-right: 0.5rem;
  }
`

const PullQuote = ({ source, children }) => (
  <Quote>
    <Paragraph>{children}</Paragraph>
    {source ? <Source>{source}</Source> : ''}
  </Quote>
)

export default PullQuote