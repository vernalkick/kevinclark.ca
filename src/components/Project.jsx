import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Project = styled(Link)`
  background: var(--dark-tiles);
  overflow: hidden;
  position: relative;
  padding-left: 120px;
  transition: box-shadow .3s ease-in-out;
  box-shadow: 0 45.4px 70px -20.4px rgba(0,0,0,0.3);
  display: block;

  &:hover {
    box-shadow: 0 45.4px 100px -20.4px rgba(0,0,0,0.5);

    & img {
      transform: scale(1.075);
    }
  }
`

const Title = styled.span`
  color: #fff;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 18px;
  font-weight: 500;
  width: 120px;
  line-height: 1.3;
`

const Image = styled.img`
  float: right;
  height: 100%;
  object-fit: cover;
  object-position: 0 50%;
  width: calc(100% - 30px);
  transition: transform 1s ease-out;
`

const Number = styled.span`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: var(--secondary-font);
`


class ProjectItem extends React.Component {
  render() {
    const { index, project } = this.props;
    const { frontmatter } = project.node;
    const { image, slug, title } = frontmatter;
    const url = '/work/' + slug

    return (
      <Project to={url}>
        {image && <Image src={image.publicURL} /> }
        <Title>{title}</Title>
        <Number>0{index + 1}</Number>
      </Project>
    )
  }
}

export default ProjectItem;
