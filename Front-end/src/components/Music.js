import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { LittleBtn } from './Buttons'
import { setMusicIdToDelete } from '../actions/band'
import { setDialog } from '../actions/dialog'

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
const AlbumPhoto = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
`
const MusicInfos = styled.section`
  display: grid;
  grid-auto-flow:row;
  grid-template-rows: 2fr 3fr;
  justify-items: center;
  h2{
    align-self: center;
  }
`
const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

function Music(props) {
  const { music } = props
  const dispatch = useDispatch()

  const handleDeleteMusic = () => {
    dispatch(setMusicIdToDelete(music.id))
    dispatch(setDialog({
      isOpen: true,
      message: `Você deseja apagar a música ${music.name}`,
      type: 'decision',
      response: false
    }))
  }
  return (
    <Wrapper>
      <AlbumPhoto src={music.image} alt='Imagem do Album' />
      <MusicInfos>
        <h2>{music.name}</h2>
        <BtnWrapper>
          <LittleBtn>Editar</LittleBtn>
          <LittleBtn>Detalhes</LittleBtn>
          <LittleBtn onClick={handleDeleteMusic} color="#b70811">Apagar</LittleBtn>
        </BtnWrapper>
      </MusicInfos>
    </Wrapper>
  )
}

export default Music
