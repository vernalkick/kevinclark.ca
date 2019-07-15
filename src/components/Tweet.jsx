import React from 'react'
import styled from 'styled-components'
import Twitter from '../assets/twitter.svg'
import { device } from '../components/Media'

const TweetWrapper = styled.div`
  position: relative;

  @media ${device.tabletUp} {
    margin-bottom: 4rem;
  }
`

const TweetImage = styled.img`
  width: 100%;
`

const TweetContainer = styled.div`
  background: var(--top-background-color);
  padding: 1.5rem;
  box-shadow: 0 18px 43px -10px rgba(0,0,0,0.15);

  @media ${device.desktopUp} {
    padding: 2rem;
    position: absolute;
    bottom: -4rem;
    left: 4rem;
    right: 0;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 0.75rem;
`

const ProfileText = styled.div`
  flex-grow: 1;
`

const Name = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 500;
`

const Username = styled.span`
  color: var(--secondary-text-color);
  font-size: 16px;
  font-family: var(--secondary-font);
  line-height: 1.5;
`

const TweetText = styled.p`
  hanging-punctuation: first;
`

const Tweet = ({ image, profile, name, username, children }) => (
  <TweetWrapper>
    <TweetImage src={image} />
    <TweetContainer>
      <Profile>
        <ProfileImage src={profile} />
        <ProfileText>
          <Name>{name}</Name>
          <Username>{username}</Username>
        </ProfileText>
        <Twitter />
      </Profile>
      <TweetText>{children}</TweetText>
    </TweetContainer>
  </TweetWrapper>
)

export default Tweet
