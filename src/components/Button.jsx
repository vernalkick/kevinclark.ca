import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'
import PlusIcon from '../assets/plus'

const Button = styled.a`
  padding: 1.25rem 1.5rem;
  display: inline-block;
  border-radius: 12px;
  font-weight: 500;
  font-size: 18px;
  background: var(${props => props.primary ? "--primary-text-color" : "--really-subdued-elements-color"});
  color: var(${props => props.primary ? "--bottom-background-color" : "--primary-text-color"});

  @media ${device.mobileDown} {
    display: block;
    text-align: center;
  }

  p + & {
    margin-top: 1.5rem;
  }
`

export default ({ to, children }) => (
  <Button href={to}>
    <PlusIcon />
    {children}
  </Button>
)
