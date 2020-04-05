import {createGlobalStyle} from 'styled-components'
import { device } from '../components/Media'

import graphikRegular2 from '../assets/fonts/Graphik-Regular.woff2'
import graphikRegular from '../assets/fonts/Graphik-Regular.woff'

import graphikSemibold2 from '../assets/fonts/Graphik-Semibold.woff2'
import graphikSemibold from '../assets/fonts/Graphik-Semibold.woff'

import graphikMedium2 from '../assets/fonts/Graphik-Medium.woff2'
import graphikMedium from '../assets/fonts/Graphik-Medium.woff'

import gtPressuraMono2 from '../assets/fonts/GTPressuraMonoTrial-Regular.woff2'
import gtPressuraMono from '../assets/fonts/GTPressuraMonoTrial-Regular.woff'

export const GlobalStyle = createGlobalStyle `
  @font-face {
    font-family: 'Graphik';
    src: url('${graphikRegular2}') format('woff2'),
        url('${graphikRegular}') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
      font-family: 'Graphik';
      src: url('${graphikSemibold2} ') format('woff2'),
          url('${graphikSemibold} ') format('woff');
      font-weight: 600;
      font-style: normal;
  }

  @font-face {
      font-family: 'Graphik';
      src: url('${graphikMedium2}') format('woff2'),
          url('${graphikMedium}') format('woff');
      font-weight: 500;
      font-style: normal;
  }

  @font-face {
      font-family: 'GT Pressura Mono';
      src: url('${gtPressuraMono2}') format('woff2'),
          url('${gtPressuraMono}') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  :root {
    --base-font: 'Graphik', -apple-system;
    --secondary-font: 'GT Pressura Mono', Menlo, monospace;
    --paragraph-text-color: #333;
    --primary-text-color: #333;
    --secondary-text-color: #777;
    --subdued-elements-color: #fff;
    --really-subdued-elements-color: #fff;
    --top-background-color: #fff;
    --bottom-background-color: #F1F1F1;
    --dark-tiles: #333;
  }

@media (prefers-color-scheme: dark) {
  :root {
    --base-font: 'Graphik', -apple-system;
    --secondary-font: 'GT Pressura Mono', 'Inconsolata', monospace;
    --paragraph-text-color: #ccc;
    --primary-text-color: #fff;
    --secondary-text-color: #999;
    --subdued-elements-color: rgba(255, 255, 255, 0.15);
    --really-subdued-elements-color: rgba(255, 255, 255, 0.09);
    --top-background-color: #161616;
    --bottom-background-color: #000;
    --dark-tiles: #222;
  }
}

  html {
    height: 100%;
    overflow-x: hidden;
    background: var(--bottom-background-color);
  }

  body {
    font-family: var(--base-font);
    overflow-x: hidden;
    color: var(--primary-text-color);
    margin: 0;
    min-height: 100vh;
    transition: .3s ease-in-out all;
    -webkit-text-size-adjust: 100%;
  }

  code {
    font-family: var(--secondary-font);
  }

  p, ol > li, ul > li {
    line-height: 1.7;
    font-size: 18px;
    margin: 0;
    color: var(--paragraph-text-color);

    & + &,
    figure + &,
    blockquote + & {
      margin-top: 2.5rem;
    }
  }

  a {
    color: var(--primary-text-color);
    text-decoration: none;
  }

  p a,
  li a {
    border-bottom: 2px solid var(--subdued-elements-color);
    font-weight: 500;

    &:hover {
      background: var(--subdued-elements-color);
    }
  }

  ul {
    font-size: 18px;
    line-height: 1.7;
  }

  ol {
    counter-reset: li;
    list-style: none;
    padding: 0;
  }

  ol li {
    counter-increment: li;
    position: relative;
    padding-left: 2.5em;

    &:before {
      content: counter(li);
      display: inline-block;
      background: var(--subdued-elements-color);
      border-radius: 20px;
      padding: 0 0.5em;
      min-width: 0.6em;
      text-align: center;
      position: absolute;
      left: 0;
    }
  }

  ol > li + li,
  ul > li + li {
    margin-top: 1em;
  }

  hr {
    height: 2px;
    background: var(--subdued-elements-color);
    border: none;
    margin: 3rem 0;
    max-width: 9rem;
  }

  figure {
    margin: 0;
  }

  strong {
    font-weight: 600;
  }

  blockquote {
    position: relative;
    margin: 0;
    padding: 0 1.5em;
    color: #777;
    border-left: 2px solid var(--subdued-elements-color);

    @media ${device.mobileLargeUp} {
      padding: 0 3em;
    }

    p {
      font-size: 16px;
      color: var(--secondary-text-color);
    }

    & + & {
      padding-top: 2.5rem;
    }

    p + & {
      margin-top: 2.5rem;
    }
  }

  strong {
    font-weight: 500;
    color: var(--primary-text-color);
  }

  img, video {
    max-width: 100%;
    display: block;
  }

  .gatsby-resp-image-wrapper {
    margin-left: -1rem !important;
    width: calc(100% + 2rem);

    @media ${device.mobileLargeUp} {
      width: 100%;
      margin-left: auto !important;
    }
  }

  h1 {
    font-size: 1em;
    margin: 0;
    line-height: 1;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
    margin-bottom: 0.5em;
    color: var(--primary-text-color);

    @media ${device.tabletUp} {
      font-size: 36px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  h3 {
    font-size: 20px;
    margin: 0;
    margin-top: 6rem;
    margin-bottom: 2.5rem;
    font-weight: 500;
    line-height: 1.4;

    @media ${device.tabletUp} {
      font-size: 24px;
    }

    &:first-child {
      margin-top: 0;
    }
    
    & + & {
      margin-top: -2.5rem;
      color: var(--secondary-text-color);
    }
  }

  h4 {
    font-size: 1.17em;
    margin: 2em 0 0.5em;
    font-weight: 500;

    &:first-child {
      margin-top: 0;
    }
  }
`
