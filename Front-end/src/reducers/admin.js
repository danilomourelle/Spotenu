const initialState = {
  bandsListToApprove: [
    { name: 'Buscando...', id: '001' },

  ],
  genreList: [
    { name: 'Samba', id: '001' },
    { name: 'Pagode', id: '002' },
    { name: 'MPB', id: '003' },
    { name: 'Rock', id: '004' },
    { name: 'Pop', id: '005' },
    { name: 'Jazz', id: '006' },
    { name: 'Funk', id: '007' },
    { name: 'Samba', id: '001' },
    { name: 'Pagode', id: '002' },
    { name: 'MPB', id: '003' },
    { name: 'Rock', id: '004' },
    { name: 'Pop', id: '005' },
    { name: 'Jazz', id: '006' },
    { name: 'Funk', id: '007' },
    { name: 'Samba', id: '001' },
    { name: 'Pagode', id: '002' },

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