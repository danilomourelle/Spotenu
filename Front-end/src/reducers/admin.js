const initialState = {
  bandsListToApprove: [
    {name:'Buscando...', id: 'busca'},
    {name:'Bus...', id: '002'}
  ]
}

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BAND_LIST_TO_APPROVE":
      return {
        ...state, bandsListToApprove: action.payload.bandsListToApprove
      }
    default:
      return state
  }
}

export default admin