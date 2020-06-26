import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  margin: 0 auto;
  padding:80px 0;
  display: grid;
  grid-gap: 15px;
  align-content:center;
  justify-items: center;
`

function Body() {
  return (
    <Wrapper>
      <h1>OPSSSSSSSSSSSSSSSSSSSSSSS</h1>
      <img src='http://www.danskbilsalg.com/wp-content/uploads/2018/11/semana-de-provas-1.png' alt="Isso o que acontece quando chega sexta-feira e vc está acabado"></img>
      <h1>Se procurar vai encontrar mais</h1>
    </Wrapper>
  )
}

export default Body