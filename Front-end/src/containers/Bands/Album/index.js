import React, { useState } from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import { useSelector, useDispatch } from 'react-redux'
import { setDialog } from '../../../actions/dialog'
import Dialog from '../../../components/Dialog'
import { setAlbumIdToDelete } from '../../../actions/band'


function Album() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.dialog)
  const [response, setResponse] = useState()

  const handleCloseDialog = (response) => {
    dispatch(setDialog({ isOpen: false, message: '' }))
    response || dispatch(setAlbumIdToDelete(undefined))
    setResponse(response)
  }
  return <>
    <Header text='SPOTENU - MEUS ALBUNS' />
    <Body response={response} />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default Album