import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import {device} from '../components/Media'
import ProjectItem from '../components/Project'

const Container = styled.div`
  border-top: 2px solid var(--subdued-elements-color);
  padding-top: 3rem;
  margin-top: 5rem;
`

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 246px;
  grid-gap: 1rem;
  margin-top: 1.5rem;

  @media ${device.tabletUp} {
    margin-top: 0;
    display: grid;
    grid-template-columns: 5fr 8fr;
    grid-auto-rows: 126px 246px;
    grid-gap: 2.5rem;
    grid-template-areas:
      ". firstProject"
      "secondProject firstProject";

    > *:nth-child(1) {
      grid-area: firstProject;
    }

    > *:nth-child(2) {
      grid-area: secondProject;
    }
  }
`

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default ({currentProjectSlug}) => {
  return (
    <StaticQuery
      query={graphql`
        query RelatedProjectsQuery {
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
      `}
      render={data => {
          var projects = data.allJavascriptFrontmatter.edges
              projects = projects.filter(el => el.node.frontmatter.slug !== currentProjectSlug)
              projects = shuffle(projects).slice(0,2)

          return (
            <Container>
              <h4>Up Next</h4>
              <Grid>
                {projects.map((project, index) =>
                  <ProjectItem project={project} index={index} key={index} />
                )}
              </Grid>
            </Container>
          )
        }
      }
    />
  )
}
