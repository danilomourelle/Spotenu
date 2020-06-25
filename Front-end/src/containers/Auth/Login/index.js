import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../../components/Header'
import Body from './Body'
import Dialog from '../../../components/Dialog'
import { setLoginResponse } from '../../../actions/responses'


function Login() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.responses.login)

  const handleCloseDialog = () => {
    dispatch(setLoginResponse({ isOpen: false, message: '' }))
  }

  return <>
    <Header text='LOGIN' />
    <Body />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default Login