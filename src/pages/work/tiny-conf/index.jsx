import React from 'react'
import styled from 'styled-components'
import MainPageHeader from '../../../components/MainPageHeader'

exports.frontmatter = {
  title: "Tiny Conf",
  image: './tiny-conf-thumb.png',
  date: '2018-04-01'
}

const TinyConf = () => (
  <div>
    <MainPageHeader>Tiny Conf</MainPageHeader>
  </div>
)

export default TinyConf
