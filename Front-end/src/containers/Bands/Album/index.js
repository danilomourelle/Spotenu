import React, { useState } from 'react'
import Header from '../../../components/Header'
import Body from './Body'
import { useSelector, useDispatch } from 'react-redux'
import Dialog from '../../../components/Dialog'
import { setAlbumIdToDelete } from '../../../actions/band'


function Album() {

  return <>
    <Header text='SPOTENU - MEUS ALBUNS' />
    <Body />
    <Dialog />
  </>
}

export default Album