const initialState = {
  signIn: {
    isOpen: false,
    message: '',
    type: ''
  },
  login: {
    isOpen: false,
    message: '',
    type: ''
  },
  approve: {
    isOpen: false,
    message: '',
    type: ''
  },
  genre: {
    isOpen: false,
    message: '',
    type: ''
  },
  album: {
    isOpen: false,
    message: '',
    type: ''
  },
  music: {
    isOpen: false,
    message: '',
    type: ''
  },
}

const responses = (state = initialState, action) => {

  switch (action.type) {
    case "SET_RESPONSE_SIGNIN":
      return {
        ...state, signIn: action.payload.message
      }
    case "SET_RESPONSE_LOGIN":
      return {
        ...state, login: action.payload.message
      }
    case "SET_RESPONSE_APPROVE":
      return {
        ...state, approve: action.payload.message
      }
    case "SET_RESPONSE_GENRE":
      return {
        ...state, genre: action.payload.message
      }
    case "SET_RESPONSE_ALBUM":
      return {
        ...state, album: action.payload.message
      }
    case "SET_RESPONSE_MUSIC":
      return {
        ...state, music: action.payload.message
      }
    default:
      return state
  }
}

export default responses