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
          },
          {
            resolve: "gatsby-remark-component",
            options: { components: ["Figure", "FigCaption"] }
          }
        ],
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
