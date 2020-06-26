import React from 'react'
import styled from 'styled-components'
import { LittleBtn } from './Buttons'
import { useDispatch } from 'react-redux'
import { setAlbumIdToDelete } from '../actions/band'
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
const AlbumInfos = styled.section`
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

function Album(props) {
  const { album } = props
  const dispatch = useDispatch()

  const handleDeleteAlbum = () => {
    dispatch(setAlbumIdToDelete(album.id))
    dispatch(setDialog({
      isOpen: true,
      message: `Você deseja apagar o album ${album.name}`,
      type: 'decision',
      response: false
    }))
  }
  return (
    <Wrapper>
      <AlbumPhoto src={album.image} alt='Imagem do Album' />
      <AlbumInfos>
        <h2>{album.name}</h2>
        <BtnWrapper>
          <LittleBtn>Editar</LittleBtn>
          <LittleBtn>Detalhes</LittleBtn>
          <LittleBtn onClick={handleDeleteAlbum} color="#b70811">Apagar</LittleBtn>
        </BtnWrapper>
      </AlbumInfos>
    </Wrapper>
  )
}

export default Album
