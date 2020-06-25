import React from 'react'
import styled from 'styled-components'
import { LittleBtn } from './Buttons'

const Wrapper = styled.div`
  width: 100%;
  height:150px;
  background-color: #f9f9f9;
  border: 1px solid #5fba7e;
  border-radius: 5px;
  display:grid;
  grid-auto-flow:column;
  grid-template-columns: 1fr 3fr;
`
const PlaylistPhoto = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`
const PlaylistInfos = styled.section`
  display: grid;
  grid-auto-flow:row;
  grid-template-rows: 2fr 3fr 3fr;
  justify-items: center;
  h3{
    align-self: center;
  }
`
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

function Playlist(props) {
  return (
    <Wrapper>
      <PlaylistPhoto src='https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_960_720.jpg' alt='test' />
      <PlaylistInfos>
        <h3>Nome do Album</h3>
        <span>
          <p>Infos do album e várias outras coisas a mais</p>
          <p>Infos do album e várias outras coisas a mais</p>
        </span>
        <BtnWrapper>
          <LittleBtn>Editar</LittleBtn>
          <LittleBtn>Detalhes</LittleBtn>
          <LittleBtn color="#b70811">Apagar</LittleBtn>
        </BtnWrapper>
      </PlaylistInfos>
    </Wrapper>
  )
}

export default Playlist
