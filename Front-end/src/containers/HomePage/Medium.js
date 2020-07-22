import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BtnWhite } from '../../components/Buttons'
import { routes } from '../../Router/router.js'
import { MediumWrapper, MediumTitle, MediumSubTitle, ImageGrid } from './style'


function Medium() {

  return (
    <MediumWrapper>
      <MediumTitle>É música que você quer?</MediumTitle>
      <MediumSubTitle> Conheça os melhores lançamentos</MediumSubTitle>
      <Link to={routes.allBands}><BtnWhite size='large'> VEJA NOSSAS BANDAS </BtnWhite></Link>
      <ImageGrid>
        <img src='https://picsum.photos/300/300' alt='Imagem1'></img>
        <img src='https://picsum.photos/301/301' alt='Imagem1'></img>
        <img src='https://picsum.photos/302/302' alt='Imagem1'></img>
        <img src='https://picsum.photos/299/299' alt='Imagem1'></img>
      </ImageGrid>
    </MediumWrapper>
  )
}

export default Medium