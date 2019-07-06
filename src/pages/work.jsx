import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import MainPageHeader from '../components/MainPageHeader'
import styled from 'styled-components'
import { Media } from '../components/Media'
import ProjectItem from '../components/Project'

const projects = [
  'shopify-pay-landing',
  'order-status-page',
  'shopify-apple-watch',
  'climate',
  'tipsy',
  'tiny-conf',
  'shopify-gift-cards'
]

const Grid = styled.div`
  margin-top: 1.5rem;
  ${Media.desktop`
    display: grid;
    grid-template-columns: 3.78% 12.28% 22.08% 9.59% 2.03% 8.12% 31.55% 4.71% 5.82%;
    grid-auto-rows: 273px 201px 191px 45px 89px 385px 120px 94px 71px 321px 215px;
    margin-top: -7rem;
  `}

  > * {
    ${Media.desktop`
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

  Array.prototype.objectWithSlug = function(slug) {
    return this.filter(obj => { return obj.node.frontmatter.slug === slug})[0]
  }
  // allJavascriptFrontmatter.edges.filter(obj => { return obj.node.frontmatter.title === 'tipsy'})[0]

  console.log(allJavascriptFrontmatter.edges.objectWithSlug('tipsy').node.frontmatter.title)

  return (
    <Layout location={location}>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <MainPageHeader>
        <h1>Work</h1>
      </MainPageHeader>
      <Grid>
        {projects.map((slug, index) =>
          <ProjectItem index={index} project={allJavascriptFrontmatter.edges.objectWithSlug(slug)} key={allJavascriptFrontmatter.edges.objectWithSlug(slug).node.frontmatter.slug} />
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
