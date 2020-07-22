import React, { useReducer } from 'react'

import { adminReducer, initialAdmin } from '../../reducers/admin'
import { authenticatorReducer, initialAuthenticator } from '../../reducers/authenticator'
import { bandReducer, initialBand } from '../../reducers/band'
import { dialogReducer, initialDialog } from '../../reducers/dialog'

export const useAppStore = () => {

  const [admin, adminDispatch] = useReducer(adminReducer, initialAdmin)
  const [authenticator, authenticatorDispatch] = useReducer(authenticatorReducer, initialAuthenticator)
  const [band, bandDispatch] = useReducer(bandReducer, initialBand)
  const [dialog, dialogDispatch] = useReducer(dialogReducer, initialDialog)

  return {
    store: { 
      admin, 
      authenticator,
      band,
      dialog
     },
     dispatch:{
      adminDispatch,
      authenticatorDispatch,
      bandDispatch,
      dialogDispatch
     }
  }
}