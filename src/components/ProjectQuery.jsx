import { graphql, useStaticQuery } from 'gatsby'

const projectList = [
  'shopify-pay-landing',
  'order-status-page',
  'shopify-apple-watch',
  'climate',
  'tipsy',
  'tiny-conf',
]

const projectWithSlug = (array, slug) => {
  return array.filter(obj => { return obj.node.frontmatter.slug === slug})[0]
}

const projectsQuery = () => {
  const { allJavascriptFrontmatter } = useStaticQuery(graphql`
    query {
      allJavascriptFrontmatter(
        filter: {fileAbsolutePath: { regex: "/work\/./" }},
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
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
  `)
  return allJavascriptFrontmatter
}


const useProjectListQuery = (quantity) => {
  const {edges} = projectsQuery()

  var orderedProjects = projectList.map(name => {
    return projectWithSlug(edges, name)
  })

  if (quantity) {
    orderedProjects = orderedProjects.slice(0, quantity)
  }

  return orderedProjects
}

export default useProjectListQuery
