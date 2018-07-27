import React from "react"
import styled from 'styled-components'
import { Media } from '../components/Media'
import '../components/Typography'

const offset = `45%`

const ArticleHeader = styled.div`
  position: relative;

  ${Media.desktop`
    padding-left: ${offset};
  `}

  &:before {
    content: '';
    background: var(--top-background-color);
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
  color: var(--main-text-color);
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
  console.log(Media)
  return (
    <ArticleWrapper>
      <ArticleHeader>
        <DateLabel>{post.frontmatter.date}</DateLabel>
        <ArticleTitle>
          <PreTitle>{post.frontmatter.pretitle}</PreTitle>
          {post.frontmatter.title}
        </ArticleTitle>
      </ArticleHeader>
      <ArticleContainer>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </ArticleContainer>
    </ArticleWrapper>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        pretitle
        title
        date(formatString: "DD.MM.YY")
      }
    }
  }
`;
