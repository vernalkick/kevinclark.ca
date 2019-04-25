import React from 'react'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import MainPageHeader from '../components/MainPageHeader'
import {Media} from '../components/Media'

const PreTitle = styled.span`
  font-size: 20px;
  margin-bottom: 1rem;
  display: block;

  ${Media.desktop`
    font-size: 24px;
  `}
`

export default ({ location, frontmatter, data, children }) => {
  // eslint-disable-next-line
  String.prototype.prettify = function() {
    return this.replace(/ (?=[^ ]*$)/i, "\u00A0")
  }

  return (
    <Layout location={location}>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>

      <MainPageHeader preTitle={frontmatter.company}>
        <PreTitle><strong>{frontmatter.company}</strong> — {frontmatter.date.substring(0,4)}</PreTitle>
        <h1>{frontmatter.title.prettify()}</h1>
      </MainPageHeader>

      {children}
    </Layout>
  )
}
