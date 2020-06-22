import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BtnGreen } from '../../../components/Buttons'
import { Input } from '../../../components/Input'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../actions/authenticator.js'
import { useHistory } from 'react-router-dom'

const Wrapper = styled.main`
  width: 100%;
  max-width:800px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  padding:80px 200px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: start;
  h4 {
    margin:48px 0;
    font-size:1.2rem
  }
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
    /* if(window.localStorage.getItem('token')){
      history.push(routes.home)
    } */
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

  console.log(form)
  return (
    <Wrapper>
      <h4>Preencha os campos abaixo</h4>
      <Form>
        <Input name='name' type='text' placeholder='Nome' onChange={handleInputChange} />
        <Input name='nick' type='text' placeholder='ID do usuário' onChange={handleInputChange} />
        <Input name='email' type='email' placeholder='E-mai' onChange={handleInputChange} />
        <Input name='password' type='password' placeholder='Senha' onChange={handleInputChange} />
        <BtnGreen>Enviar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body