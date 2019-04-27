import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import {Media} from '../components/Media'
import PostItem from '../components/PostItem'

const Container = styled.div`
  border-top: 2px solid #fff;
  padding-top: 3rem;
  margin-top: 5rem;
  ${Media.desktop`
    display: grid;
    grid-template-columns: 45% 55%;
  `}
`

const Grid = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 2rem 0;

  ${Media.desktop`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 126px 246px;
    grid-column-gap: 2.5rem;
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
