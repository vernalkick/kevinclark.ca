import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Instagram from '../assets/instagram.svg'
import Twitter from '../assets/twitter.svg'

const FooterContainer = styled.div`
  border-top: 2px solid var(--subdued-elements-color);
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0 4rem;
`

const Copyright = styled.span`
  min-width: 35%;
  margin-right: 1rem;
`

const Contact = styled.div`
  flex-grow: 1;
`

const SocialLink = styled(Link)`
  margin-right: 1rem;

  &:last-child {
    margin-right: 0;
  }
`

const EmailLink = styled(Link)`
  font-weight: 500;
`

const today = new Date()
const year = today.getFullYear()

const Footer = () => (
  <FooterContainer>
    <Copyright>Copyright © {year} Kevin Clark</Copyright>
    <Contact>Email me at <EmailLink to='mailto:kevin@kevinclark.ca'>kevin@kevinclark.ca</EmailLink></Contact>
    <div>
      <SocialLink to='http://instagram.com/vernalkick/'><Instagram /></SocialLink>
      <SocialLink to='http://twitter.com/vernalkick'><Twitter /></SocialLink>
    </div>
  </FooterContainer>
)

export default Footer
