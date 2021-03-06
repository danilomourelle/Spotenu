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
      src: 'https://cdn.pixabay.com/photo/2016/11/21/12/59/electronics-1845272_960_720.jpg',
      alt: 'Gerenciar meus álbuns',
      text: 'Meus Álbuns',
      to: routes.myAlbums
    },
    {
      src: 'https://cdn.pixabay.com/photo/2019/11/20/22/34/music-4641313_960_720.jpg',
      alt: 'Gerenciar minhas músicas',
      text: 'Minhas Músicas',
      to: routes.myMusics
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