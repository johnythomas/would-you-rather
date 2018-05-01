import { _getUsers } from "../util/_DATA"

export const USERS_FETCHED = "USERS_FETCHED"

export const usersFetched = users => ({
  type: USERS_FETCHED,
  users
})

export const fetchUsers = () => dispatch =>
  _getUsers().then(users => dispatch(usersFetched(users)))
