import React from 'react'
import styled from 'styled-components'
import { BtnGreen, BtnWhite } from '../../../components/Buttons'
import { Select } from '../../../components/Input'

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
  select {
    margin-bottom:40px;
    text-align: right;
  }
`
const BtnWrapper = styled.div`
  width: 80%;
  max-width:400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`

function Body() {
  const array = ['um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro',]
  return (
    <Wrapper>
      <h4>Lista de bandas aguardando liberação</h4>
      
        <Select>
          {array.map(elemtent => (<option>{elemtent}</option>))}
        </Select>
      
      <BtnWrapper>
        <BtnGreen>Aprovar Banda</BtnGreen>
        <BtnWhite>Aprovar todos</BtnWhite>
      </BtnWrapper>

    </Wrapper>
  )
}

export default Body