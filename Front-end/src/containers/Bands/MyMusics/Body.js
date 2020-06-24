import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BtnGreen } from '../../../components/Buttons'
import { Select } from '../../../components/Input'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMyMusicsList, fetchMyAlbunsList } from '../../../actions/band'
import { routes } from '../../../Router/router'

const Wrapper = styled.main`
  width: 100%;
  max-width:800px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  padding:80px 200px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: start;
  h4{
    font-size:1.2rem;
    margin: 48px 0;
  }
`
const GenreList = styled.div`
  width: 100%;
  height:300px;
  margin-bottom:48px;
  overflow-y:scroll;
  border: 1px solid black;
  border-radius:5px;
  p{
    text-align:end;
    font-size:20px;
    line-height:1.2em;
  }
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

function Body() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [albumId, setAlbumId] = useState('all')
  const myMusicsList = useSelector(state => state.band.myMusicsList)
  const myAlbunsList = useSelector(state => state.band.myAlbunsList)

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchMyAlbunsList())
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

  const handleInputChange = (e) => {
    setAlbumId(e.target.value)
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

  console.log(albumId, insertAllAlbunsOption(myAlbunsList))
  return (

    //TODO: Refazer static

    <Wrapper>
      <h4>Lista de gêneros já cadastrados</h4>
      <GenreList>
        {myMusicsList.map((music) => (<p key={music.id}>{music.name}</p>))}
      </GenreList>
      <Form>
        <Select name='albumId' value={albumId} onChange={handleInputChange} disabled={myAlbunsList.length === 0}>
          {myAlbunsList.length > 0 ?
            insertAllAlbunsOption(myAlbunsList).map(album => (
              <option value={album.id} key={album.id}>{album.name}</option>
            )) :
            <option>Necessário ter um album criado</option>}
        </Select>
        <BtnGreen>Filtrar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body