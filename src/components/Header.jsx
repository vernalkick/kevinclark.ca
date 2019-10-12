import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { device } from '../components/Media'
import NavItem from '../components/NavItem'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'

const MainHeader = styled.header`
  display: grid;
  grid-template-columns: 45% auto 70px;
  grid-row-gap: 2rem;
  grid-template-areas:
    "logo logo social"
    "nav nav nav";
  align-items: center;
  margin-top: 2rem;

  @media ${device.tabletUp} {
    margin-top: 5vw;
    grid-template-areas:
      "logo logo logo"
      "nav nav social";
  }

  @media ${device.desktopUp} {
    margin-top: 10vw;
    grid-template-areas:
      "logo nav social";
  }
`

const Logo = styled(Link)`
  font-size: 16px;
  line-height: 1.3;
  display: block;
  grid-area: logo;

  @media ${device.desktopUp} {
    font-size: 18px;
  }
`

const Name = styled.span`
  display: block;
  font-weight: 500;
`

const Role = styled.span`
  display: block;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-area: nav;

  @media ${device.tabletUp} {
    justify-content: flex-start;
  }
`

const Social = styled.div`
  text-align: right;
  grid-area: social;
`
const SocialLink = styled.a`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`

const Header = ({ siteTitle, pathName }) => (
  <MainHeader>
    <Logo to='/'>
      <Name>Kevin Clark</Name>
      <Role>Design Lead, Shopify</Role>
    </Logo>
    <List>
      <NavItem url='/articles' currentPath={pathName}>Articles</NavItem>
      <NavItem url='/work' currentPath={pathName}>Work</NavItem>
      <NavItem url='/speaking' currentPath={pathName}>Speaking</NavItem>
      <NavItem url='/about' currentPath={pathName}>About</NavItem>
    </List>
    <Social>
      <SocialLink href='http://instagram.com/vernalkick/'><Instagram /></SocialLink>
      <SocialLink href='http://twitter.com/vernalkick'><Twitter /></SocialLink>
    </Social>
  </MainHeader>
)

export default Header
