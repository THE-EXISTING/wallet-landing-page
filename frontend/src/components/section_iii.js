import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

import InputFeedBackForm from './input_feedback'

import ImageIphoneDashboard from '../images/app_mockup/iphone/mock_dashboard.svg'
import ImageIphoneTransaction from '../images/app_mockup/iphone/mock_transaction.svg'

const SectionContainer = styled.div`
  padding-top: 5.5em;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  /* background-color: green;
  border-style: solid;
  border-width: 2px; */
`
const MockContainer = styled.div`
  width: 100%;
  margin-left: -1em;
  position: relative;
  overflow: hidden;
  text-align: center;
  /* background-color: green;
  border-style: solid;
  border-width: 2px; */
  @media only screen and (max-width: 600px) {
    display: none;
  }
`
const MockIphoneTransaction = styled.img`
  z-index: 1;
  width: 36%;
  margin-left: -11%;
  margin-top: 3.6em;
`

const MockIphoneDashboard = styled.img`
  /*  FRONT */
  width: 45%;
  z-index: 3;
  position: absolute;
  margin-left: 12%;
  margin-top: 0.35em;
`

const SectionIII = () => (
  <div>
    <SectionContainer>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <MockContainer>
            <MockIphoneDashboard src={ImageIphoneDashboard} />
            <MockIphoneTransaction src={ImageIphoneTransaction} />
          </MockContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputFeedBackForm />
        </Grid>
      </Grid>
    </SectionContainer>
  </div>
)
export default SectionIII
