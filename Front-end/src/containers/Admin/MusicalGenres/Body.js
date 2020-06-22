import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BtnGreen } from '../../../components/Buttons'
import { Input } from '../../../components/Input'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllMusicGenre, createNewMusicGenre } from '../../../actions/admin'

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
  const [form, setForm] = useState({})
  const genreList = useSelector(state => state.admin.genreList)

  useEffect(() => {
    /* if(window.localStorage.getItem('token')){
      history.push(routes.home)
    } */
    dispatch(fetchAllMusicGenre())
  }, [history])

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createNewMusicGenre(form))
  }
  console.log(form.name)
  const array = ['um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro', 'um', 'dois', 'tres', 'quatro',]
  return (
    <Wrapper>
      <h4>Lista de gêneros já cadastrados</h4>
      <GenreList>
        {genreList.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
      </GenreList>
      <Form onSubmit={handleSubmit}>
        <Input type='text' placeholder='Novo Gênero Musical' name='name' onChange={handleInputChange} />
        <BtnGreen>Adicionar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body