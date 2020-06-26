import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../../Router/router'
import { BaseBody } from '../../../components/Body'
import { BtnGreen } from '../../../components/Buttons'
import { Input, Checkbox } from '../../../components/Input'
import { createNewAlbum, fetchMyAlbunsList, deleteAlbum, setAlbumIdToDelete } from '../../../actions/band'
import { fetchAllMusicGenre } from '../../../actions/admin'
import Album from '../../../components/Album'

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

function Body(props) {
  const dispatch = useDispatch()
  const history = useHistory()
  const genreList = useSelector(state => state.admin.genreList)
  const albunsList = useSelector(state => state.band.myAlbunsList)
  const albumIdToDelete = useSelector(state => state.band.albumIdToDelete)
  const [form, setForm] = useState({ name: '', genreIdList: [], image: '' })

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchAllMusicGenre())
    dispatch(fetchMyAlbunsList())
  }, [history, dispatch])

  useEffect(() => {
    console.log('passou')
    if (props.response === true && albumIdToDelete) {
      console.log('aqui')
      dispatch(deleteAlbum(albumIdToDelete))
      dispatch(setAlbumIdToDelete(undefined))
    }
  }, [props.response, dispatch, albumIdToDelete])


  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  const handleCkeckChange = (e) => {
    const genreId = e.target.name
    const checked = e.target.checked
    if (checked) {
      setForm({
        ...form,
        genreIdList: [...form.genreIdList, genreId]
      })
    }
    else {
      setForm({
        ...form,
        genreIdList: form.genreIdList.filter(id => (id !== genreId))
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewAlbum(form))
    setForm({ name: '', genreIdList: [], image: '' })
    //!A stackOverflow, como eu te amo!!!!!
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false)
  }
  console.log(props.response)
  return (
    <Wrapper>
      <SideWrapperLeft>
        <h3>Preencha os campos abaixo</h3>
        <CkeckWrapper>
          {
            genreList.map(genre => (
              <CheckOptions key={genre.id}>
                <Checkbox type='checkbox' id={genre.id} name={genre.id} onChange={handleCkeckChange} />
                <label htmlFor={genre.id}>{genre.name}</label>
              </CheckOptions>
            ))
          }
        </CkeckWrapper>
        <Form onSubmit={handleSubmit}>
          <Input name='name' type='text' placeholder='Nome do Album' value={form.name} onChange={handleInputChange} />
          <Input name='image' type='text' placeholder='Enderço imagem do Album' value={form.image} onChange={handleInputChange} />
          <BtnGreen>Enviar</BtnGreen>
        </Form>
      </SideWrapperLeft>
      {/* --------------------------------------------------------------------------------- */}
      {/* ----------------------       CADA LADO DA TELA     ------------------------------ */}
      {/* --------------------------------------------------------------------------------- */}
      <SideWrapperRight>
        <h1>Albuns</h1>
        {
          albunsList[0].id !== '001' &&
          albunsList.map(album => (
            <Album key={album.id} album={album} />
          ))
        }

      </SideWrapperRight>
    </Wrapper>
  )
}

export default Body