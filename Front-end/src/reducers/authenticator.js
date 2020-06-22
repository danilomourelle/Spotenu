const initialState = {
  userType: undefined,
}

const authenticator = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_TYPE":
      return {
        ...state, userType: action.payload.userType
      }
    default:
       return state
  }
}

export default authenticator