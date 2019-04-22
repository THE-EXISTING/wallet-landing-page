import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const Container = styled.div`
  width: 100%;
  text-align: center;
  display: block;
  padding: 10px;

  @media only screen and (max-width: 650px) {
    padding-left: 10%;
    margin-top: 0px;
    margin-bottom: 1.3em;
    text-align: center;
    width: 100%;
    display: flex;
    /* float: center; */
    overflow: hidden;
  }
`
const ButtonHardware = styled(Button)`
  width: 90%;
  height: 64px;
  min-width: 200px !important;
  min-height: 64px !important;
  border: 2px solid #9b9b9b !important;
  border-radius: 10px !important;

  @media only screen and (max-width: 650px) {
    width: 40%;
    padding-left: 14px;
    min-width: 200px !important;
    /* float: center; */
  }
`

const DetailButton = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: rgba(0, 0, 0, 0.38);
  letter-spacing: 0.4px;
  text-align: center;
  line-height: 16px;
  padding-top: 5px;
  @media only screen and (max-width: 650px) {
    /* width: 45%; */

    margin-left: 1.5em;
    margin-top: 0.5em;
    text-align: left;
  }
`
const IconButton = styled.img`
  /* height: 64px; */
  /* width: auto; */
  margin: 2.4px;
`

const Hardware = props => (
  <Container>
    <ButtonHardware>
      <IconButton src={props.pathIcon} />
    </ButtonHardware>
    <DetailButton>{props.textdetail}</DetailButton>
  </Container>
)
export default Hardware
