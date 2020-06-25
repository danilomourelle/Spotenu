import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../../Router/router'
import Playlist from '../../../components/Playlist'
import { BaseBody } from '../../../components/Body'
import { BtnGreen } from '../../../components/Buttons'
import { Input, Checkbox, Select } from '../../../components/Input'
import { createNewAlbum, fetchMyMusicsList } from '../../../actions/band'
import { fetchAllMusicGenre } from '../../../actions/admin'

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
  justify-content: space-evenly;
  align-items:center;
  border-right: 1px solid #d9dadc;
  @media(max-width: 1500px){
    padding: 50px 0;
    border: none;
  }
`
const SideWrapperRight = styled(BaseSideWrapper)`
  border: 48px solid #fff;
  display: grid;
  grid-gap: 25px;
  align-content:flex-start;
  justify-items: center;
  overflow-y: auto;
`
const Form = styled.form`
  width: 100%;
  max-width:400px;
  margin: 0 auto;
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
const CheckOptions = styled.span`
  width: 100px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  label{
    margin-left:12px;
    width: 75%;
  }
`

function Body() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [albumId, setAlbumId] = useState('all')
  const [form, setForm] = useState({ name: '', genreIdList: [] })
  const myMusicsList = useSelector(state => state.band.myMusicsList)
  const myAlbunsList = useSelector(state => state.band.myAlbunsList)

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchAllMusicGenre())
  }, [history, dispatch])

  useEffect(() => {
    dispatch(fetchMyMusicsList(albumId))
  }, [albumId, dispatch])

  useEffect(() => {
    if (myAlbunsList.length > 0) {
      setAlbumId(myAlbunsList[0].id)
    }
    else {
      setAlbumId('')
    }
  }, [myAlbunsList])

  const handleSelectChange = (e) => {
    setAlbumId(e.target.value)
  }

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const insertAllAlbunsOption = (filterOptions) => {
    if (filterOptions[0].id !== "all") {
      return filterOptions.unshift({
        id: 'all',
        name: 'Todos os Albuns'
      })
    }
    return filterOptions
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewAlbum(form))
    setForm({ name: '', genreIdList: [] })
  }

  console.log(form, myAlbunsList)
  return (
    <Wrapper>
      <SideWrapperLeft>
        <h3>Preencha os campos abaixo</h3>
        <CkeckWrapper>

        </CkeckWrapper>
        <Form onSubmit={handleSubmit}>
          <Input name='name' type='text' placeholder='Nome do Album' value={form.name} onChange={handleInputChange} />
          <BtnGreen>Enviar</BtnGreen>
        </Form>
      </SideWrapperLeft>
      <SideWrapperRight>
        <h1>Musicas</h1>
        <Form>
          <Select name='albumId' value={albumId} onChange={handleSelectChange} disabled={myAlbunsList.length === 0}>
            {myAlbunsList.length > 0 ?
              insertAllAlbunsOption(myAlbunsList).map(album => (
                <option value={album.id} key={album.id}>{album.name}</option>
              )) :
              <option>Necessário ter um album criado</option>}
          </Select>
          <BtnGreen>Filtrar</BtnGreen>
        </Form>
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </SideWrapperRight>
    </Wrapper>
  )
}

export default Body