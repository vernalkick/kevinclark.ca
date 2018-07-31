import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../components/MainPageHeader'
import PostItem from '../components/PostItem'
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

const IndexPage = ({
  data: {
    allMarkdownRemark
  },
}) => {
  return (
    <div>
      <MainPageHeader>
        Designer.<br/>
        Manager.<br/>
        Podcaster.<br/>
        Developer.<br/>
      </MainPageHeader>
      <h2>Latest articles</h2>
      <PostList>
        {allMarkdownRemark.edges.map(edge => <PostItem post={edge.node} key={edge.node.fields.slug} />)}
      </PostList>
    </div>
  )
};

export default IndexPage

export const homeArticlesQuery = graphql`
  query HomeArticlesQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/articles/"}},
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 3
    ) {
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
`;
