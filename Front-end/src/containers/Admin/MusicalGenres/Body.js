import React from 'react'
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
const GenreList = styled.div`
  width: 80%;
  height:300px;
  overflow-y:scroll;
  max-width:300px;
  border: 1px solid black;
  border-radius:5px;
  p{
    text-align:end;
    font-size:20px;
    line-height:1.2em;
  }
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
  const array = ['um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro',]
  return (
    <Wrapper>
      <GenreList>
        {array.map(elemtent => (<p>{elemtent}</p>))}
      </GenreList>
      <Form>
        <Input type='text' placeholder='Novo Gênero Musical' />
        <BtnGreen>Adicionar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body