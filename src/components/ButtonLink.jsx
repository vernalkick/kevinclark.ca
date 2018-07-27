import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const ButtonContainer = styled.a`
  background: var(--primary-text-color);
  padding: 1.25rem 1.5rem;
  display: inline-block;
  border-radius: 12px;
  color: var(--bottom-background-color);
  font-weight: 500;
  font-size: 18px;
`

const ButtonLink = ({ to, children }) => (
  <ButtonContainer href={to}>
    {children}
  </ButtonContainer>
)

export default ButtonLink
