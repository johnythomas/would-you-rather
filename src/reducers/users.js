import { USERS_FETCHED } from "../actions/users"
import {
  SAVE_QUESTION_ANSWER,
  ADD_QUESTION,
  DELETE_QUESTION
} from "../actions/questions"

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
    case ADD_QUESTION: {
      const author = state[action.question.author]
      return {
        ...state,
        [author.id]: {
          ...author,
          questions: author.questions.concat([action.question.id])
        }
      }
    }
    case DELETE_QUESTION:
      return Object.keys(state).reduce((acc, userId) => {
        acc[userId] = {
          ...state[userId],
          questions: state[userId].questions.filter(q => q !== action.qid),
          answers: Object.keys(state[userId].answers).reduce(
            (answersAcc, ansId) => {
              if (action.qid !== ansId) {
                return {
                  ...answersAcc,
                  [ansId]: state[userId].answers[ansId]
                }
              }
              return answersAcc
            },
            {}
          )
        }
        return acc
      }, {})
    default:
      return state
  }
}

export default users
