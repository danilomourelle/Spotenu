import styled from 'styled-components'

const BasicWrapper = styled.div`
  width: 100%;
  min-width:800px;
`
const BasicTitle = styled.h1`
  font-size: 80px;
  font-weight:900;
  width: 70%;
  text-align:center;
  @media(max-width: 1200px){
    font-size: 55px;
  }
`
const BasicSubTitle = styled.h3`
  font-size: 30px;
  font-weight:900;
  width: 70%;
  text-align:center;
  @media(max-width: 1200px){
    font-size: 20px;
  }
`

// ********** Header ************* //
export const HeaderWrapper = styled(BasicWrapper)`
  height: 80px;
  background-color: rgba(0,0,0,0.6);
  padding: 40px  15px;
  position: fixed;
  align-items:center;
  color:#fff;
  justify-content:space-between;
`
// ********** Medium ************* //
export const MediumWrapper = styled(BasicWrapper)`
  min-height: 900px;
  background-color: #FFFFFF;
  padding: 80px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
`
export const MediumTitle = styled(BasicTitle)`
 
`
export const MediumSubTitle = styled(BasicSubTitle)`
  
`
export const ImageGrid = styled.div`
  width:70%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  img {
    object-fit:cover;
    width:100%;
  }
`
// ********** Upper ************* //
export const UpperWrapper = styled(BasicWrapper)`
  height: 540px;
  background-color: #FFCDD2;
  padding: 80px  15px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: space-evenly;
`
export const UpperTitle = styled(BasicTitle)`

`
export const UpperSubTitle = styled(BasicSubTitle)`

`
export const BtnWrapper = styled.div`
  width:70%;
  display:flex;
  justify-content:center;
  align-items: center;
  padding: 0 15%;
`