import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BtnGreen } from '../../../components/Buttons'
import { Input } from '../../../components/Input'

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  padding:80px 0;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
`
const Form = styled.form`
  width: 80%;
  max-width:400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`

function Body() {
  const [form, setForm] = useState({ userType: "CUSTOMER" })

  useEffect(() => {

  }, [])

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  console.log(form)
  return (
    <Wrapper>
      <h3>Preencha os campos abaixo</h3>
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