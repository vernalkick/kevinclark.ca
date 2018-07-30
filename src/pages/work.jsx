import React from 'react'
import Link from 'gatsby-link'
import MainPageHeader from '../components/MainPageHeader'

const WorkPage = ({
  data: {
    allSitePage,
    allJavascriptFrontmatter
  },
}) => {
  console.log(allJavascriptFrontmatter)
  return (
    <div>
      <MainPageHeader>Work</MainPageHeader>
      {allSitePage.edges.map(project =>
        <Link to={project.node.path} key={project.node.path}>
          {project.node.path}
        </Link>
      )}
    </div>
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

    allJavascriptFrontmatter {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }

  }
`;
