import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import MainPageHeader from '../components/MainPageHeader'
import styled from 'styled-components'
import { Media } from '../components/Media'
import ProjectItem from '../components/Project'

// const order = {
//   'tipsy',
//   'tiny-conf',
//   'shopify-pay-landing',
//   'shopify-gift-cards',
//   'shopify-apple-watch',
//   'order-status-page',
//   'climate'
// }

const Grid = styled.div`
  margin-top: 1.5rem;
  ${Media.desktop`
    display: grid;
    grid-template-columns: 3.78% 12.28% 22.08% 9.59% 2.03% 8.12% 31.55% 4.71% 5.82%;
    grid-auto-rows: 273px 201px 191px 45px 89px 385px 120px 94px 71px 321px 215px;
    margin-top: -7rem;
  `}

  > * {
    height: 200px;
    margin-top: 1rem;

    ${Media.desktop`
      height: auto;
      margin-top: 0;
      ${gridposition()}
    `}
  }
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

const WorkPage = ({
  location,
  data: {
    allSitePage,
    allJavascriptFrontmatter
  },
}) => {
  return (
    <Layout location={location}>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <MainPageHeader>
        <h1>Work</h1>
      </MainPageHeader>
      <Grid>
        {allJavascriptFrontmatter.edges.map((project, index) =>
          <ProjectItem index={index} project={project} key={project.node.frontmatter.slug} />
        )}
      </Grid>
    </Layout>
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
