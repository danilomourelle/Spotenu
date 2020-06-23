import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BtnGreen } from '../../../components/Buttons'
import { Input, Select } from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { createNewMusic, fetchMyAlbunsList } from '../../../actions/band'
import { useHistory } from 'react-router-dom'
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
  h4 {
    margin:48px 0;
    font-size:1.2rem
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
  const dispatch = useDispatch()
  const history = useHistory()
  const myAlbunsList = useSelector(state => state.band.myAlbunsList)
  const [form, setForm] = useState({ name: '', albumId: '' })

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchMyAlbunsList())
  }, [history])

  useEffect(() => {
    if (myAlbunsList.length > 0) {
      setForm({
        ...form,
        albumId: myAlbunsList[0].id
      })
    }
    else {
      setForm({
        ...form,
        playlistId: ''
      })
    }
  }, [myAlbunsList])

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewMusic(form))
    setForm({
      name: '',
      albumId: myAlbunsList[0].id
    })
  }

  console.log(form)
  return (
    <Wrapper>
      <h4>Preencha os campos abaixo</h4>
      <Form onSubmit={handleSubmit}>
        <Input name='name' type='text' value={form.name} placeholder='Nome da música' onChange={handleInputChange} />
        <Select name='albumId' value={form.playlistId} onChange={handleInputChange} disabled={myAlbunsList.length === 0}>
          {myAlbunsList.length > 0 ?
            myAlbunsList.map(album => (
              <option value={album.id} key={album.id}>{album.name}</option>
            )) :
            <option>Necessário ter um album criado</option>}
        </Select>
        <BtnGreen>Enviar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body