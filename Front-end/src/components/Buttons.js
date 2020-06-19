import styled from 'styled-components'

export const BtnGreen = styled.button`
  background-color: #1db954;
  height: 50px;
  border-radius:25px;
  color:#fff;
  border: none;
  font-size: 16px;
  font-weight:700;
  padding:0 50px;
  margin: 0 20px;
  :hover{
    background-color: #1ed760;
    scale:1.05
  }
`
export const BtnWhite = styled.button`
  background-color: transparent;
  height: 50px;
  border-radius:25px;
  color:#000;
  border: 2px #000 solid;
  font-size: 16px;
  font-weight:700;
  padding:0 50px;
  :hover{
    scale:1.05;
  }
`

export const BtnLogin = styled(BtnWhite)`
  border-color:#fff;
    color:#FFF;
`