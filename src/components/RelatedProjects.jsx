import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import {Media} from '../components/Media'
import ProjectItem from '../components/Project'

const Container = styled.div`
  border-top: 2px solid #fff;
  padding-top: 3rem;
  margin-top: 5rem;
`

const Grid = styled.div`
  ${Media.desktop`
    display: grid;
    grid-template-columns: 5fr 8fr;
    grid-auto-rows: 126px 246px;
    grid-column-gap: 2.5rem;

    > *:nth-child(1) {
      grid-row-start: 2;
      grid-row-end: span 1;
    }

    > *:nth-child(2) {
      grid-row-start: 1;
      grid-row-end: span 2;
    }
  `}
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

export default () => {
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
          var projects = shuffle(data.allJavascriptFrontmatter.edges)
              projects = projects.slice(0,2)

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
