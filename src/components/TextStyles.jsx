import styled from 'styled-components'

export const CaptionTitle = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0.5rem;
  
  &:not(:first-child) {
    margin-top: 1.5em;
  }
`

export const Caption = styled.span`
  display: block;
  color: var(--secondary-text-color);
  font-size: 16px;
  font-family: var(--secondary-font);
  line-height: 1.5;
  
  &:first-child, img + & {
    margin-top: 1.5em;
  }
`