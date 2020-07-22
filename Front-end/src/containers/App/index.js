import React, { useReducer } from "react";
import { createGlobalStyle } from 'styled-components'

import AdminContext from '../../context/admin'
import AuthenticatorContext from '../../context/authenticator'
import BandContext from '../../context/band'
import DialogContext from '../../context/dialog'

import { admin, initialAdmin } from '../../reducers/admin'
import { authenticator, initialAuthenticator } from '../../reducers/authenticator'
import { band, initialBand } from '../../reducers/band'
import { dialog, initialDialog } from '../../reducers/dialog'

import Router from '../../Router/router.js'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
    margin:0;
    font-family: 'Roboto', sans-serif;
  }
  body {
    min-width: 800px;
  }
`

export const App = () => {
  const [adminState, adminDispatch] = useReducer(admin, initialAdmin)
  const [authenticatorState, authenticatorDispatch] = useReducer(authenticator, initialAuthenticator)
  const [bandState, bandDispatch] = useReducer(band, initialBand)
  const [dialogState, dialogDispatch] = useReducer(dialog, initialDialog)

  return (
    <AdminContext.Provider value={[adminState, adminDispatch]}>
      <AuthenticatorContext.Provider value={[authenticatorState, authenticatorDispatch]}>
        <BandContext.Provider value={[bandState, bandDispatch]}>
          <DialogContext.Provider value={[dialogState, dialogDispatch]}>
            <GlobalStyle />
            <Router />
          </DialogContext.Provider>
        </BandContext.Provider >
      </AuthenticatorContext.Provider >
    </AdminContext.Provider >
  )
};

export default App;
