import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { routes } from '../../Router/router.js'
import { BtnGreen, BtnWhite } from '../../components/Buttons'
import { UpperWrapper, UpperTitle, UpperSubTitle, BtnWrapper } from './style'



function Upper() {
  
  return (
    <UpperWrapper>
      <UpperTitle>Curta 3 meses de Premium grátis</UpperTitle>
      <UpperSubTitle>Música sem parar, zero propagando e até offline</UpperSubTitle>
      <BtnWrapper>
        <Link to={routes.premium}><BtnGreen>SEJA PREMIUM</BtnGreen></Link>
        <Link to={routes.signIn}><BtnWhite>CONTA FREE</BtnWhite></Link>
      </BtnWrapper>
    </UpperWrapper>
  )
}

export default Upper