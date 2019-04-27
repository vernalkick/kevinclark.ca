import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Wrap from '../components/Wrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../layouts/styles.css'
import {GlobalStyle} from '../components/Typography'

const Layout = ({ location, children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <GlobalStyle />
        <Helmet
          defaultTitle={data.site.siteMetadata.title}
          titleTemplate={`%s — ${data.site.siteMetadata.title}`}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Wrap>
          <Header siteTitle={data.site.siteMetadata.title} pathName={location.pathname} />
          {children}
          <Footer />
        </Wrap>
      </div>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
