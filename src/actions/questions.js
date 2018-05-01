import { _getQuestions } from "../util/_DATA"

export const QUESTIONS_FETCHED = "QUESTIONS_FETCHED"

export const questionsFetched = questions => ({
  type: QUESTIONS_FETCHED,
  questions
})

export const fetchQuestions = () => dispatch =>
  _getQuestions().then(questions => dispatch(questionsFetched(questions)))
