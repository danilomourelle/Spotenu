import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { BtnGreen, BtnWhite } from '../../../components/Buttons'
import { Select } from '../../../components/Input'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { routes } from '../../../Router/router'
import { fetchBandsToApprove, approveBand, approveAllBands } from '../../../actions/admin.js'
import { BaseBody } from '../../../components/Body'

const Wrapper = styled(BaseBody)`
  max-width:800px;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  align-content:flex-start;
  justify-items: center;
  select {
    margin-bottom:40px;
    text-align: right;
    max-width:400px;
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
  }, [history, dispatch])

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
      <h3>Lista de bandas aguardando liberação</h3>

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