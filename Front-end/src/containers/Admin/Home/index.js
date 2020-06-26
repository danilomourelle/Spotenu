import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../../components/Header'
import Body from './Body'


function HomeAdmin() {
  const user = useSelector(state => state.authenticator.user)

  return <>
    <Header text={`ADMIN: ${user.name}`} />
    <Body />
  </>
}

export default HomeAdmin