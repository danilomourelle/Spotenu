import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../../Router/router.js'
import { BtnWhite, BtnGreen } from '../../../components/Buttons'
import { Input } from '../../../components/Input'
import { useDispatch } from 'react-redux'
import { login } from '../../../actions/authenticator.js'
import { BaseBody } from '../../../components/Body.js'

const Wrapper = styled(BaseBody)`
  max-width:800px;
  margin: 0 auto;
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

  const [form, setForm] = useState({ user: '', password: '' })

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(form))
    setForm({ user: '', password: '' })
  }
  return (
    <Wrapper>
      <h3>Para continuar faça o login em sua conta</h3>
      <Form onSubmit={handleSubmit}>
        <Input name='user' value={form.user} type='text' placeholder='E-mai ou Nick' onChange={handleInputChange} />
        <Input name='password' value={form.password} type='password' placeholder='Senha' onChange={handleInputChange} />
        <BtnGreen>Entrar</BtnGreen>
      </Form>
      <br />
      <p>Ainda não tem sua conta?</p>
      <Link to={routes.signIn}><BtnWhite>Cria uma conta</BtnWhite></Link>
    </Wrapper>
  )
}

export default Body