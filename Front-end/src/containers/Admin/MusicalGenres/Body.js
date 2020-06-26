import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { BaseBody } from '../../../components/Body'
import { Input } from '../../../components/Input'
import { BtnGreen } from '../../../components/Buttons'
import { routes } from '../../../Router/router'
import { fetchAllMusicGenre, createNewMusicGenre } from '../../../actions/admin'

const Wrapper = styled(BaseBody)`
  max-width:800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`
const GenreList = styled.div`
  width: 100%;
  max-width: 400px;
  height:300px;
  margin-bottom:40px;
  overflow-y:scroll;
  border: 1px solid black;
  border-radius:5px;
  p{
    text-align:end;
    padding: 5px 10px;
    font-size:20px;
    &:hover{
      background-color:#ddd
    }
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
  const [form, setForm] = useState({ name: '' })
  const genreList = useSelector(state => state.admin.genreList)

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchAllMusicGenre())
  }, [history, dispatch])

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewMusicGenre(form))
    setForm({ name: '' })
  }

  return (
    <Wrapper>
      <h3>Lista de gêneros já cadastrados</h3>
      <GenreList>
        {
          genreList.map((genre) => (
            <p key={genre.id}>{genre.name}</p>
          ))
        }
      </GenreList>
      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Novo Gênero Musical' value={form.name} name='name' onChange={handleInputChange} />
        <BtnGreen>Adicionar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body