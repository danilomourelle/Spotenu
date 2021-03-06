import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BaseBody } from '../../../components/Body'
import { Select, LittleSelect, Input } from '../../../components/Input'
import { BtnGreen } from '../../../components/Buttons'
import Music from '../../../components/Music'
import { routes } from '../../../Router/router'
import { fetchMyMusicsList, fetchMyAlbumsList, createNewMusic, deleteMusic, setMusicIdToDelete } from '../../../actions/band'
import { setDialog } from '../../../actions/dialog'

const Wrapper = styled(BaseBody)`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: start;
  padding: 20px 0;
 @media(max-width: 1500px){
    justify-content: center;
  } 
`
const BaseSideWrapper = styled.div`
  height: 100%;
  width: 50%;
  @media(max-width: 1500px){
    width:100%;
    max-width:800px;
  }
`
const SideWrapperLeft = styled(BaseSideWrapper)`
  display: flex;
  padding: 150px 0;
  flex-flow: column nowrap;
  justify-content: center;
  align-items:center;
  border-right: 1px solid #d9dadc;
  @media(max-width: 1500px){
    padding: 50px 0;
    border: none;
  }
`
const SideWrapperRight = styled(BaseSideWrapper)`
  border-top:    50px solid #fff;
  border-bottom: 50px solid #fff;
  padding-right:  120px;
  padding-left:   120px;
  display: grid;
  grid-gap: 25px;
  align-content:flex-start;
  justify-items: center;
  overflow-y: auto;
`
const Form = styled.form`
  width: 100%;
  max-width:400px;
  margin: 50px auto;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`

function Body(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const [albumIdToFilter, setAlbumIdToFilter] = useState('all')
  const [albumListToFilter, setAlbumListToFilter] = useState([])
  const [form, setForm] = useState({ name: '', albumIdToAddMusic: '' })
  const myMusicsList = useSelector(state => state.band.myMusicsList)
  const myAlbumsList = useSelector(state => state.band.myAlbumsList)
  const musicIdToDelete = useSelector(state => state.band.musicIdToDelete)
  const dialogResponse = useSelector(state => state.dialog.response)

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchMyAlbumsList())
  }, [history, dispatch])

  //Refazendo busca quando o Id do Album que filtra muda
  useEffect(() => {
    dispatch(fetchMyMusicsList(albumIdToFilter))
  }, [albumIdToFilter, dispatch])

  //Refazendo lógica ao trazer lista de álbuns
  useEffect(() => {
    if (myAlbumsList.length > 0) {
      //Cria lista de filtragem adicionado opção de todos os álbuns
      setAlbumListToFilter(insertAllAlbumsOption(myAlbumsList))
      //Atualiza o albumIdToAddMusic para o primeiro album da lista
      setForm((currentForm) => ({
        ...currentForm,
        albumIdToAddMusic: myAlbumsList[0].id
      }))
    }
    else {
      setAlbumIdToFilter('')
    }
  }, [myAlbumsList])

  //Recolocando primeiro item da lista de filtragem no id para filtrar
  useEffect(() => {
    if (albumListToFilter.length > 0) {
      setAlbumIdToFilter(albumListToFilter[0].id)
    }
  }, [albumListToFilter])

  //Deletando a música depois de receber a confirmação
  useEffect(() => {
    if (dialogResponse === true && musicIdToDelete) {
      dispatch(deleteMusic(musicIdToDelete))
      dispatch(setMusicIdToDelete(undefined))
      dispatch(setDialog({
        isOpen: false,
        message: '',
        type: '',
        response: false
      }))
    }
  }, [dialogResponse, dispatch, musicIdToDelete])

  const insertAllAlbumsOption = (albumsList) => {
    let filterOptions = [...albumsList]
    if (filterOptions[0].id !== "all") {
      filterOptions.unshift({
        id: 'all',
        name: 'Todos os Álbuns'
      })
    }
    return filterOptions
  }

  const handleFilterSelectChange = (e) => {
    setAlbumIdToFilter(e.target.value)
  }

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewMusic(form))
    setForm({ name: '', albumIdToAddMusic: myAlbumsList[0].id })
  }

  return (
    <Wrapper>
      <SideWrapperLeft>
        <h3>Preencha os campos abaixo</h3>
        <Form onSubmit={handleSubmit}>
          <Select name='albumIdToAddMusic' value={form.albumIdToAddMusic} onChange={handleInputChange} disabled={myAlbumsList.length === 0}>
            {myAlbumsList.length > 0 ?
              myAlbumsList.map(album => (
                <option value={album.id} key={album.id}>{album.name}</option>
              )) :
              <option>Necessário ter um album criado</option>}
          </Select>
          <Input name='name' type='text' placeholder='Nome da Musica' value={form.name} onChange={handleInputChange} />
          <BtnGreen disabled={myAlbumsList.length === 0} >Enviar</BtnGreen>
        </Form>
      </SideWrapperLeft>
      {/* --------------------------------------------------------------------------------- */}
      {/* ----------------------       CADA LADO DA TELA     ------------------------------ */}
      {/* --------------------------------------------------------------------------------- */}
      <SideWrapperRight>
        <h1>Musicas</h1>
        <LittleSelect name='albumIdToFilter' value={albumIdToFilter} onChange={handleFilterSelectChange} disabled={myAlbumsList.length === 0}>
          {myAlbumsList.length > 0 ?
            albumListToFilter.map(album => (
              <option value={album.id} key={album.id}>{album.name}</option>
            )) :
            <option>Nenhuma música encontrada</option>}
        </LittleSelect>
        {
          myMusicsList.length > 0 &&
          myMusicsList.map(music => (
            <Music key={music.id} music={music} />
          ))
        }
      </SideWrapperRight>
    </Wrapper>
  )
}

export default Body