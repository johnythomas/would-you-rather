import { combineReducers } from "redux"
import users from "./users"
import questions from "./questions"
import authedUser from "./authedUser"
import questionVisibilityFilter from "./questionVisibilityFilter"
import drawer from "./drawer"

export default combineReducers({
  users,
  authedUser,
  questions,
  questionVisibilityFilter,
  drawer
})
