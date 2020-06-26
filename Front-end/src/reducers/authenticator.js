const initialState = {
  user: {
    name: ''
  },
}

const authenticator = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state, user: action.payload.user
      }
    default:
      return state
  }
}

export default authenticator