import React from 'react'
import styled from 'styled-components'
import { withPrefix } from 'gatsby'

const Container = styled.div`
  width: 75%;
  font-family: 'Roboto';
  margin-left: 25%;
  margin-top: 30%;
  text-align: left;
  @media only screen and (max-width: 600px) {
    margin-left: 6%;
  }
`

const TextContent = styled.p`
  white-space: nowrap;
  opacity: 0.87;
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
  font-size: 34px;
  color: #323C5A;
  letter-spacing: 0.25px;
  text-align: left;
  margin: 15px;

  /* font-size: 2em;
  color: #323c5a;
  opacity: 87%; */
  
  @media only screen and (max-width: 600px) {
    margin: 5px;
    font-size: 22px;
  }
`
const DetailContent = styled.p`
  font-family: 'Roboto';
  /* font-size: 0.9em; */
  font-size: 16px;
  margin: 15px;
  padding-top: 15px;
  color: rgba(50, 60, 90, 0.6);
  letter-spacing: 0.5px;
  line-height: 28px;

  @media only screen and (max-width: 600px) {
    margin: 5px;
  }
`
const TagContent = styled.p`
  font-family: AvenirNext-Medium;
  src: url("${withPrefix('/font/avenirnext_medium.ttf')}") format('truetype');
  color: #323c5a;
  /* font-size: 0.85em; */
  margin: 15px;
  opacity: 0.6;
  /* font-family: AvenirNext-Medium; */
  font-size: 16px;
  color: #323C5A;
  letter-spacing: 0.5px;
  text-align: left;
  line-height: 28px;

  @media only screen and (max-width: 600px) {
    margin: 5px;
  }
`
const Content = () => (
  <Container>
    <TagContent>DELLET</TagContent>
    <TextContent>Hardware wallet</TextContent>
    <TextContent> as an app on mobile</TextContent>
    <DetailContent>
      Pure Cryptocurrency wallet named Dellet. This wallet can hold your
      Bitcoin, Ethereum, Litecoin and all ERC20 compatible coins. Simplicities
      and securities are our foremost priority.
    </DetailContent>
  </Container>
)
export default Content
