module.exports = {
  siteMetadata: {
    title: 'Kevin Clark',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/articles`,
        name: "articles",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    'gatsby-plugin-sharp',
    `gatsby-remark-images`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-component",
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent'
            },
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/articles`,
        defaultLayouts: {
          default: require.resolve("./src/templates/articles-layout.js"),
        },

      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          "gatsby-remark-component",
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent'
            },
          }
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          include: /assets/
      }
    }
  ],
}
