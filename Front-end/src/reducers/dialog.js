export const initialDialog = {
  isOpen: false,
  message: '',
  type: '',
  response: false
}


export const dialogReducer = (state, action) => {

  switch (action.type) {
    case "SET_DIALOG_RESPONSE":
      return action.payload.dialog

    default:
      return state
  }
}
export default dialogReducer