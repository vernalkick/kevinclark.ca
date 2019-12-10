/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
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
      value: `articles-layout`,
    })

    createNodeField({
      node,
      name: `slug`,
      value: `/${slugPrefix}${slug}`,
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx {
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
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${node.fields.type}.js`),
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
