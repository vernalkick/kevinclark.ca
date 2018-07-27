import React from "react"
import styled from 'styled-components'
import MainPageHeader from '../components/MainPageHeader'
import { Media } from '../components/Media'
import '../components/Typography'

import rehypeReact from "rehype-react"
import ButtonLink from "../components/ButtonLink"
import PullQuote from "../components/PullQuote"
import Figure from "../components/Figure"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "buttonlink": ButtonLink,
    'pullquote': PullQuote,
    'figure': Figure
  }
}).Compiler

const offset = `45%`

const ArticleHeader = styled.div`
  position: relative;

  ${Media.desktop`
    padding-left: ${offset};
  `}

  &:before {
    content: '';
    background: #fff;
    height: 10000px;
    display: block;
    position: absolute;
    bottom: 1rem;
    left: -10000px;
    right: -10000px;
    z-index: -1;
  }
`

const PreTitle = styled.span`
  font-weight: 400;
  display: block;
`

const ArticleWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const ArticleTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 7.5rem;
  color: #333;
`

const DateLabel = styled.span`
  font-size: 18px;

  ${Media.desktop`
    position: absolute;
    bottom: 0.5rem;
    left: 0;
  `}
`

const ArticleContainer = styled.div`
  ${Media.desktop`
    padding-left: ${offset};
  `}
`

export default ({data}) => {
  const post = data.markdownRemark

  return (
    <div>
      <MainPageHeader preTitle={post.frontmatter.company}>
        {post.frontmatter.title}
      </MainPageHeader>
      <div>
        {renderAst(post.htmlAst)}
      </div>
    </div>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        pretitle
        company
        title
        date(formatString: "DD.MM.YY")
      }
    }
  }
`;
