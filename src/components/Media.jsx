import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 376
}

// Iterate through the sizes and create a media template
export const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
