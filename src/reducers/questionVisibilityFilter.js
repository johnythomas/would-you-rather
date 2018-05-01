import {
  TOGGLE_ANSWER_VISIBILITY_FILTER,
  QuestionFilters
} from "../actions/questionVisibilityFilter"

const questionVisibilityFilter = (
  state = QuestionFilters.UNANSWERED,
  action
) => {
  switch (action.type) {
    case TOGGLE_ANSWER_VISIBILITY_FILTER:
      return action.visibilityFilter
    default:
      return state
  }
}

export default questionVisibilityFilter
