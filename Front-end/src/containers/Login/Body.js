import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../Router/router.js'
import { BtnWhite, BtnGreen } from '../../components/Buttons'
import { Input } from '../../components/Input'

const Wrapper = styled.main`
  width: 80%;
  max-width:400px;
  height: calc(100vh - 80px);
  margin: 0 auto;
  padding:80px 0;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`

function Body() {
  return (
    <Wrapper>
      <h3>Para continuar faça o login em sua conta</h3>
      <Input type='email' placeholder='E-mai' />
      <Input type='password' placeholder='Senha' />
      <BtnGreen>Entrar</BtnGreen>
      <br />
      <p>Ainda não tem sua conta?</p>
      <Link to={routes.signIn}><BtnWhite>Cria uma conta</BtnWhite></Link>
    </Wrapper>
  )
}

export default Body