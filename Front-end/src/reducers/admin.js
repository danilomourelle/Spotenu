const initialState = {
  bandsListToApprove: [
    {name:'Buscando...', id: 'busca'},
    {name:'Bus...', id: '002'}
  ],
  genreList: [
    {name:'Buscando...', id: 'busca'},
    {name:'Bus...', id: '002'},
    {name:'Buscando...', id: 'buscaa'},
    {name:'Bus...', id: '002aaa'},
    {name:'Buscando...', id: 'buscaaa'},
    {name:'Bus...', id: '002a'},
    {name:'Buscando...', id: 'buscaaaa'},
    {name:'Bus...', id: '002aa'},
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