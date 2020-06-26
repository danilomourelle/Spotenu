import React from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '../../../components/Dialog'
import { setDialog } from '../../../actions/dialog'


function MusicGenre() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.dialog)
  const user = useSelector(state => state.authenticator.user)

  const handleCloseDialog = () => {
    dispatch(setDialog({ isOpen: false, message: '' }))
  }

  return <>
    <Header text={`ADMIN: ${user.name}`} />
    <Body />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default MusicGenre