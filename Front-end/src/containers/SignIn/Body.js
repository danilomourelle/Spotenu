import React, { useState } from 'react'
import styled from 'styled-components'
import { BtnWhite, BtnGreen } from '../../components/Buttons'
import { Input, Select } from '../../components/Input'

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
  const [userType, setUserType] = useState("CUSTOMER")

  const handleSelectChange = (e) => {
    setUserType(e.target.value)
  }
  console.log(userType)
  return (
    <Wrapper>
      <h3>Preencha os campos abaixo</h3>
      <Input type='text' placeholder='Nome' />
      <Input type='text' placeholder='ID do usuário' />
      <Input type='email' placeholder='E-mai' />
      <Input type='password' placeholder='Senha' />
      {userType === "BAND" && <Input type='text' placeholder='Description' />}
      <Select onChange={handleSelectChange}>
        <option value='CUSTOMER'>Ouvinte</option>
        <option value='BAND'>Banda / Cantor</option>
      </Select>
      {userType === "BAND" && <p>É necessário aguardar autorização antes de continuar</p>}
      <BtnGreen>Enviar</BtnGreen>
      <br />
      <p>Já tem uma conta?</p>
      <BtnWhite>Faça login</BtnWhite>
    </Wrapper>
  )
}

export default Body