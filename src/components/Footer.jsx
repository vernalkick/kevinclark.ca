import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Media } from '../components/Media'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'

const FooterContainer = styled.div`
  border-top: 2px solid var(--subdued-elements-color);
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0 2rem;
  margin-top: 5rem;

  ${Media.desktop`
    padding-bottom: 4rem;
  `}
`

const Copyright = styled.span`
  min-width: 35%;
  margin-right: 1rem;
  flex-grow: 1;

  ${Media.tablet`
    flex-grow: 0;
  `}
`

const Contact = styled.div`
  flex-grow: 1;
  display: none;

  ${Media.tablet`
    display: block;
  `}
`

const SocialLink = styled(Link)`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`

const FooterLink = styled(Link)`
  font-weight: 500;
`

const today = new Date()
const year = today.getFullYear()

const Footer = () => (
  <FooterContainer>
    <Copyright>Copyright © {year} <FooterLink>Kevin Clark</FooterLink></Copyright>
    <Contact>Email me at <FooterLink to='mailto:kevin@kevinclark.ca'>kevin@kevinclark.ca</FooterLink></Contact>
    <div>
      <SocialLink to='http://instagram.com/vernalkick/'><Instagram /></SocialLink>
      <SocialLink to='http://twitter.com/vernalkick'><Twitter /></SocialLink>
    </div>
  </FooterContainer>
)

export default Footer
