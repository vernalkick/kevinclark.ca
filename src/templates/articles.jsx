import React from "react"
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Media } from '../components/Media'
import '../components/Typography'
import RelatedArticles from '../components/RelatedArticles'

const tabletOffset = `25%`
const offset = `45%`

const ArticleHeader = styled.div`
  position: relative;

  ${Media.tablet`
    padding-left: ${tabletOffset};
  `}

  ${Media.desktop`
    padding-left: ${offset};
  `}

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

const PreTitle = styled.span`
  font-weight: 400;
  display: block;
`

const ArticleWrapper = styled.div`
  margin-top: 2.25rem;
  margin-bottom: 5rem;

  ${Media.tablet`
    margin-top: 5rem;
  `}
`

const ArticleTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 500;
  margin: 0;
  margin-bottom: 3rem;
  color: var(--main-text-color);
  line-height: 1.2;

  ${Media.desktop`
    margin-bottom: 7.5rem;
  `}
`

const DateLabel = styled.span`
  font-size: 18px;
  margin-bottom: 0.25rem;
  display: block;

  ${Media.tablet`
    position: absolute;
    bottom: 0.6rem;
    left: 0;
    margin-bottom: 0;
  `}
`

const ArticleContainer = styled.div`
  ${Media.tablet`
    padding-left: ${tabletOffset};
  `}

  ${Media.desktop`
    padding-left: ${offset};
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
        <ArticleHeader>
          <DateLabel>{post.frontmatter.date}</DateLabel>
          <ArticleTitle>
            <PreTitle>{post.frontmatter.pretitle}</PreTitle>
            {post.frontmatter.title.prettify()}
          </ArticleTitle>
        </ArticleHeader>
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
