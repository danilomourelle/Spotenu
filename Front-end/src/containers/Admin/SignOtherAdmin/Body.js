import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BtnGreen } from '../../../components/Buttons'
import { Input } from '../../../components/Input'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../actions/authenticator.js'
import { useHistory } from 'react-router-dom'
import { routes } from '../../../Router/router'
import { BaseBody } from '../../../components/Body'

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

  const [form, setForm] = useState({ userType: "ADMIN" })

  useEffect(() => {
    if(!window.localStorage.getItem('token')){
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
  }

  return (
    <Wrapper>
      <h3>Preencha os campos abaixo</h3>
      <Form onSubmit={handleSubmit}>
        <Input name='name' type='text' placeholder='Nome' onChange={handleInputChange} />
        <Input name='nickname' type='text' placeholder='ID do usuário' onChange={handleInputChange} />
        <Input name='email' type='email' placeholder='E-mai' onChange={handleInputChange} />
        <Input name='password' type='password' placeholder='Senha' onChange={handleInputChange} />
        <br />
        <BtnGreen>Enviar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body