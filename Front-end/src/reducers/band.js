const initialState = {
  myAlbunsList: [
    {name:'Buscando...', id: '001'},
    
  ],
  myMusicsList: [
    {name:'Music1...', id: '001'},
    {name:'Music2...', id: '002'},
    {name:'Music3...', id: '003'},
    {name:'Music4...', id: '004'},
    {name:'Music5...', id: '005'},
    {name:'Music6...', id: '006'},
  ]
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
    default:
      return state
  }
}

export default band