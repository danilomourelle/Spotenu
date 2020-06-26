import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BaseBody } from '../../../components/Body'
import { Input } from '../../../components/Input'
import { BtnGreen } from '../../../components/Buttons'
import { routes } from '../../../Router/router'
import { signIn } from '../../../actions/authenticator.js'

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
  const history = useHistory()

  const [form, setForm] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    userType: "ADMIN"
  })

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
  }, [history])

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn(form))
    setForm({
      name: '',
      nickname: '',
      email: '',
      password: '',
      userType: "ADMIN"
    })
  }

  return (
    <Wrapper>
      <h3>Preencha os campos abaixo</h3>
      <Form onSubmit={handleSubmit}>
        <Input name='name' value={form.name} type='text' placeholder='Nome' onChange={handleInputChange} />
        <Input name='nickname' value={form.nickname} type='text' placeholder='ID do usuário' onChange={handleInputChange} />
        <Input name='email' value={form.email} type='email' placeholder='E-mai' onChange={handleInputChange} />
        <Input name='password' value={form.password} type='password' placeholder='Senha' onChange={handleInputChange} />
        <br />
        <BtnGreen>Enviar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body