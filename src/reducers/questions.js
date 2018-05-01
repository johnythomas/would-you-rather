import { QUESTIONS_FETCHED } from "../actions/questions"

export const questions = (state = {}, action) => {
  switch (action.type) {
    case QUESTIONS_FETCHED:
      return {
        ...state,
        ...action.questions
      }
    default:
      return state
  }
}
