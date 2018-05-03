import { showLoading, hideLoading } from "react-redux-loading-bar"
import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "../util/_DATA"
import { showMessage } from "./message"

export const QUESTIONS_FETCHED = "QUESTIONS_FETCHED"
export const ADD_QUESTION = "ADD_QUESTION"
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER"

export const questionsFetched = questions => ({
  type: QUESTIONS_FETCHED,
  questions
})

export const addQuestion = question => ({
  type: ADD_QUESTION,
  question
})

export const saveQuestionAnswer = info => ({
  type: SAVE_QUESTION_ANSWER,
  info
})

export const fetchQuestions = () => dispatch => {
  dispatch(showLoading())
  _getQuestions().then(questions => {
    dispatch(questionsFetched(questions))
    dispatch(hideLoading())
  })
}

export const handleAddQuestion = question => dispatch => {
  dispatch(showLoading())
  _saveQuestion(question).then(res => {
    dispatch(hideLoading())
    dispatch(addQuestion(res))
    dispatch(showMessage("Poll Added Successfully"))
  })
}

export const handleAnserQuestion = info => dispatch => {
  dispatch(showLoading())
  _saveQuestionAnswer(info).then(() => {
    dispatch(hideLoading())
    dispatch(saveQuestionAnswer(info))
    dispatch(showMessage("Answer updated Successfully"))
  })
}
