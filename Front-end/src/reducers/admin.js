export const initialAdmin = {
  bandsListToApprove: [
    { name: 'Buscando...', id: '001' },
  ],
  genreList: [
    { name: 'Buscando...', id: '001' },
  ]
}

export const admin = (state, action) => {
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