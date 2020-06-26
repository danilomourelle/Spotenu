const initialState = {
  myAlbunsList: [
    { name: 'Buscando...', id: '001' }
  ],
  myMusicsList: [
    { name: 'Music1...', id: '001' }
  ],
  albumIdToDelete: undefined,
  musicIdToDelete: undefined
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
        ...state, albumIdToDelete: action.payload.id
      }
    case "SET_MUSIC_ID_TO_DELETE":
      return {
        ...state, musicIdToDelete: action.payload.id
      }
    default:
      return state
  }
}

export default band