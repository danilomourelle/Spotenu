import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { routes } from '../../../Router/router'
import { BtnGreen } from '../../../components/Buttons'
import { Select, LittleSelect, Input } from '../../../components/Input'
import { fetchMyMusicsList, fetchMyAlbunsList } from '../../../actions/band'
import Playlist from '../../../components/Playlist'
import { BaseBody } from '../../../components/Body'

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
  border-right:  120px solid #fff;
  border-bottom: 50px solid #fff;
  border-left:   120px solid #fff;
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
const CkeckWrapper = styled.div`
  width: 100%;
  max-width:400px;
  max-height: 70vh;
  overflow-y: auto;
  margin: 24px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
`

function Body() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [albumIdToFilter, setAlbumIdToFilter] = useState('all')
  const [form, setForm] = useState({ name: '', albumIdToAddMusic: '' })
  const myMusicsList = useSelector(state => state.band.myMusicsList)
  const myAlbunsList = useSelector(state => state.band.myAlbunsList)

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchMyAlbunsList())
  }, [history, dispatch])

  useEffect(() => {
    dispatch(fetchMyMusicsList(albumIdToFilter))
  }, [albumIdToFilter, dispatch])

  useEffect(() => {
    if (myAlbunsList.length > 0) {
      setAlbumIdToFilter(myAlbunsList[0].id)
    }
    else {
      setAlbumIdToFilter('')
    }
  }, [myAlbunsList])

  const handleFilterSelectChange = (e) => {
    setAlbumIdToFilter(e.target.value)
  }

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const insertAllAlbunsOption = (filterOptions) => {
    if (filterOptions[0].id !== "all") {
      filterOptions.unshift({
        id: 'all',
        name: 'Todos os Albuns'
      })
    }
    return filterOptions
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch()
    setForm({ name: '', genreIdList: [] })
  }

  console.log(form, albumIdToFilter)
  return (
    <Wrapper>
      <SideWrapperLeft>
        <h3>Preencha os campos abaixo</h3>
        <Form onSubmit={handleSubmit}>
          <Select name='albumIdToAddMusic' value={form.albumIdToAddMusic} onChange={handleInputChange} disabled={myAlbunsList.length === 0}>
            {myAlbunsList.length > 0 ?
              myAlbunsList.map(album => (
                <option value={album.id} key={album.id}>{album.name}</option>
              )) :
              <option>Necessário ter um album criado</option>}
          </Select>
          <Input name='name' type='text' placeholder='Nome da Musica' value={form.name} onChange={handleInputChange} />
          <BtnGreen disabled={myAlbunsList.length === 0} >Enviar</BtnGreen>
        </Form>
      </SideWrapperLeft>
      {/* --------------------------------------------------------------------------------- */}
      {/* ----------------------       CADA LADO DA TELA     ------------------------------ */}
      {/* --------------------------------------------------------------------------------- */}
      <SideWrapperRight>
        <h1>Musicas</h1>
        <LittleSelect name='albumIdToFilter' value={albumIdToFilter} onChange={handleFilterSelectChange} disabled={myAlbunsList.length === 0}>
          {myAlbunsList.length > 0 ?
            insertAllAlbunsOption(myAlbunsList).map(album => (
              <option value={album.id} key={album.id}>{album.name}</option>
            )) :
            <option>Nenhuma música encontrada</option>}
        </LittleSelect>
        <Playlist />
        <Playlist />
      </SideWrapperRight>
    </Wrapper>
  )
}

export default Body