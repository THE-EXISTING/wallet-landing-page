import React from 'react'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'

import Content from './header_content'
import ContentMock from './header_img'

const SectionContainer = styled.div`
  width: 100%;
  font-family: 'Roboto';
  font-size: 20px;
`

const SectionI = () => (
  <>
    <SectionContainer>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <Content />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContentMock />
        </Grid>
      </Grid>
    </SectionContainer>
  </>
)
export default SectionI
