import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Media } from '../components/Media'
import MainPageHeader from '../components/MainPageHeader'

const MainColumn = styled.div`
  ${Media.desktop`
    padding-left: 45%;
  `}
`

const Portrait = styled.img`
  display: block;
  width: 65%;
  float: right;
  margin: -4.6rem -15% 2rem 2rem;
`


class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <MainPageHeader>About Me</MainPageHeader>
        <MainColumn>
          <Portrait src="http://kevinclark.ca/assets/about-picture.jpg" />
          <p>I’m a Product Designer at Shopify, I run the Montreal Dribbble meetups and I make apps in my spare time. I live and work in the beautiful city of Montreal in Canada.</p>
          <p>I’m just a normal guy who likes making stuff. I’m lucky enough that this passion for crafting and designing experiences also happens to be a job that you can make a good living from. Lately, what really gets me going is creating products. Tools that people can use and interact with. It’s not always the easiest task, but it’s definitely the most rewarding. I also run the Montreal Dribbble Meetups, a great way to get to know the people behind the 300 x 400 shots. We love meeting new people. If you’re in town, don’t forget to say hi!</p>
          <p>I’ve designed things for Bell Media, Busbud, H-Grégoire, OKAM and many more. How did I get there? Hard work? Luck? Probably a bit of both, but I’m currently a product designer at Shopify. We’re completely redefining what it means to run a successful business online (and off!) We’re working hard everyday to make starting your passion project accessible to anyone. It’s a fun challenge.</p>
          <h3>Side Projects</h3>
          <p>In my spare time, I’m dabbling in the world of iOS design and development. Being able to take an idea and execute on it from start to finish is really empowering. Plus, the mobile phone screen is a really interesting medium to experiment with.</p>
          <p>Keep an eye on my Dribbble account to see the behind the scenes of whatever I'm hacking on these days.</p>
        </MainColumn>
      </div>
    )
  }
}

export default AboutPage;
