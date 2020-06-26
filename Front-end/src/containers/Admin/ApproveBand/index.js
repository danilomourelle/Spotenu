import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../../components/Header'
import Body from './Body'
import Dialog from '../../../components/Dialog'



function ApproveBand() {
  const user = useSelector(state => state.authenticator.user)

  return <>
    <Header text={`ADMIN: ${user.name}`} />
    <Body />
    <Dialog />
  </>
}

export default ApproveBand