import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../../Router/router.js'
import { BtnWhite, BtnGreen } from '../../../components/Buttons'
import { Input } from '../../../components/Input'
import { useDispatch } from 'react-redux'
import { login } from '../../../actions/authenticator.js'

const Wrapper = styled.main`
  width: 100%;
  max-width:800px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  padding:80px 200px;
  padding:80px 0;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`
const Form = styled.form`
  width: 100%;
  max-width:400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`

function Body() {
  const dispatch = useDispatch()

  const [form, setForm] = useState()

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(form))
  }
  return (
    <Wrapper>
      <h3>Para continuar faça o login em sua conta</h3>
      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='E-mai ou Nick' name='user' onChange={handleInputChange} />
        <Input type='password' placeholder='Senha' name='password' onChange={handleInputChange} />
        <BtnGreen>Entrar</BtnGreen>
      </Form>
      <br />
      <p>Ainda não tem sua conta?</p>
      <Link to={routes.signIn}><BtnWhite>Cria uma conta</BtnWhite></Link>
    </Wrapper>
  )
}

export default Body