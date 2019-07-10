import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import { device } from '../components/Media'
import PostItem from '../components/PostItem'

const Container = styled.div`
  border-top: 2px solid var(--subdued-elements-color);
  padding-top: 4rem;
  margin-top: 5rem;
  display: grid;
  grid-row-gap: 1.5em;

  @media ${device.mobileLargeUp} {
    grid-template-columns: 25% auto;
  }

  @media ${device.desktopUp} {
    grid-template-columns: 45% auto;
  }
`

const Grid = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
        query RelatedArticlesQuery {
          allMarkdownRemark(
            filter: {fileAbsolutePath: { regex: "/articles/"}},
            sort: { order: DESC, fields: [frontmatter___date] }
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
      `}
      render={data => {
          var articles = shuffle(data.allMarkdownRemark.edges)
              articles = articles.slice(0,2)

          return (
            <Container>
              <h4>Up Next</h4>
              <Grid>
                {articles.map((article, index) =>
                  <PostItem post={article.node} />
                )}
              </Grid>
            </Container>
          )
        }
      }
    />
  )
}
