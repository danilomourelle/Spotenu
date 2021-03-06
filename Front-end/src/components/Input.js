import styled from 'styled-components'

export const Input = styled.input`
  height:50px;
  font-size:20px;
  border-radius: 5px;
  width: 100%;
  border:1px solid black;
  padding: 0 10px;
`
export const Select = styled.select`
  height:50px;
  font-size:20px;
  border-radius: 5px;
  width: 100%;
  border:1px solid black;
  padding: 0 10px;
`

export const Checkbox = styled(Input)`
  width: 25%;
`

export const LittleSelect = styled.select`
  height:25px;
  width: 100%;
  max-width:200px;
  font-size:16px;
  text-align: right;
  border-radius: 5px;
  border:1px solid black;
  justify-self: right;
`