export const initialState = {
  myAlbumsList: [
    { name: 'Buscando...', id: '001' }
  ],
  myMusicsList: [
    { name: 'Music1...', id: '001' }
  ],
  albumIdToDelete: undefined,
  musicIdToDelete: undefined
}

export const band = (state, action) => {
  switch (action.type) {
    case "SET_MY_ALBUMS_LIST":
      return {
        ...state, myAlbumsList: action.payload.myAlbumsList
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