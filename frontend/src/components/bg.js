import React from 'react'
import styled from 'styled-components'

import img_bg_header from '../images/app_bg/bg_header.svg'
import img_bg_pattern from '../images/app_bg/bg_pattern.svg'
import img_bg_diamond_i from '../images/app_bg/bg_diamond_1.svg'
import img_bg_diamond_ii from '../images/app_bg/bg_diamond_2.svg'

const BgHeader = styled.div`
  background-image: url(${img_bg_header});
  background-repeat: no-repeat;
  background-size: cover;
  width: 55%;
  height: 80vh;
  min-height: 100px;
  float: right;
  display: flex;

  @media only screen and (max-width: 1050px) {
    width: 68%;
    height: 460px;
  }
  @media only screen and (max-width: 850px) {
    width: 68%;
    height: 400px;
  }

  @media only screen and (max-width: 650px) {
    width: 68%;
    height: 300px;
  }
  @media only screen and (max-width: 400px) {
    width: 68%;
    height: 250px;
  }
`

const BgPattern = styled.div`
  background-image: url(${img_bg_pattern});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 72%;
  height: 900px;
  right: 0;
  top: -0.25em;
  /* left: 1em; */

  @media only screen and (max-width: 850px) {
    width: 90%;
    height: 750px;
  }
`

const ContainerDiamond = styled.div`
  display: flex;
  overflow: hidden;
  padding-top: 200px;
  width: 100%;
  height: 1500px;
  /* background-color: #000; */
`

const BgDiamondI = styled.div`
  background-image: url(${img_bg_diamond_i});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 90%;
  height: 850px;
  margin-left: -40vh;
  z-index: -1;

  @media only screen and (max-width: 450px) {
    width: 105%;
    height: 850px;
  }
`
const BgDiamondII = styled.div`
  background-image: url(${img_bg_diamond_ii});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 1500px;
  float: right;
  margin-left: 47%;
  z-index: -2;
  @media only screen and (max-width: 450px) {
    margin-top: 100px;
    margin-left: 27%;
    width: 100%;
    height: 1250px;
  }
`
const BgContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: -2;
  /* display: flex; */
  overflow: hidden;
`
const LandingBackground = () => (
  <BgContainer>
    <BgHeader />
    <BgPattern />
    <ContainerDiamond>
      <BgDiamondI />
      <BgDiamondII />
    </ContainerDiamond>
  </BgContainer>
)
export default LandingBackground
