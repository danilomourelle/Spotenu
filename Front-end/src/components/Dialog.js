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
`

function Dialog(props) {
  const { dialog, closeFunction } = props
  return (
    <Wrapper visible={dialog.isOpen}>
      <Card>
        <p>{dialog.message}</p>
        <LittleBtn onClick={closeFunction}>Fechar</LittleBtn>
      </Card>
    </Wrapper>
  )
}

export default Dialog