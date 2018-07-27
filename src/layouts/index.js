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
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Wrap>
      <Header siteTitle={data.site.siteMetadata.title} pathName={location.pathname} />
      {/* {data.allJavascriptFrontmatter.edges.map(edge =>
        <p>{edge.node.frontmatter.title}</p>
      )} */}
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
