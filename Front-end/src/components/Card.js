import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const Wrapper = styled.section`
  width: 25%;
  height: 40vh;
  max-width:400px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const StyledLink = styled(Link)`
  text-decoration:none;
  color:inherit;
  :hover{
    font-style: italic;
  }
  img {
    object-fit:cover;
    height: 80%;
    width:100%
  }
  div {
    text-align:center;
    padding:20px;
    font-size:20px;
  }
`

function Card(props) {
  const { card } = props
  return (
    <Wrapper>
      <StyledLink to={card.to}>
        <img src={card.src} alt={card.alt} />
        <div>
          <p>{card.text}</p>
        </div>
      </StyledLink>
    </Wrapper>
  )
}

export default Card