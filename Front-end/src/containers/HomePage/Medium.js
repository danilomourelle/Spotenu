import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BtnWhite } from '../../components/Buttons'
import { routes } from '../../Router/router.js'

const Wrapper = styled.div`
  width: 100%;
  min-height: 900px;
  background-color: #FFFFFF;
  padding: 80px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
`
const Titulo = styled.h1`
  font-size: 80px;
  font-weight:900;
  width: 70%;
  text-align:center;
  @media(max-width: 1200px){
    font-size: 55px;
  }
`
const SubTitle = styled.h3`
  font-size: 30px;
  font-weight:900;
  width: 70%;
  text-align:center;
  @media(max-width: 1200px){
    font-size: 20px;
  }
`
const ImageGrid = styled.div`
  width:70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  img {
    object-fit:cover;
    width:100%;
  }
`
function Medium() {

  return (
    <Wrapper>
      <Titulo>É música que você quer?</Titulo>
      <SubTitle> Conheça os melhores lançamentos</SubTitle>
      <Link to={routes.allBands}><BtnWhite size='large'> VEJA NOSSAS BANDAS </BtnWhite></Link>
      <ImageGrid>
        <img src='https://picsum.photos/300/300' alt='Imagem1'></img>
        <img src='https://picsum.photos/301/301' alt='Imagem1'></img>
        <img src='https://picsum.photos/302/302' alt='Imagem1'></img>
        <img src='https://picsum.photos/299/299' alt='Imagem1'></img>
      </ImageGrid>
    </Wrapper>
  )
}

export default Medium