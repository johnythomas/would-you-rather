import { QUESTIONS_FETCHED, ADD_QUESTION } from "../actions/questions"

const questions = (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_FETCHED:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    default:
      return state
  }
}

export default questions
