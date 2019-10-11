import React from 'react'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import MainPageHeader from '../components/MainPageHeader'
import { device } from '../components/Media'
import RelatedProjects from '../components/RelatedProjects'
import AppStore from '../assets/appstore.svg'

const PreTitle = styled.span`
  font-size: 20px;
  margin-bottom: 1rem;
  display: block;

  @media ${device.desktopUp} {
    font-size: 24px;
  }
`

const AppStoreLink = styled.a`
  font-size: 18px;
  margin: 0;
  display: block;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`

const AppStoreIcon = styled(AppStore)`
  margin-right: 0.5rem;
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
      {frontmatter.appStoreLink && <AppStoreLink href={frontmatter.appStoreLink}><AppStoreIcon /> <span>Get it on the App Store →</span></AppStoreLink>}
      {children}

      <RelatedProjects currentProjectSlug={frontmatter.slug} />
    </Layout>
  )
}
