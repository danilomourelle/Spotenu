import React from 'react'
import styled from 'styled-components'
import { BtnLogin } from '../../components/Buttons'

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(0,0,0,0.6);
  padding: 40px  15px;
  position: fixed;
  display:flex;
  align-items:center;
  color:#fff;
  justify-content:space-between;
`

function Header() {

  return (
    <Wrapper>
      <p>PROJETO SPOTENU - DANILO MOURELLE - TURMA SAGAN</p>
      <BtnLogin>Entrar</BtnLogin>
    </Wrapper>
  )
}

export default Header