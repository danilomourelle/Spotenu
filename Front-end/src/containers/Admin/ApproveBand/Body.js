import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BtnGreen, BtnWhite } from '../../../components/Buttons'
import { Select } from '../../../components/Input'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { routes } from '../../../Router/router'
import { fetchBandsToApprove, approveBand, approveAllBands } from '../../../actions/admin.js'

const Wrapper = styled.main`
  width: 100%;
  max-width:800px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  padding:80px 200px;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content: start;
  h4 {
    margin:48px 0;
    font-size:1.2rem
  }
  select {
    margin-bottom:40px;
    text-align: right;
  }
`
const BtnWrapper = styled.div`
  width: 80%;
  max-width:400px;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
`

function Body() {
  const history = useHistory()
  const dispatch = useDispatch()

  const bandsListToApprove = useSelector(state => state.admin.bandsListToApprove)

  const [bandIdToApprove, setBandIdToApprove] = useState(undefined)

  useEffect(() => {
    if (!window.localStorage.getItem('token')) {
      history.push(routes.home)
    }
    dispatch(fetchBandsToApprove())
  }, [history])

  useEffect(() => {
    if(bandsListToApprove.length >0){
      setBandIdToApprove(bandsListToApprove[0].id)
    } 
    else{
      setBandIdToApprove(undefined)
    }
  }, [bandsListToApprove])

  const handleInputChange = e => {
    setBandIdToApprove(e.target.value)
  }

  const handleApproveBand = (id) => {
    dispatch(approveBand(bandIdToApprove))
  }

  const handleApproveAllBands = () => {
    const allBandsId = bandsListToApprove.map(band => (
      band.id
    ))
    dispatch(approveAllBands(allBandsId))
  }
  console.log(bandIdToApprove, bandsListToApprove)
  return (
    <Wrapper>
      <h4>Lista de bandas aguardando liberação</h4>

      <Select onChange={handleInputChange} disabled={bandsListToApprove.length === 0} value={bandIdToApprove}>
        {bandsListToApprove.length > 0 ?
          bandsListToApprove.map(band => (
            <option value={band.id} key={band.id}>{band.name}</option>
          )) :
          <option value={'sei lá'}>Nenhuma banda para Aprovar</option>}
      </Select>

      <BtnWrapper>
        <BtnGreen onClick={handleApproveBand}>Aprovar Banda</BtnGreen>
        <BtnWhite onClick={handleApproveAllBands}>Aprovar todos</BtnWhite>
      </BtnWrapper>

    </Wrapper>
  )
}

export default Body