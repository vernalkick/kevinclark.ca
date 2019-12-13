import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  display: block;
  position: relative;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 0.5rem;
  z-index: 1;
  position: relative;
`

const Description = styled.p`
  margin: 0;
  z-index: 1;
`

const Date = styled.span`
  color: var(--subdued-elements-color);
  font-size: 35px;
  font-weight: 600;
  position: absolute;
  top: -1rem;
  right: 0;
`

const Event = ({title, description, url, year}) => (
  <Link href={url}>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Date>{year}</Date>
  </Link>
)

export default Event
