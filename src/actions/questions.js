import { _getQuestions, _saveQuestion } from "../util/_DATA"

export const QUESTIONS_FETCHED = "QUESTIONS_FETCHED"
export const ADD_QUESTION = "ADD_QUESTION"

export const questionsFetched = questions => ({
  type: QUESTIONS_FETCHED,
  questions
})

export const addQuestion = question => ({
  type: ADD_QUESTION,
  question
})

export const fetchQuestions = () => dispatch =>
  _getQuestions().then(questions => dispatch(questionsFetched(questions)))

export const handleAddQuestion = question => dispatch =>
  _saveQuestion(question).then(res => dispatch(addQuestion(res)))
