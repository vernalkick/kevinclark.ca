import React from 'react'
import Section from '../../../components/Section'
import {Grid, Column} from '../../../components/ContentGrid'
import {FigCaption} from '../../../components/Figure'
import Project from '../../../templates/project'
import NewFigure from '../../../components/NewFigure'

import heroLight from './wl-hero-light.png'
import heroDark from './wl-hero-dark.png'
import coral from './wl-coral-theme.png'
import dracula from './wl-dracula-theme.png'
import styled from 'styled-components'
import iconsLight from './wl-icons-light.png'
import iconsDark from './wl-icons-dark.png'

const ImageBackground = styled.div`
  background-color: var(--top-background-color);
`

export const frontmatter = {
  company: 'iOS App',
  title: "Weather Line",
  image: './wl-hero-dark.png',
  date: '2019-10-03',
  slug: 'weatherline',
  link: "https://itunes.apple.com/app/apple-store/id715319015?at=11ldjt&ct=weatherlineapp.com%2520app%2520store%2520button&pt=832321&mt=8"
}

const WeatherLine = ({location}) => (
  <Project frontmatter={frontmatter} location={location}>
    <div>
      <Section>
        <Grid>
          <Column width={8}>
            <ImageBackground>
              <picture>
                <source srcset={heroDark} media="(prefers-color-scheme: dark)" />
                <img src={heroLight} alt="Weather Line screenshots" />
              </picture>
            </ImageBackground>
          </Column>
        </Grid>
        <Grid>
          <Column width={6}>
            <h2>The best weather app for iOS just got even better. Super Forecast lets you combine data from the #1 forecasting, rain, and radar services, adds a radar view and tons more.</h2>
          </Column>
        </Grid>
      </Section>
      <Section>

      </Section>

      <Section>
        <Grid>
          <Column width={4} start={5}>
            <p><strong><a href="https://twitter.com/rjonesy">Ryan</a> came to me a few months ago</strong> with a really good idea of what he wanted <a href="http://weatherlineapp.com">Weather Line 2</a> to be. He had a solid feature set and he already had made some rough mockups of the structure of the app. All he needed was someone to solve a few UX problems and visually bring the app to life. Normally I would just say no to projects like this, but I couldn’t pass up the opportunity to collaborate with <a href="https://twitter.com/rjonesy">Ryan</a>.</p>
            <p>Since we worked on the app 100% remotely, working in <a href="http://figma.com">Figma</a> proved invaluable. It allowed us to quickly brainstorm ideas together or asynchronously. </p>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={4}>
            <NewFigure>
              <ImageBackground>
                <img src={coral} alt="Coral theme" />
              </ImageBackground>
              <FigCaption title="Coral Theme">Paired with the Coral iPhone XR</FigCaption>
            </NewFigure>
          </Column>
          <Column width={4}>
            <NewFigure>
              <ImageBackground>
                <img src={dracula} alt="Dracula theme" />
              </ImageBackground>
              <FigCaption title="Dracula theme">Paired with the Purple iPhone 11</FigCaption>
            </NewFigure>
          </Column>
        </Grid>
        <Grid>
          <Column width={6}>
            <h2>We designed the app from the ground up to be themed. Who said weather apps should be boring? Not us. That’s why we took great care in designing themes that actually make you want to look at the weather.</h2>
          </Column>
        </Grid>
      </Section>
      <Section>
        <Grid>
          <Column width={4}>
            <p><strong>The biggest challenge with the app</strong> was about figuring out how to display lots of different information to the user in a way that still felt lightweight and didn’t require entering in and out of pages. I was a big fan of the first version of <a href="http://weatherlineapp.com">Weather Line</a>, so we decided to keep all of the core interactions the same and allowed the details screen to scroll for more information.</p>
            <p>That being said, since icons are such a big part of the app, we used decided it was time to refine the icon set to improve legibility and match iOS 13’s more rounded look.</p>
          </Column>
          <Column width={4}>
            <picture>
              <source srcset={iconsDark} media="(prefers-color-scheme: dark)" />
              <img src={iconsLight} alt="Weather Line icons" />
            </picture>
          </Column>
        </Grid>
      </Section>

    </div>
  </Project>
)

export default WeatherLine
