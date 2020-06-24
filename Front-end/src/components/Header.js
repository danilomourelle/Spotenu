import React from 'react'
import styled from 'styled-components'
import { routes } from '../Router/router'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #d9dadc;
  font-size:35px;
  font-weight:600;
  display:grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items:center;
  align-items:center;
`
const StyledLink = styled(Link)`
  padding: 10px 30px;
  border-radius: 50px;
  color: #fdfbec;
  background-color: #5fba7e;
  text-decoration:none;
  text-align:center;
  font-family: 'Krona One', sans-serif;
  font-size: 24px;
`
function Header(props) {
  return (
    <Wrapper>
      <StyledLink to={routes.home}>SPOTENU</StyledLink>
      {props.text}
    </Wrapper>
  )
}

export default Header