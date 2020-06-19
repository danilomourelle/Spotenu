import React from 'react'
import styled from 'styled-components'
import { BtnGreen, BtnWhite } from '../../components/Buttons'

const Wrapper = styled.div`
  width: 100%;
  height: 540px;
  background-color: #FFCDD2;
  padding: 80px  15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
`
const Titulo = styled.h1`
  font-size: 80px;
  font-weight:900;
  width: 70%;
  text-align:center;
  @media(max-width: 1200px){
    font-size: 55px;
  }
`
const SubTitle = styled.h3`
  font-size: 30px;
  font-weight:900;
  width: 70%;
  text-align:center;
  @media(max-width: 1200px){
    font-size: 20px;
  }
`
const BtnWrapper = styled.div`
  width:70%;
  display:flex;
  justify-content:center;
  align-items: center;
  padding: 0 15%;
`
function Upper() {
  return (
    <Wrapper>
      <Titulo>Curta 3 meses de Premium grátis</Titulo>
      <SubTitle>Música sem parar, zero propagando e até offline</SubTitle>
      <BtnWrapper>
        <BtnGreen>SEJA PREMIUM</BtnGreen>
        <BtnWhite>CONTA FREE</BtnWhite>
      </BtnWrapper>
    </Wrapper>
  )
}

export default Upper