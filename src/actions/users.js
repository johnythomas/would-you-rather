import { showLoading, hideLoading } from "react-redux-loading-bar"
import { _getUsers } from "../util/_DATA"

export const USERS_FETCHED = "USERS_FETCHED"

export const usersFetched = users => ({
  type: USERS_FETCHED,
  users
})

export const fetchUsers = () => async dispatch => {
  dispatch(showLoading())
  const users = await _getUsers()
  dispatch(usersFetched(users))
  dispatch(hideLoading())
}
