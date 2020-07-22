export const initialDialog = {
  isOpen: false,
  message: '',
  type: '',
  response: false
}


export const dialog = (state, action) => {

  switch (action.type) {
    case "SET_DIALOG_RESPONSE":
      return action.payload.dialog

    default:
      return state
  }
}
export default dialog