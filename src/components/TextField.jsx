import React from 'react'
import styled from 'styled-components'
import { device } from '../components/Media'

const Field = styled.input`
  font-family: var(--base-font);
  font-size: 18px;
  padding: 1.25rem 1.5rem;
  border: none;
  background: var(--subdued-elements-color);
  color: var(--primary-text-color);
  border-radius: var(--border-radius);
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-text-color) inset;
  }
`

const ErrorMessage = styled.p`
  color: var(--error-color);
  font-size: 0.875em;
  padding-left: 10px;
`

const TextField = ({ label, error, ...props }) => (
  <div>
    <Field {...props} placeholder={label} />
    { error && <ErrorMessage>{error}</ErrorMessage> }
  </div>
)

export default TextField
