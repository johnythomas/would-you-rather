import { SET_AUTHED_USER, LOGOUT_USER } from "../actions/authedUser"

const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}

export default authedUser
