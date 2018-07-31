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

const Title = styled.h1`
  font-size: 1em;
  margin: 0;
  line-height: 1;
`

const PreTitle = styled.span`
  font-size: 22px;
  margin-bottom: 1rem;
  display: block;

  ${Media.desktop`
    font-size: 35px;
  `}
`

class MainPageHeader extends React.Component {
  render() {
    var strippedChildren = ''

    if (typeof this.props.children == 'string') {
      const indexOfLastSpace = this.props.children.lastIndexOf(" ")
      strippedChildren = this.props.children.replace(/(.+)( )/g, '$1&nbsp;')
    } else {
      strippedChildren = this.props.children
    }

    return (
      <HeaderContainer>
        <PreTitle>{this.props.preTitle}</PreTitle>
        <Title>{this.props.children}</Title>
      </HeaderContainer>
    )
  }
}

export default MainPageHeader;
