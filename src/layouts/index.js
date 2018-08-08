import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Wrap from '../components/Wrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../layouts/styles.css'

const Layout = ({ location, children, data }) => (
  <div>
    <Helmet
      defaultTitle={data.site.siteMetadata.title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Wrap>
      <Header siteTitle={data.site.siteMetadata.title} pathName={location.pathname} />
      {children()}
      <Footer />
    </Wrap>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
    allJavascriptFrontmatter {
      edges {
        node {
          frontmatter {
            title
            company
          }
        }
      }
    }
  }
`
