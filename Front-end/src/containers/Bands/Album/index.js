import React, { useState } from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import { useSelector, useDispatch } from 'react-redux'
import { setAlbumResponse } from '../../../actions/responses'
import Dialog from '../../../components/Dialog'


function Album() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.responses.album)
  const [response, setResponse] = useState()

  const handleCloseDialog = (response) => {
    dispatch(setAlbumResponse({ isOpen: false, message: '' }))
    setResponse(response)
  }
  return <>
    <Header text='SPOTENU - MEUS ALBUNS' />
    <Body response={response} />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default Album