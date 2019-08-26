import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import styled from 'styled-components'
import MainPageHeader from '../components/MainPageHeader'
import PostItem from '../components/PostItem'
import ProjectItem from '../components/Project'
import { device } from '../components/Media'
import Twitter from '../assets/twitter.svg'
import FeaturedContentSection from '../components/FeaturedContentSection'
import HomeProfilePicture from '../components/HomeProfilePicture'
import useProjectListQuery from '../components/ProjectQuery'

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

  @media ${device.desktop} {
    grid-gap: 4.5rem;
  }
`

const TwitterLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  margin-top: 1.5rem;
  display: inline-block;

  @media ${device.tabletUp} {
    margin-top: 3rem;
  }
`

const HomeHeaderContainer = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  @media ${device.tabletUp} {
    margin-bottom: 6.5rem;
  }
`

const ProfilePictureContainer = styled.div`
  position: absolute;
  left: 70%;
  top: 4em;
  width: 45%;

  @media ${device.mobileLargeDown} {
    display: none;
  }
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.5rem;

  > * {
    padding-bottom: 50%;
  }

  @media ${device.mobileLargeDown} {
    margin-left: -1em;
    width: calc(100% + 2em);
  }

  @media ${device.mobileLargeUp} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1.5rem;

    > :nth-child(1) {
      grid-column-end: span 2;
      padding-bottom: 50%;
    }

    > :nth-child(2) {
      padding-bottom: 50%;
      margin-bottom: 15%;
    }

    > :nth-child(3) {
      padding-bottom: 92%;
    }
  }

  @media ${device.desktopUp} {
    grid-gap: 3rem;
  }
`

const IndexPage = ({
  location,
  data: {
    allMarkdownRemark
  },
}) => {
  const projects = useProjectListQuery(3)

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
        <TwitterLink href="https://twitter.com/vernalkick"><Twitter /> Follow me on Twitter →</TwitterLink>

        <ProfilePictureContainer>
          <HomeProfilePicture src={profilePicture} />
        </ProfilePictureContainer>
      </HomeHeaderContainer>

      <FeaturedContentSection title="Selected Projects" url="/work">
        <ProjectContainer>
          {projects.map((project, index) =>
            <ProjectItem index={index} project={project} key={index} />
          )}
        </ProjectContainer>
      </FeaturedContentSection>

      <FeaturedContentSection title="Latest Articles" url="/articles">
        <PostList>
          {allMarkdownRemark.edges.map(edge => <PostItem post={edge.node} key={edge.node.fields.slug} />)}
        </PostList>
      </FeaturedContentSection>
    </Layout>
  )
};

export default IndexPage

export const homeArticlesQuery = graphql`
  query HomeArticlesQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/articles/"}},
      sort: { order: DESC, fields: [frontmatter___date] },
      limit: 6
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

    allJavascriptFrontmatter(
      filter: { fileAbsolutePath: { regex: "/work\/./" } },
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
            slug
            image {
              publicURL
            }
          }
        }
      }
    }

  }
`;
