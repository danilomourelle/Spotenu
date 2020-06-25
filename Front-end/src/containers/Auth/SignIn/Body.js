import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../../Router/router.js'
import { BtnWhite, BtnGreen } from '../../../components/Buttons'
import { Input, Select } from '../../../components/Input'
import { useDispatch } from 'react-redux'
import { signIn } from '../../../actions/authenticator.js'
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
  p{
    color: red;
  }
`
const BottonWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`


function Body(props) {
  const dispatch = useDispatch()

  const [form, setForm] = useState({ userType: "CUSTOMER" })

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
        <Input name='nickname' type='text' placeholder='Nickname' onChange={handleInputChange} />
        <Input name='email' type='email' placeholder='E-mai' onChange={handleInputChange} />
        <Input name='password' type='password' placeholder='Senha' onChange={handleInputChange} />
        {form.userType === "BAND" &&
          <Input type='text' name='description' placeholder='Description' onChange={handleInputChange} />}
        <Select name='userType' onChange={handleInputChange}>
          <option value='CUSTOMER'>Ouvinte</option>
          <option value='BAND'>Banda / Cantor</option>
        </Select>
        {form.userType === "BAND" && <p>É necessário aguardar autorização antes de continuar</p>}
        <BtnGreen>Enviar</BtnGreen>
      </Form>
      <br />
      <BottonWrapper>
        <p>Já tem uma conta?</p>
        <Link to={routes.login}><BtnWhite>Faça login</BtnWhite></Link>
      </BottonWrapper>

    </Wrapper>
  )
}

export default Body