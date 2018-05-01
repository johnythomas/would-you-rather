import { USERS_FETCHED } from "../actions/users"

const users = (state = {}, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }
}

export default users
