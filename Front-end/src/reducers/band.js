const initialState = {
  myAlbunsList: [
    { name: 'Buscando...', id: '001' }
  ],
  myMusicsList: [
    { name: 'Music1...', id: '001' }
  ],
  albumIdToDelete: ''
}

const band = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_ALBUNS_LIST":
      return {
        ...state, myAlbunsList: action.payload.myAlbunsList
      }
    case "SET_MY_MUSICS_LIST":
      return {
        ...state, myMusicsList: action.payload.myMusicsList
      }
    case "SET_ALBUM_ID_TO_DELETE":
      return {
        ...state, albumIdToDelete: action.payload.albumIdToDelete
      }
    default:
      return state
  }
}

export default band