import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../../components/Header'
import Body from './Body'
import Dialog from '../../../components/Dialog'
import { setDialog } from '../../../actions/dialog'


function ApproveBand() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.dialog)
  const user = useSelector(state => state.authenticator.user)
  const [response, setResponse] = useState()

  const handleCloseDialog = (response) => {
    dispatch(setDialog({ isOpen: false, message: '' }))
    setResponse(response)
  }

  return <>
    <Header text={`ADMIN: ${user.name}`} />
    <Body response={response} />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default ApproveBand