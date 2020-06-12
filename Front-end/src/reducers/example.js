const initialState = {
  state1: [],
  state2: undefined,
  state3: ''
}

const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case "AÇÃO_1":
      return {
        ...state, state1: action.payload.info1
      }
    case "AÇÃO_2":
      return {
        ...state, state2: action.payload.info2
      }
    case "AÇÃO_3":

      return {
        ...state, state3: action.payload.info3
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer1