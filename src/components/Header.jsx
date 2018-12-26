import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Media } from '../components/Media'
import NavItem from '../components/NavItem'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'

const MainHeader = styled.header`
  display: block;
  margin-top: 1.5rem;
  position: relative;

  ${Media.tablet`
    display: flex;
    flex-wrap: wrap;
    margin: 10vw 0 0 0;
  `}
`

const Logo = styled(Link)`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 1.5rem;
  display: block;
  padding-right: 5rem;

  ${Media.desktop`
    min-width: 45%;
    padding-right: 0;
  `}
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

  ${Media.desktop`
    justify-content: flex-start;
  `}
`

const Social = styled.div`
  position: absolute;
  right: 0;
  top: 1rem;

  ${Media.tablet`
    position: relative;
    top: 0.5rem;
    margin-left: 2rem;
  `}
`
const SocialLink = styled(Link)`
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
      <SocialLink to='http://instagram.com/vernalkick/'><Instagram /></SocialLink>
      <SocialLink to='http://twitter.com/vernalkick'><Twitter /></SocialLink>
    </Social>
  </MainHeader>
)

export default Header
