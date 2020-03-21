import React from 'react'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import MainPageHeader from '../components/MainPageHeader'
import { device } from '../components/Media'
import RelatedProjects from '../components/RelatedProjects'
import ResourceLink from '../components/ResourceLink'

const PreTitle = styled.span`
  font-size: 20px;
  margin-bottom: 1rem;
  display: block;

  @media ${device.desktopUp} {
    font-size: 24px;
  }
`

const ProjectLink = styled(ResourceLink)`
  margin-top: 1rem;
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
      
      {frontmatter.link && 
        <ProjectLink href={frontmatter.link} />}

      {children}

      <RelatedProjects currentProjectSlug={frontmatter.slug} />
    </Layout>
  )
}
