import React from 'react'
import styled from 'styled-components';

import DeviceImage from '../assets/images/ipad-pro.png'
import DeviceShadowImage from '../assets/images/ipad-pro-shadow.png'

const Container = styled.div`
  position: relative;
`

const Device = styled.img`
  z-index: 2;
`

const DeviceShadow = styled.img`
  position: absolute;
  left: -3.22%;
  top: -4.5%;
  width: 122.88%;
  max-width: none;
  z-index: -1;
`

const Screen = styled.div`
  position: absolute;
  left: 3.25%;
  top: 7.6%;
  right: 3.25%;
  bottom: 4.4%;
  border-radius: 1.5%/1.75%;
  z-index: 3;
  overflow: hidden;
`

const IpadPro = ({ children }) => (
  <Container>
    <Screen>
      {children}
    </Screen>
    <Device src={DeviceImage} />
    <DeviceShadow src={DeviceShadowImage} alt=""/>
  </Container>
)

export default IpadPro
