import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BtnGreen } from '../../../components/Buttons'
import { Input } from '../../../components/Input'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewAlbum } from '../../../actions/band'
import { routes } from '../../../Router/router'
import { fetchAllMusicGenre } from '../../../actions/admin'

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
  const genreList = useSelector(state => state.admin.genreList)
  const [form, setForm] = useState({ name: '', genreIdList: [] })

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
    setForm({ name: '', genreIdList: [] })
    //!A stackOverflow, como eu te amo!!!!!
    document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false)
  }

  console.log(form)
  return (
    <Wrapper>
      <h4>Preencha os campos abaixo</h4>
      <Form onSubmit={handleSubmit}>
        <Input name='name' type='text' placeholder='Nome do Album' value={form.name} onChange={handleInputChange} />
        {genreList.map(genre => (
          <div key={genre.id}>
            <Input type='checkbox' id={genre.id} name={genre.id} onChange={handleCkeckChange} />
            <label htmlFor={genre.id}>{genre.name}</label>
          </div>
        ))}
        <BtnGreen>Enviar</BtnGreen>
      </Form>
    </Wrapper>
  )
}

export default Body