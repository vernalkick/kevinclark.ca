import {injectGlobal} from 'styled-components'

injectGlobal `
  :root {
    --base-font: 'Graphik', -apple-system;
    --secondary-font: 'GT Pressura Mono Trial', monospace;
    --primary-text-color: #333;
    --secondary-text-color: #777;
    --subdued-elements-color: #fff;
    --top-background-color: #fff;
    --bottom-background-color: #F1F1F1;
  }

  ${'' /* :root {
    --primary-text-color: #fff;
    --secondary-text-color: #999;
    --subdued-elements-color: rgba(255, 255, 255, 0.25);
    --top-background-color: #000;
    --bottom-background-color: #222;
  } */}

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
  }

  p {
    line-height: 1.7;
    font-size: 18px;
    margin: 0;

    & + &,
    blockquote + & {
      margin-top: 2.5rem;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p a {
    border-bottom: 2px solid currentColor;
  }

  ul {
    font-size: 18px;
    line-height: 1.7;
  }

  hr {
    height: 2px;
    background: #fff;
    border: none;
    margin: 3rem 0;
    max-width: 9rem;
  }

  strong {
    font-weight: 600;
  }

  blockquote {
    position: relative;
    margin: 0;
    padding: 0 1em 0 4em;

    &:before {
      content: "“";
      position: absolute;
      left: 0;
      font-size: 60px;
    }

    & + &,
    p + & {
      margin-top: 2.5rem;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }
`
