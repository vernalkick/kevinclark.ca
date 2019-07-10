import { css } from 'styled-components'

const sizes = {
  desktop: 992,
  tablet: 768,
  mobileLarge: 550,
  mobile: 376
}

// // Iterate through the sizes and create a media template
// export const Media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${sizes[label] / 16}em) {
//       ${css(...args)}
//     }
//   `
//
//   return acc
// }, {})

export const device = {
  mobile: `(max-width: ${sizes.mobile}px)`,
  mobileLargeDown: `(max-width: ${sizes.tablet}px)`,
  mobileLarge: `(min-width: ${sizes.mobileLarge}px) and (max-width: ${sizes.tablet}px)`,
  mobileLargeUp: `(min-width: ${sizes.mobileLarge}px)`,
  tabletDown: `(max-width: ${sizes.desktop}px)`,
  tablet: `(min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop}px)`,
  tabletUp: `(min-width: ${sizes.tablet}px)`,
  desktop: `(min-width: ${sizes.desktop}px)`,
  desktopUp: `(min-width: ${sizes.desktop}px)`
}
