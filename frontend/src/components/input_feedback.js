import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'
import Button from '@material-ui/core/Button'

import IconNextGradient from '../images/app_icons/ic_nextarrow_gradient.svg'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 2em;
  text-align: left;
  display: block;

  @media only screen and (max-width: 600px) {
    margin-top: -2em;
    text-align: center;
  }
`
const TextContent = styled.p`
    white-space: nowrap;
    opacity: 0.87;
    font-family: AvenirNext-Medium;
    src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
    font-size: 24px;
    color: #323C5A;
    margin-bottom: 5px;
    text-align: left;
  
    @media only screen and (max-width: 600px) {
        /* margin: 5px; */
        text-align: center;
        font-size: 20px;
  }
`

const TextDetail = styled.p`
  /* white-space: nowrap; */
  font-family: 'Roboto';
  font-size: 16px;
  color: rgba(50, 60, 90, 0.6);
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
  margin-top: 15px;

  @media only screen and (max-width: 600px) {
    /* white-space: normal; */
    /* margin: 5px; */
    text-align: center;
    font-size: 14px;
  }
`

const InputEmail = styled.input`
  
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
  font-size: 16px;
  color: #323c5a;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
  padding-left: 15px;
  width: 90%;
  height: 48px;
  max-width: 443px;
  background: #ffffff;
  border: 2px solid #9b9b9b;
  border-radius: 8px;
 :focus {
    border: 2px solid #32A7E6;
    
    /* outline: 0; */
 }
`
const InputDetail = styled.textarea`
  margin-top: 20px;
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
  font-size: 16px;
  color: #323c5a;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;
  padding-left: 15px;
  padding-top: 20px;
  width: 90%;
  height: 300px;
  max-width: 443px;
  background: #ffffff;
  border: 2px solid #9b9b9b;
  border-radius: 8px;
  resize: none;
 :focus {
    border: 2px solid #32A7E6;
    /* outline: 0; */
 }
`
const WrapScreen = styled.div`
  width: 100%;
  height: 200px;
  text-align: center;
  display: flex;
  position: relative;
  background-color: #000;
`
const WrapButton = styled.div`
  margin-top: 16px;
  width: 90%;
  max-width: 443px;
  height: 200px;

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
    margin-top: 16px;
  }
`

const ButtonSubmit = styled(Button)`
  width: 180px;
  height: 48px;
  display: block;
  border: 2px solid #32a7e6 !important;
  border-radius: 28px !important;
  text-align: center;
  float: right;

  background-image: url(${IconNextGradient});
  background-size: 20px;
  background-position: right 0.5em top 0.75em;
  background-repeat: no-repeat;
`
const TextSubmit = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #32a7e6;
  letter-spacing: 1.25px;
  text-align: center;
  line-height: 16px;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
`

const FormFeedBack = () => (
  <Container>
    <TextContent>What’s feature would you like</TextContent>
    <TextContent>to see on the our app.</TextContent>
    <TextDetail>
      and you will be the first to get the great promotion from us.
    </TextDetail>
    <InputEmail
      placeholder="E-mail"
      type="email"
      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
    />
    <InputDetail type="text" placeholder="Write something …" />
    {/* <WrapScreen> */}
    <WrapButton>
      <ButtonSubmit>
        <TextSubmit>Submit</TextSubmit>
      </ButtonSubmit>
    </WrapButton>
    {/* </WrapScreen> */}
  </Container>
)
export default FormFeedBack
