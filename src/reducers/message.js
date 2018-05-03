import { SHOW_MESSAGE, HIDE_MESSAGE } from "../actions/message"

const defaultState = {
  text: "",
  isOpen: false
}

const message = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        isOpen: true,
        text: action.text
      }
    case HIDE_MESSAGE:
      return defaultState
    default:
      return state
  }
}

export default message
