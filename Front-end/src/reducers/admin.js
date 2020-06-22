const initialState = {
  bandsListToApprove: [
    {name:'Buscando...', id: 'busca'},
    
  ],
  genreList: [
    {name:'Genre1...', id: '001'},
    {name:'Genre2...', id: '002'},
    {name:'Genre3...', id: '003'},
    {name:'Genre4...', id: '004'},
    {name:'Genre5...', id: '005'},
    {name:'Genre6...', id: '006'},
  ]
}

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BAND_LIST_TO_APPROVE":
      return {
        ...state, bandsListToApprove: action.payload.bandsListToApprove
      }
    case "SET_GENRE_LIST":
      return {
        ...state, genreList: action.payload.genreList
      }
    default:
      return state
  }
}

export default admin