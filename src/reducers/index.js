import { combineReducers } from "redux"
import { loadingBarReducer } from "react-redux-loading-bar"
import users from "./users"
import questions from "./questions"
import authedUser from "./authedUser"
import questionVisibilityFilter from "./questionVisibilityFilter"
import drawer from "./drawer"
import message from "./message"

export default combineReducers({
  users,
  authedUser,
  questions,
  questionVisibilityFilter,
  drawer,
  message,
  loadingBar: loadingBarReducer
})
