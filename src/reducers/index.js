import { combineReducers } from "redux"
import users from "./users"
import questions from "./questions"
import authedUser from "./authedUser"

export default combineReducers({ users, authedUser, questions })
