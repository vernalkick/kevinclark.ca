import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Media } from '../components/Media'

export const Grid = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;

  ${Media.desktop`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(8, 1fr);
  `}
`

export const Column = styled.div`
  position: relative;

  ${Media.desktop`
    grid-row-start: 1;
    grid-column-start: ${props => props.start};
    grid-column-end: span ${props => props.width};
    align-self: ${props => props.align};
  `}
`

// class ContentGrid extends React.Component {
//   static Column = Column
//
//   render() {
//     const {children, columns} = this.props
//
//     return (
//       <ContentGridElement columns={columns}>{children}</ContentGridElement>
//     )
//   }
// }

// export default ContentGrid
