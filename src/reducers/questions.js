import {
  QUESTIONS_FETCHED,
  ADD_QUESTION,
  SAVE_QUESTION_ANSWER
} from "../actions/questions"

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
    case SAVE_QUESTION_ANSWER: {
      const { qid, authedUser, answer } = action.info
      const question = state[qid]
      return {
        ...state,
        [qid]: {
          ...question,
          [answer]: {
            ...question[answer],
            votes: [...question[answer].votes, authedUser]
          }
        }
      }
    }
    default:
      return state
  }
}

export default questions
