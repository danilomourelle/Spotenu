import React from 'react'
import styled from 'styled-components'
import { LittleBtn } from './Buttons'
import { setDialog } from '../actions/dialog'
import { useDispatch, useSelector } from 'react-redux'

const Wrapper = styled.div`
  width:100%;
  height:100vh;
  background-color: rgba(0,0,0,0.6);
  position:fixed;
  top:0;
  left:0;
  visibility: ${props => props.visible ? 'visible' : 'hidden'}; 
`
const Card = styled.div`
  min-width: 600px;
  min-height: 200px;
  border-radius: 15px;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  span{
    width:50%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
  }
`

function Dialog(props) {
  const dialog = useSelector(state => state.dialog)
  const dispatch = useDispatch()

  const handleClose = (response) => {
    dispatch(setDialog(
      {
        isOpen: false,
        message: '',
        type: '',
        response: response
      }
    ))
  }

  const dialogShown = () => {
    switch (dialog.type) {
      case 'confirm':
        return (
          <Card>
            <p>{dialog.message}</p>
            <LittleBtn onClick={handleClose}>Fechar</LittleBtn>
          </Card>
        )
      case 'info':
        return (
          <Card>
            <p>{dialog.message}</p>
          </Card>
        )
      case 'decision':
        return (
          <Card>
            <p>{dialog.message}</p>
            <span>
              <LittleBtn onClick={() => handleClose(true)}>Ok</LittleBtn>
              <LittleBtn color='#b70811' onClick={() => handleClose(false)}>Cancelar</LittleBtn>
            </span>
          </Card>
        )
      default:
        return (
          <Card>
            <p>{dialog.message}</p>
            <LittleBtn onClick={handleClose}>Fechar</LittleBtn>
          </Card>
        )
    }
  }
  return (
    <Wrapper visible={dialog.isOpen}>
      {
        dialogShown()
      }
    </Wrapper>
  )
}

export default Dialog