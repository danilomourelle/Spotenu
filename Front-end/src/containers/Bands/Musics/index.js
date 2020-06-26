import React, { useState } from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import { useDispatch, useSelector } from 'react-redux'
import Dialog from '../../../components/Dialog'
import { setDialog } from '../../../actions/dialog'
import { setMusicIdToDelete } from '../../../actions/band'


function Music() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.dialog)
  const [response, setResponse] = useState()

  const handleCloseDialog = (response) => {
    dispatch(setDialog({ isOpen: false, message: '' }))
    response || dispatch(setMusicIdToDelete(undefined))
    setResponse(response)
  }
  return (
    <>
      <Header text='SPOTENU - MINHAS MÚSICA' />
      <Body response={response} />
      <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
    </>)
}

export default Music