import React from 'react'
import styled from 'styled-components'
import {Media} from '../components/Media'

const HeaderContainer = styled.header`
  position: relative;
  font-size: 50px;
  margin-top: 0.63em;

  ${Media.tablet`
    font-size: 85px;
  `}

  ${Media.desktop`
    font-size: 120px;
  `}

  &:before {
    content: '';
    background: var(--top-background-color);
    height: 10000px;
    display: block;
    position: absolute;
    bottom: 1.5rem;
    left: -10000px;
    right: -10000px;
    z-index: -1;

    ${Media.tablet`
      bottom: 2.5rem;
    `}

    ${Media.desktop`
      bottom: 3.5rem;
    `}
  }
`




class MainPageHeader extends React.Component {
  render() {
    return (
      <HeaderContainer>
        {this.props.children}
      </HeaderContainer>
    )
  }
}

export default MainPageHeader;
