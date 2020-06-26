import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { BaseBody } from '../../../components/Body'
import Card from '../../../components/Card'
import { routes } from '../../../Router/router'

const Wrapper = styled(BaseBody)`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-evenly;
`

function Body() {
  const cards = [
    {
      src: 'https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_960_720.jpg',
      alt: 'Aprovação de Banda',
      text: 'Aprovar Bandas',
      to: routes.approveBand
    },
    {
      src: 'https://cdn.pixabay.com/photo/2017/08/10/08/00/suit-2619784_960_720.jpg',
      alt: 'Cadastro de Novo Admin',
      text: 'Cadastrar Administrador',
      to: routes.createOtherAdmin
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/08/10/20/52/mixing-1584267_960_720.jpg',
      alt: 'Cadastro de Gênero Musical',
      text: 'Gênero Musical',
      to: routes.createMusicalGenre
    }
  ]
  const history = useHistory()

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
  }, [history])

  return (
    <Wrapper>
      {
        cards.map((card, index) => (
          <Card key={index} card={card} />
        ))
      }
    </Wrapper>
  )
}

export default Body