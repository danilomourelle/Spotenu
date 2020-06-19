import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BtnLogin } from '../../components/Buttons'
import { routes } from '../../Router/router.js'

const Wrapper = styled.div`
  width: 100%;
  min-width:800px;
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
      <Link to={routes.login}><BtnLogin>Entrar</BtnLogin></Link>
    </Wrapper>
  )
}

export default Header