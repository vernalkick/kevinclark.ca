import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const PostLink = styled(Link)`

`

const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4em;
`

const PostExcerpt = styled.p`
  font-size: 15px;
  line-height: 1.6em;
  opacity: 0.75;
  hyphens: auto;
`

const More = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-top: 1rem;
  display: block;
`

class PostItem extends React.Component {
  render() {
    const { frontmatter, excerpt, fields } = this.props.post;

    // eslint-disable-next-line
    String.prototype.prettify = function() {
      return this.replace(/ (?=[^ ]*$)/i, "\u00A0")
    }

    return (
      <li>
        <PostLink to={fields.slug}>
          <PostTitle>{frontmatter.title.prettify()}</PostTitle>
          <PostExcerpt>{excerpt}</PostExcerpt>
          <More>Read more →</More>
        </PostLink>
      </li>
    )
  }
}

export default PostItem;
