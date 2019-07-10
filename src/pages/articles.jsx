import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import PostItem from '../components/PostItem'
import MainPageHeader from '../components/MainPageHeader'
import styled from 'styled-components'
import { device } from '../components/Media'

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
  z-index: 2;
  position: relative;

  @media ${device.desktop} {
    grid-gap: 4.5rem;
  }
`

const PostGroup = styled.div`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 4rem;

  @media ${device.desktop} {
    padding-top: 8rem;
  }
`

const PostYear = styled.h2`
  position: absolute;
  font-size: 6rem;
  color: var(--really-subdued-elements-color);
  top: -20px;
  right: 0;
  margin: 0;
  font-weight: 500;

  @media ${device.desktop} {
    font-size: 15rem;
    top: -35px;
  }
`

const ArticlesPage = ({
  location,
  data: {
    allMarkdownRemark
  },
}) => {

  const articles = allMarkdownRemark.group.sort(function(a, b) {
    return (a.fieldValue < b.fieldValue) ? 1 : -1
  })

  const Posts = articles.map(group =>
    <PostGroup key={group.fieldValue}>
      <PostYear>{group.fieldValue}</PostYear>
      <PostList>
        {group.edges.map(edge =>
          <PostItem post={edge.node} key={edge.node.fields.slug} />
        )}
      </PostList>
    </PostGroup>
  );

  return(
    <Layout location={location}>
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <MainPageHeader>
        <h1>Articles</h1>
      </MainPageHeader>
      <div>
        {Posts}
      </div>
    </Layout>
  )
};

export default ArticlesPage

export const articlesQuery = graphql`
  query ArticlesQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/articles/"}},
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      group(field: fields___year) {
        fieldValue
        edges {
          node {
            id
            excerpt(pruneLength: 150)
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;
