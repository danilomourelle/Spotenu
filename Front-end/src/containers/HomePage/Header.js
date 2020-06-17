import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(0,0,0,0.6);
  padding: 40px  15px;
  position: fixed;
`
function Header() {

  return (
    <Wrapper>
      Oi
    </Wrapper>
  )
}

export default Header