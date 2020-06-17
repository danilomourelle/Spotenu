import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 540px;
  background-color: #FFCDD2;
  padding: 40px  15px;
`
const Titulo = styled.h1`
  font-size: 80px;
  font-weight:900;
  font-family:  Arial, sans-serif;
`
function Upper() {

  return (
    <Wrapper>
      <Titulo>Curta 3 meses de Premium grátis</Titulo>
    </Wrapper>
  )
}

export default Upper