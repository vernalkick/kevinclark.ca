import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Item = styled.li`
  & + & {
    margin-top: 0;
  }
`

const PostLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-weight: normal;
  
  &:hover {
    background: transparent;
  }
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

const MoreArrow = styled.span`
  display: inline-block;
  transition: transform .2s ease-in-out;
  
  ${Item}:hover & {
    transform: translateX(5px);
  }
`

class PostItem extends React.Component {
  render() {
    const { frontmatter, excerpt, fields } = this.props.post;

    // eslint-disable-next-line
    String.prototype.prettify = function() {
      return this.replace(/ (?=[^ ]*$)/i, "\u00A0")
    }

    return (
      <Item>
        <PostLink to={fields.slug}>
          <PostTitle>{frontmatter.title.prettify()}</PostTitle>
          <PostExcerpt>{excerpt}</PostExcerpt>
          <More>Read more <MoreArrow>→</MoreArrow></More>
        </PostLink>
      </Item>
    )
  }
}

export default PostItem;
