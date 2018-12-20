import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Media } from '../components/Media'

const ContentGridElement = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;

  ${Media.desktop`
    display: grid;
    grid-gap: 5rem;

    ${props => props.columns == 2 && css`
      grid-gap: 7rem;
      grid-template-columns: 4fr 4fr;
    `}

    ${props => props.columns == 3 && css`
      grid-template-columns: 1fr 2fr 1fr;
    `}
  `}
`

export const Column = styled.div`
  position: relative;

  ${Media.desktop`
    grid-column-start: ${props => props.number};
    grid-row-start: 1;
  `}
`

class ContentGrid extends React.Component {
  static Column = Column

  render() {
    const {children, columns} = this.props

    return (
      <ContentGridElement columns={columns}>{children}</ContentGridElement>
    )
  }
}

export default ContentGrid
