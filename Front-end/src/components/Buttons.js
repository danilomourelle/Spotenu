import styled from 'styled-components'

const BaseBtn = styled.button`
  height: 50px;
  width: ${props => props.size === 'small' ? '150px' : props.size === 'large' ? '350px' : '220px'};
  border-radius: 25px;
  font-size: 16px;
  font-weight:700;
  :hover {
    scale: 1.05
  }
`

export const BtnGreen = styled(BaseBtn)`
  background-color: #1db954;
  color:#fff;
  border: none;
  margin: 0 20px;
  :hover{
    background-color: #1ed760;
  }
`
export const BtnWhite = styled(BaseBtn)`
  background-color: transparent;
  color:#000;
  border: 2px #000 solid;
`

export const BtnLogin = styled(BaseBtn)`
  background-color: transparent;
  border: 2px #fff solid;
  color:#FFF;
`

export const LittleBtn = styled.button`
  width: 100px;
  height: 36px;
  border: none;
  background-color: ${props => props.color || '#1db954'};
  border-radius: 18px;
  color: #fff;
  font-size: 12px;
  font-weight:700;
  :hover {
    scale: 1.05
  }
`