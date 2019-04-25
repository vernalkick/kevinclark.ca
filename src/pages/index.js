import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import styled from 'styled-components'
import MainPageHeader from '../components/MainPageHeader'
import PostItem from '../components/PostItem'
import { Media } from '../components/Media'
import Twitter from '../assets/twitter.svg'

import profilePicture from '../assets/images/profile.jpg'

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

const TwitterLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  margin-top: 3rem;
  display: inline-block;
`

const HomeHeaderContainer = styled.div`
  position: relative;
  margin-bottom: 6.5rem;
`

const HomeAvatar = styled.img`
  position: absolute;
  left: 70%;
  top: 6em;
  width: 45%;
`

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;

  ${Media.desktop`
    font-size: 36px;
  `}
`

const IndexPage = ({
  location,
  data: {
    allMarkdownRemark
  },
}) => {
  return (
    <Layout location={location}>
      <HomeHeaderContainer>
        <MainPageHeader>
          <h1>
            Designer.<br/>
            Manager.<br/>
            Podcaster.<br/>
            Developer.<br/>
          </h1>
        </MainPageHeader>
        <TwitterLink href="https://twitter.com/vernalkick"><Twitter /> Follow me on Twitter</TwitterLink>
        <HomeAvatar src={profilePicture} alt=""/>
      </HomeHeaderContainer>

      <SectionTitle>Latest articles</SectionTitle>
      <PostList>
        {allMarkdownRemark.edges.map(edge => <PostItem post={edge.node} key={edge.node.fields.slug} />)}
      </PostList>
    </Layout>
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
