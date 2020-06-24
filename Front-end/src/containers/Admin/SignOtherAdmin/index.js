import React from 'react'
import Header from '../../../components/Header'
import Body from  './Body'
import { useSelector } from 'react-redux'


function SignOtherAdmin() {
  const user = useSelector(state => state.authenticator.user)

  return <>
    <Header text={`ADMIN: ${user.name}`} />
    <Body />
  </>
}

export default SignOtherAdmin