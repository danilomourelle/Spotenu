import React from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import Dialog from '../../../components/Dialog'
import { setSignInResponse } from '../../../actions/responses'
import { useDispatch, useSelector } from 'react-redux'



function SignIn() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.responses.signIn)

  const handleCloseDialog = () => {
    dispatch(setSignInResponse({ isOpen: false, message: '' })) //TODO: Colocar a action que desliga dialog
  }

  return <>
    <Header text='CADASTRO' />
    <Body />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default SignIn