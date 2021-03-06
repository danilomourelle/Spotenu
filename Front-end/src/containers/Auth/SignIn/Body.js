import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { BaseBody } from '../../../components/Body.js'
import { Input, Select } from '../../../components/Input'
import { BtnWhite, BtnGreen } from '../../../components/Buttons'
import { routes } from '../../../Router/router.js'
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
  p{
    color: red;
  }
`
const BottomWrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`


function Body(props) {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    nickname: '',
    email: '',
    password: '',
    description: '',
    userType: "CUSTOMER"
  })

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
      description: '',
      userType: "CUSTOMER"
    })
  }

  return (
    <Wrapper>
      <h3>Preencha os campos abaixo</h3>
      <Form onSubmit={handleSubmit}>
        <Input name='name' value={form.name} type='text' placeholder='Nome' onChange={handleInputChange} />
        <Input name='nickname' value={form.nickname} type='text' placeholder='Nickname' onChange={handleInputChange} />
        <Input name='email' value={form.email} type='email' placeholder='E-mai' onChange={handleInputChange} />
        <Input name='password' value={form.password} type='password' placeholder='Senha' onChange={handleInputChange} />
        {
          form.userType === "BAND" &&
          <Input name='description' value={form.description} type='text' placeholder='Description' onChange={handleInputChange} />
        }
        <Select name='userType' value={form.userType} onChange={handleInputChange}>
          <option value='CUSTOMER'>Ouvinte</option>
          <option value='BAND'>Banda / Cantor</option>
        </Select>
        {
          form.userType === "BAND" ?
            <p>É necessário aguardar autorização antes de continuar</p> :
            <p>Infelizmente o sistema Ouvinte não foi implementado</p>
        }
        <BtnGreen>Enviar</BtnGreen>
      </Form>
      <br />
      <BottomWrapper>
        <p>Já tem uma conta?</p>
        <Link to={routes.login}><BtnWhite>Faça login</BtnWhite></Link>
      </BottomWrapper>

    </Wrapper>
  )
}

export default Body