import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { routes } from '../../../Router/router'
import Playlist from '../../../components/Playlist'
import { BaseBody } from '../../../components/Body'
import { BtnGreen } from '../../../components/Buttons'
import { Input, Checkbox } from '../../../components/Input'
import { createNewAlbum } from '../../../actions/band'
import { fetchAllMusicGenre } from '../../../actions/admin'

const Wrapper = styled(BaseBody)`
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items:stretch;
  justify-content: start;
  padding: 20px 0;
`
const BaseSideWrapper = styled.div`
  height: 100%;
  width: 50%;
`
const SideWrapperLeft = styled(BaseSideWrapper)`
  display: flex;
  padding: 150px 0;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items:center;
  border-right: 1px solid #d9dadc;
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
          <BtnGreen>Enviar</BtnGreen>
        </Form>
      </SideWrapperLeft>
      <SideWrapperRight>
        <h1>Albuns</h1>
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