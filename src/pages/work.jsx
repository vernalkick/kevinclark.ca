import React from 'react'
import Link from 'gatsby-link'
import MainPageHeader from '../components/MainPageHeader'

const WorkPage = ({
  data: {
    allMarkdownRemark
  },
}) => {
  console.log(allMarkdownRemark.edges.map(project => project))
  return (
    <div>
      <MainPageHeader>Work</MainPageHeader>
      {allMarkdownRemark.edges.map(project =>
        <Link to={project.node.fields.slug} key={project.node.fields.slug}>
          {project.node.frontmatter.title}
        </Link>
      )}
    </div>
  )
};

export default WorkPage;

export const workQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/work/"}},
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
`;
