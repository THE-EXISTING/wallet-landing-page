import React from 'react'
import styled from 'styled-components'
import ipadMock from '../images/app_mockup/ipad_pro/mock_transaction_result.svg'
import iphoneMock from '../images/app_mockup/iphone/mock_dashboard.svg'

const Container = styled.div`
  display: flex;
  overflow: hidden;
`
const RotateGroup = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  overflow: hidden;
  margin-top: 7.75em;
  -ms-transform: rotate(-12deg); /* IE 9 */
  -webkit-transform: rotate(-12deg); /* Safari */
  transform: rotate(-12deg);
  @media only screen and (max-width: 600px) {
    margin-top: 2.05em;
  }
`
const WrapImageIpad = styled.div`
  width: 64%;
  margin-top: 4.25em;
  text-align: right;
`
const WrapImageIphone = styled.div`
  width: 36%;
  margin-left: -20px;
  text-align: left;
`

const ContentImg = () => (
  <Container>
    <RotateGroup>
      <WrapImageIpad>
        <img src={ipadMock} />
      </WrapImageIpad>
      <WrapImageIphone>
        <img src={iphoneMock} />
      </WrapImageIphone>
    </RotateGroup>
  </Container>
)
export default ContentImg
