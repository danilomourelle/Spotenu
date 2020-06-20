import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../../Router/router'

const Wrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
  padding:80px;
  display: flex;
  flex-flow: row wrap;
  align-items:center;
  justify-content: center;
`
const Cards = styled.section`
  width: 25%;
  min-width: 40vh;
  margin:30px 15px;
  height: 40vh;
  max-width:400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  a{
    text-decoration:none;
    color:inherit;
  }
  img {
    object-fit:cover;
    height: 80%;
    width:100%
  }
  div {
    text-align:center;
    padding:20px;
    font-size:20px;
  }
`

function Body() {

  return (
    <Wrapper>
      <Cards>
        <Link to={routes.approveBand}>
          <img src='https://cdn.pixabay.com/photo/2016/11/21/12/59/electronics-1845272_960_720.jpg' alt='Aprovão de Banda' />
          <div>
            <p>Criar Album</p>
          </div>
        </Link>
      </Cards>
      <Cards>
        <Link to={routes.createOtherAdmin}>
          <img src='https://cdn.pixabay.com/photo/2015/03/14/14/22/cd-673227_960_720.jpg' alt='Cadastro de Novo Admin' />
          <div>
            <p>Meus Albuns</p>
          </div>
        </Link>
      </Cards>
      <Cards>
        <Link to={routes.createMusicalGenre}>
          <img src='https://cdn.pixabay.com/photo/2019/11/20/22/34/music-4641313_960_720.jpg' alt='Cadastro de Gênero Musical' />
          <div>
            <p>Adicionar Música</p>
          </div>
        </Link>
      </Cards>
      <Cards>
        <Link to={routes.createMusicalGenre}>
          <img src='https://cdn.pixabay.com/photo/2016/08/10/20/52/mixing-1584267_960_720.jpg' alt='Cadastro de Gênero Musical' />
          <div>
            <p>Minhas Músicas</p>
          </div>
        </Link>
      </Cards>
    </Wrapper>
  )
}

export default Body