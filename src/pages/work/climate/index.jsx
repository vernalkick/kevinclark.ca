import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'

exports.frontmatter = {
  title: "Climate",
  image: './climate-hero.png',
  date: '2018-07-01',
  slug: 'climate'
}

const Climate = () => (
  <div>
    <MainPageHeader>Climate</MainPageHeader>
  </div>
)

export default Climate
