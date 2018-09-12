import React from 'react'
import Link from 'gatsby-link'
import MainPageHeader from '../components/MainPageHeader'
import styled from 'styled-components'
import { Media } from '../components/Media'

const Grid = styled.div`
  margin-top: 1.5rem;
  ${Media.desktop`
    display: grid;
    grid-template-columns: 3.78% 12.28% 22.08% 9.59% 2.03% 8.12% 31.55% 4.71% 5.82%;
    grid-auto-rows: 273px 201px 191px 45px 89px 385px 120px 94px 71px 321px 215px;
    margin-top: -7rem;
  `}
`

export function gridposition() {
  let css = ""
  for (let index = 0; index < 5; index++) {
    css += `
    &:nth-child(${1 + 6 * index}) {
      grid-column-start: 1;
      grid-column-end: span 4;
      grid-row-start: ${2 + 11 * index};
      grid-row-end: span 2;
    }

    &:nth-child(${2 + 6 * index}) {
      grid-column-start: 7;
      grid-column-end: span 1;
      grid-row-start: ${1 + 11 * index};
      grid-row-end: span 2;
    }

    &:nth-child(${3 + 6 * index}) {
      grid-column-start: 3;
      grid-column-end: span 2;
      grid-row-start: ${6 + 11 * index};
      grid-row-end: span 2;
    }

    &:nth-child(${4 + 6 * index}) {
      grid-column-start: 7;
      grid-column-end: span 3;
      grid-row-start: ${5 + 11 * index};
      grid-row-end: span 2;
    }

    &:nth-child(${5 + 6 * index}) {
      grid-column-start: 2;
      grid-column-end: span 2;
      grid-row-start: ${10 + 11 * index};
      grid-row-end: span 2;
    }

    &:nth-child(${6 + 6 * index}) {
      grid-column-start: 6;
      grid-column-end: span 3;
      grid-row-start: ${9 + 11 * index};
      grid-row-end: span 2;
    }
    `
  }

  return css
}

const GridElement = styled(Link)`
  background: #333;
  overflow: hidden;
  position: relative;
  padding-left: 120px;
  transition: box-shadow .3s ease-in-out;
  box-shadow: 0 45.4px 70px -20.4px rgba(0,0,0,0.3);
  display: block;
  height: 200px;
  ${gridposition()}

  & + & {
    margin-top: 1rem;
  }

  ${Media.desktop`
    height: auto;

    & + & {
      margin-top: 0;
    }
  `}

  &:hover {
    box-shadow: 0 45.4px 100px -20.4px rgba(0,0,0,0.5);

    & img {
      transform: scale(1.075);
    }
  }
}
`

const Project = styled.a`
  
`

const ProjectTitle = styled.span`
  color: #fff;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 18px;
  font-weight: 500;
  width: 120px;
  line-height: 1.3;
`

const ProjectImage = styled.img`
  float: right;
  height: 100%;
  object-fit: cover;
  object-position: 0 50%;
  width: calc(100% - 30px);
  transition: transform 1s ease-out;
`

const ProjectNumber = styled.span`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--secondary-font);
`

const WorkPage = ({
  data: {
    allSitePage,
    allJavascriptFrontmatter
  },
}) => {
  console.log(allSitePage)
  console.log(allJavascriptFrontmatter)
  return (
    <div>
      <MainPageHeader>Work</MainPageHeader>
      <Grid>
        {allJavascriptFrontmatter.edges.map((project, index) =>
          <GridElement to={'/work/' + project.node.frontmatter.slug} key={project.node.frontmatter.slug}>
            {project.node.frontmatter.image && <ProjectImage src={project.node.frontmatter.image.publicURL} /> }
            <ProjectTitle>{project.node.frontmatter.title}</ProjectTitle>
            <ProjectNumber>0{index + 1}</ProjectNumber>
          </GridElement>
        )}
      </Grid>
    </div>
  )
};

export default WorkPage;

export const workQuery = graphql`
  query WorkQuery {
    allSitePage(filter: {path: { regex: "/work\/./" }}) {
      edges {
        node {
          path
        }
      }
    }

    allJavascriptFrontmatter(filter: {fileAbsolutePath: { regex: "/work\/./" }}, sort: { order: DESC, fields: [frontmatter___date] }) {
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
