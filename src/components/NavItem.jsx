import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { device } from '../components/Media'

const NavListItem = styled.li`
  & + & {
    margin-top: 0;
  }
  
  @media ${device.tabletUp} {
    flex-grow: 0;
    margin-right: 2.5rem;
  }
`

const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: ${props => props.selected ? '500' : 'normal'};
  color: var(--primary-text-color);
  text-decoration: none;
  
  &:hover {
    background: transparent;
  }

  @media ${device.desktopUp} {
    font-size: 18px;
  }
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
