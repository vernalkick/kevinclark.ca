import React from "react"
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Media } from '../components/Media'
import '../components/Typography'
import RelatedArticles from '../components/RelatedArticles'

const ArticleWrapper = styled.div`
  margin-top: 2.25rem;
  margin-bottom: 5rem;

  ${Media.tablet`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 25% auto;
    grid-template-areas:
      "date title"
      ". content";
  `}

  ${Media.desktop`
    grid-template-columns: 45% auto;
  `}
`

const PreTitle = styled.span`
  font-weight: 400;
  display: block;
`

const ArticleTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 500;
  margin: 0;
  color: var(--main-text-color);
  line-height: 1.2;
  grid-area: title;
  position: relative;
  padding-right: 7%;

  &:before {
    content: '';
    background: var(--top-background-color);
    height: 10000px;
    display: block;
    position: absolute;
    bottom: 1.3rem;
    left: -10000px;
    right: -10000px;
    z-index: -1;
  }
`

const DateLabel = styled.span`
  font-size: 18px;
  margin-bottom: 0.25rem;
  display: block;
  grid-area: date;
  align-self: end;

  ${Media.tablet`
    margin-bottom: 0.6rem;
  `}
`

const ArticleContainer = styled.div`
  grid-area: content;
  margin-top: 3rem;

  ${Media.desktop`
    margin-top: 7.5rem;
  `}
`

export default ({location, data}) => {
  const post = data.markdownRemark

  // eslint-disable-next-line
  String.prototype.prettify = function() {
    return this.replace(/ (?=[^ ]*$)/i, "\u00A0")
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>
      <ArticleWrapper>
        <DateLabel>{post.frontmatter.date}</DateLabel>
        <ArticleTitle>
          <PreTitle>{post.frontmatter.pretitle}</PreTitle>
          {post.frontmatter.title.prettify()}
        </ArticleTitle>
        <ArticleContainer>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ArticleContainer>
      </ArticleWrapper>
      <RelatedArticles />
    </Layout>
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
