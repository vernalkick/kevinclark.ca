import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import PostItem from '../components/PostItem'
import MainPageHeader from '../components/MainPageHeader'
import styled from 'styled-components'
import { Media } from '../components/Media'

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
  z-index: 2;
  position: relative;

  ${Media.desktop`
    grid-gap: 4.5rem;
  `}
`

const PostGroup = styled.div`
  position: relative;
  padding-top: 3rem;
  padding-bottom: 4rem;

  ${Media.desktop`
    padding-top: 8rem;
  `}
`

const PostYear = styled.h2`
  position: absolute;
  font-size: 6rem;
  color: var(--really-subdued-elements-color);
  top: -35px;
  right: 0;
  margin: 0;
  font-weight: 500;

  ${Media.desktop`
    font-size: 15rem;
  `}
`

const ArticlesPage = ({
  location,
  data: {
    allMarkdownRemark
  },
}) => {

  const Posts = allMarkdownRemark.group.reverse().map(group =>
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
