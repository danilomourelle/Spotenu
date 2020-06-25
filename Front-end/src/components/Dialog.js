import React from 'react'
import styled from 'styled-components'
import { LittleBtn } from './Buttons'

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
  const { dialog, closeFunction } = props

  const dialogShown = () => {
    switch (dialog.type) {
      case 'confirm':
        return (
          <Card>
            <p>{dialog.message}</p>
            <LittleBtn onClick={closeFunction}>Fechar</LittleBtn>
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
              <LittleBtn onClick={() => closeFunction(true)}>Ok</LittleBtn>
              <LittleBtn color='#b70811' onClick={() => closeFunction(false)}>Cancelar</LittleBtn>
            </span>
          </Card>
        )
      default:
        return (
          <Card>
            <p>{dialog.message}</p>
            <LittleBtn onClick={closeFunction}>Fechar</LittleBtn>
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