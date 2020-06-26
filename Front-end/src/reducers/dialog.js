const initialState = {
  isOpen: false,
  message: '',
  type: '',
  response: false
}


const dialog = (state = initialState, action) => {

  switch (action.type) {
    case "SET_DIALOG_RESPONSE":
      return action.payload.dialog

    default:
      return state
  }
}
export default dialog