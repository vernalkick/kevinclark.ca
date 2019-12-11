import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'
import PlusIcon from '../assets/plus.svg'

const Button = styled.a`
  display: inline-block;
  border-radius: 12px;
  font-weight: 500;
  font-size: 18px;
  background: var(${props => props.primary ? "--primary-text-color" : "--really-subdued-elements-color"});
  color: var(${props => props.primary ? "--bottom-background-color" : "--primary-text-color"});

  @media ${device.mobileLargeDown} {
    display: block;
  }

  p + & {
    margin-top: 1.5rem;
  }
`

const Inner = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Icon = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
`

export default ({ href, icon, primary, children }) => (
  <Button href={href} primary={primary}>
    <Inner>
      {icon &&
        <Icon>
          {icon == "plus" &&
            <PlusIcon />
          }
        </Icon>
      }
      {children}
    </Inner>
  </Button>
)
