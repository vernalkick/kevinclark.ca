import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'
import PlusIcon from '../assets/plus.svg'

const ButtonInput = styled.button`
  display: inline-block;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  font-family: var(--base-font);
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

const Button = ({ icon, primary, children, ...props }) => (
  <ButtonInput primary={primary} {...props}>
    <Inner>
      {icon &&
        <Icon>
          {icon === "plus" &&
            <PlusIcon />
          }
        </Icon>
      }
      {children}
    </Inner>
  </ButtonInput>
)

const ButtonLink = ({...props}) => (
  <Button as="a" {...props} />
)

export { Button, ButtonLink }
