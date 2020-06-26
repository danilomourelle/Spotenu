import React from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import { useSelector } from 'react-redux'
import Dialog from '../../../components/Dialog'



function SignOtherAdmin() {
  const user = useSelector(state => state.authenticator.user)

  return <>
    <Header text={`ADMIN: ${user.name}`} />
    <Body />
    <Dialog />
  </>
}

export default SignOtherAdmin