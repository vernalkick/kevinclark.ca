
import styled from 'styled-components'

export const CaptionText = styled.span`
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
