import { USERS_FETCHED } from "../actions/users"
import { SAVE_QUESTION_ANSWER } from "../actions/questions"

const users = (state = {}, action) => {
  switch (action.type) {
    case USERS_FETCHED:
      return {
        ...state,
        ...action.users
      }
    case SAVE_QUESTION_ANSWER: {
      const { qid, authedUser, answer } = action.info
      const user = state[authedUser]
      return {
        ...state,
        [authedUser]: {
          ...user,
          answers: {
            ...user.answers,
            [qid]: answer
          }
        }
      }
    }
    default:
      return state
  }
}

export default users
