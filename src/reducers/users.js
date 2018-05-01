import { USERS_FETCHED } from "../actions/users"

const users = (state = {}, action) => {
  console.log(action)
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
