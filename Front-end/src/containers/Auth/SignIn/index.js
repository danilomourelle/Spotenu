import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../../components/Header'
import Body from './Body'
import Dialog from '../../../components/Dialog'
import { setDialog } from '../../../actions/dialog'



function SignIn() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.dialog)

  const handleCloseDialog = () => {
    dispatch(setDialog({ isOpen: false, message: '' }))
  }

  return <>
    <Header text='CADASTRO' />
    <Body />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default SignIn