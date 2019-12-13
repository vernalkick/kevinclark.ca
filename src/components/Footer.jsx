import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'

const FooterContainer = styled.div`
  border-top: 2px solid var(--subdued-elements-color);
  font-size: 15px;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0 calc(2rem + env(safe-area-inset-bottom));
  margin-top: 5rem;

  @media ${device.tabletUp} {
    font-size: 16px;
  }

  @media ${device.desktopUp} {
    padding-bottom: 4rem;
  }
`

const Copyright = styled.span`
  min-width: 35%;
  margin-right: 1rem;
  flex-grow: 1;

  @media ${device.tabletUp} {
    flex-grow: 0;
  }
`

const Contact = styled.div`
  flex-grow: 1;
  display: none;

  @media ${device.tabletUp} {
    display: block;
  }
`

const SocialLink = styled.a`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`

const FooterLink = styled.a`
  font-weight: 500;
`

const today = new Date()
const year = today.getFullYear()

const Footer = () => (
  <FooterContainer>
    <Copyright>Copyright © {year} <FooterLink>Kevin Clark</FooterLink></Copyright>
    <Contact>Email me at <FooterLink to='mailto:kevin@kevinclark.ca'>kevin@kevinclark.ca</FooterLink></Contact>
    <div>
      <SocialLink href='http://instagram.com/vernalkick/'><Instagram /></SocialLink>
      <SocialLink href='http://twitter.com/vernalkick'><Twitter /></SocialLink>
    </div>
  </FooterContainer>
)

export default Footer
