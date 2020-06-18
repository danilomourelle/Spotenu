import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d9dadc;
  font-size:35px;
  font-weight:600;
  display:flex;
  justify-content:center;
  align-items:center;
`
function Header() {
  return (
    <Wrapper>
      SPOTENU
    </Wrapper>
  )
}

export default Header