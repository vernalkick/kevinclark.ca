import React from 'react'
import Layout from '../layouts/layout'
import Helmet from 'react-helmet'
import MainPageHeader from '../components/MainPageHeader'
import useProjectListQuery from '../components/ProjectQuery'
import styled from 'styled-components'
import { device } from '../components/Media'
import ProjectItem from '../components/Project'

const Grid = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  --spacing-multiplier: 0.5;

  @media ${device.mobileLargeDown} {
    > *:nth-child(6n + 1) {
      padding-bottom: 72%;
      margin-left: 10%;
    }

    > *:nth-child(6n + 2) {
      padding-bottom: 100%;
      margin-right: 40%;
    }

    > *:nth-child(6n + 3) {
      padding-bottom: 90%;
      margin-left: 25%;
    }

    > *:nth-child(6n + 4) {
      padding-bottom: 78%;
    }

    > *:nth-child(6n + 5) {
      padding-bottom: 100%;
      margin-left: 30%;
      margin-right: 10%;
    }

    > *:nth-child(6n + 6) {
      margin-right: 30%;
      padding-bottom: 100%;
    }
  }

  @media ${device.tabletUp} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    margin-top: -6rem;

    > *:nth-child(6n + 1) {
      margin-top: 50%;
      padding-bottom: 76%;
    }

    > *:nth-child(6n + 2) {
      margin-bottom: 35%;
      margin-left: calc(20% * var(--spacing-multiplier));
      margin-right: calc(20% * var(--spacing-multiplier));
      padding-bottom: 72%;
    }

    > *:nth-child(6n + 3) {
      margin-top: 20%;
      margin-left: calc(40% * var(--spacing-multiplier));
      padding-bottom: 68%;
    }

    > *:nth-child(6n + 4) {
      margin-top: 5%;
      margin-left: calc(20% * var(--spacing-multiplier));
      margin-bottom: 30%;
      padding-bottom: 75%;
    }

    > *:nth-child(6n + 5) {
      margin-top: 30%;
      margin-right: calc(30% * var(--spacing-multiplier));
      padding-bottom: 80%;
    }

    > *:nth-child(6n + 6) {
      margin-right: calc(20% * var(--spacing-multiplier));
      margin-top: 20%;
      margin-bottom: 40%;
      padding-bottom: 65%;
    }
  }


  @media ${device.desktop} {
    margin-top: -10rem;
    --spacing-multiplier: 1;
  }
`

export default ({location}) => {
  const projects = useProjectListQuery()

  return (
    <Layout location={location}>
      <Helmet>
        <title>Work</title>
      </Helmet>
      <MainPageHeader>
        <h1>Work</h1>
      </MainPageHeader>
      <Grid>
        {projects.map((project, index) =>
          <ProjectItem index={index} project={project} key={index} />
        )}
      </Grid>
    </Layout>
  )
};
