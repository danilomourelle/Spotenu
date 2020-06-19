import React from 'react'
import styled from 'styled-components'
import { BtnGreen, BtnWhite } from '../../../components/Buttons'
import { Select } from '../../../components/Input'

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  padding:80px 0;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
`
const SelectorWrapper = styled.div`
  width: 80%;
  max-width:400px;
  text-align:center;
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
  const array = ['um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro',  'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro',]
  return (
    <Wrapper>
      <SelectorWrapper>
        <Select>
          {array.map(elemtent => (<option>{elemtent}</option>))}
        </Select>
      </SelectorWrapper>
      <BtnWrapper>
        <BtnGreen>Aprovar Banda</BtnGreen>
        <BtnWhite>Aprovar todos</BtnWhite>
      </BtnWrapper>

    </Wrapper>
  )
}

export default Body