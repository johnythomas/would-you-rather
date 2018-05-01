import {
  TOGGLE_ANSWER_VISIBILITY_FILTER,
  UNANSWERED
} from "../actions/questionVisibilityFilter"

const questionVisibilityFilter = (state = UNANSWERED, action) => {
  switch (action.type) {
    case TOGGLE_ANSWER_VISIBILITY_FILTER:
      return action.visibilityFilter
    default:
      return state
  }
}

export default questionVisibilityFilter
