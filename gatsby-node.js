/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    if (node.frontmatter.date != null) {
      createNodeField({
        node,
        name: `year`,
        value: node.frontmatter.date.substring(0, 4),
      })
    }

    const slugPrefixRegex = /\/src\/(.*?)\//g
    const slugPrefix = slugPrefixRegex.exec(node.fileAbsolutePath)[1]

    createNodeField({
      node,
      name: `type`,
      value: `${slugPrefix}`,
    })

    createNodeField({
      node,
      name: `slug`,
      value: `/${slugPrefix}${slug}`,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug,
                type
              }
            }
          }
        }
      }
    `
).then(result => {
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.type}.jsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
      resolve()
    })
  })
};