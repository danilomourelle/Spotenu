import React from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '../../../components/Dialog'
import { setSignInResponse } from '../../../actions/responses'


function SignOtherAdmin() {
  const dispatch = useDispatch()
  const dialog = useSelector(state => state.responses.signIn)
  const user = useSelector(state => state.authenticator.user)

  const handleCloseDialog = () => {
    dispatch(setSignInResponse({ isOpen: false, message: '' }))
  }

  return <>
    <Header text={`ADMIN: ${user.name}`} />
    <Body />
    <Dialog dialog={dialog} closeFunction={handleCloseDialog} />
  </>
}

export default SignOtherAdmin