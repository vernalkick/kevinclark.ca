import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Media } from '../components/Media'

const NavListItem = styled.li`
  /* flex-grow: 1; */
  /* margin-right: 1rem; */

  ${Media.desktop`
    flex-grow: 0;
    margin-right: 2.5rem;
  `}
`

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: ${props => props.selected ? '500' : 'normal'};

  ${Media.desktop`
    font-size: 18px;
  `}
`

class NavItem extends React.Component {
  render() {
    const currentPath = String(this.props.currentPath)
    const url = String(this.props.url)
    const isSelected = currentPath.startsWith(url)

    return (
      <NavListItem>
        <NavLink to={this.props.url} selected={isSelected}>
          {this.props.selected}
          {this.props.children}
          {isSelected ? ' ↓' : ''}
        </NavLink>
      </NavListItem>
    )
  }
}

export default NavItem;
