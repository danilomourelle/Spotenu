import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { routes } from '../../../Router/router'

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - 80px);
  padding:80px;
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-evenly;
`
const Cards = styled.section`
  width: 25%;
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
  const history = useHistory()

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
  }, [history])

  return (
    <Wrapper>
      <Cards>
        <Link to={routes.approveBand}>
          <img src='https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_960_720.jpg' alt='Aprovão de Banda' />
          <div>
            <p>Aprovar Bandas</p>
          </div>
        </Link>
      </Cards>
      <Cards>
        <Link to={routes.createOtherAdmin}>
          <img src='https://cdn.pixabay.com/photo/2017/08/10/08/00/suit-2619784_960_720.jpg' alt='Cadastro de Novo Admin' />
          <div>
            <p>Cadastrar Administrador</p>
          </div>
        </Link>
      </Cards>
      <Cards>
        <Link to={routes.createMusicalGenre}>
          <img src='https://cdn.pixabay.com/photo/2016/08/10/20/52/mixing-1584267_960_720.jpg' alt='Cadastro de Gênero Musical' />
          <div>
            <p>Gênero Musical</p>
          </div>
        </Link>
      </Cards>
    </Wrapper>
  )
}

export default Body