import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BtnLogin } from '../../components/Buttons'
import { routes } from '../../Router/router.js'
import { HeaderWrapper } from './style'

function Header() {

  return (
    <HeaderWrapper>
      <p>PROJETO SPOTENU - DANILO MOURELLE - TURMA SAGAN</p>
      <Link to={routes.login}><BtnLogin size='small'>Entrar</BtnLogin></Link>
    </HeaderWrapper>
  )
}

export default Header