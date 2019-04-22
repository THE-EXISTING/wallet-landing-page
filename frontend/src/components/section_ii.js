import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'

import ButtonHardware from './button_hardware'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import IconLikedGradient from '../images/app_icons/ic_liked_gradient.svg'
import IconButtonAppStore from '../images/app_button/app_store/Text/Inactive.svg'
import IconButtonGooglePlay from '../images/app_button/google_play/Text/Inactive.svg'
import IconButtonChrome from '../images/app_button/chrome/Text/Inactive.svg'

const SectionContainer = styled.div`
  padding-top: 5.5em;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`
const TextCaptionVoting = styled.p`
  opacity: 0.87;
  color: #323c5a;
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
`

const ButtonVoting = styled(Button)`
  /* float: right; */
  width: 78%;
  min-width: 350px !important;
  margin: 0 auto;
  text-align: center;
  white-space: nowrap;
  height: 120px;
  background: #ffffff !important;
  box-shadow: 0 4px 10px 0 rgba(52, 169, 229, 0.3);
  border-radius: 8px !important;
  z-index: 2;
`

const ContentButton = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  /* background-color: #000; */
`
const ContentText = styled.div`
  display: block;
  width: 70%;
  float: left;
`
const IconLike = styled.img`
  margin-top: 0.7px;
  width: 75px;
  height: 75px;
  margin: 4%;

  float: right;
`

const TextQuestion = styled.p`
  text-transform: none;
  text-align: center;
  font-size: 24px;
  color: #32a7e6;
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
  margin-bottom: 0.1em;
  margin-top: 0.7em;
  
`

const TextCaption = styled.p`
  text-transform: none;
  text-align: center;
  font-size: 16px;
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
    color: rgba(50,60,90,0.60);
    letter-spacing: 0.5px;
    line-height: 28px;
`

const DivVoting = styled.div`
  width: 100%;
  padding-top: 35px;
  display: flex;
`
const DivHardware = styled.div`
  width: 60%;
  padding-top: 35px;
  display: flex;
  margin: 0 auto;
`
const DivTextNumberVoted = styled.div`
  margin-top: 1.6em;
  display: block;
  white-space: nowrap;
  width: 100%;
  /* background-color: #000; */
  /* text-align: center; */
  @media only screen and (max-width: 600px) {
    padding-top: 2.05em;
  }
`

const TextVoted = styled.p`
text-align: center;
  opacity: 0.87;
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
  font-size: 34px;
  color: #323c5a;
  letter-spacing: 0.25px;
  margin-bottom: 10px;
  /* text-align: left; */
`
const TextDetialVoted = styled.p`
  text-align: center;
  font-family: 'Roboto';
  font-size: 16px;
  color: rgba(50, 60, 90, 0.6);
  letter-spacing: 0.5px;
  /* text-align: left; */
  line-height: 28px;
`

const WebVotingSectionII = () => (
  <>
    <SectionContainer>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={12}>
          <TextCaptionVoting>
            How do you feel insterested about our wallet?
          </TextCaptionVoting>
        </Grid>
      </Grid>

      <DivVoting>
        <Grid container spacing={0} justify="center">
          <Grid item xs={12} sm={3}>
            <ButtonVoting>
              <ContentButton>
                <IconLike src={IconLikedGradient} />
                <ContentText>
                  <TextQuestion>Sound interesting ?</TextQuestion>
                  <TextCaption>Let’s treat us with your click</TextCaption>
                </ContentText>
              </ContentButton>
            </ButtonVoting>
          </Grid>
          <Grid item xs={12} sm={3}>
            <DivTextNumberVoted>
              <TextVoted>100,001 Likes </TextVoted>
              <TextDetialVoted>This hardware wallet project</TextDetialVoted>
            </DivTextNumberVoted>
          </Grid>
        </Grid>
      </DivVoting>

      <DivVoting>
        <Grid container spacing={0} justify="center">
          {/* <Grid item sm={3} /> */}
          <Grid item xs={12} sm={2}>
            <ButtonHardware
              pathIcon={IconButtonAppStore}
              textdetail="Hardware encrypt with KNOX"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <ButtonHardware
              pathIcon={IconButtonGooglePlay}
              textdetail="Hardware encrypt with Keychain"
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <ButtonHardware pathIcon={IconButtonChrome} textdetail="" />
          </Grid>
          {/* <Grid item sm={3} /> */}
        </Grid>
      </DivVoting>
    </SectionContainer>
  </>
)
export default WebVotingSectionII
