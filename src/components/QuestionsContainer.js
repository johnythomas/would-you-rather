import { connect } from "react-redux"
import { getFilteredQuestions } from "../util/helpers"
import Questions from "./Questions"

const mapStateToProps = ({
  questions,
  authedUser,
  questionVisibilityFilter
}) => ({
  questionIds: !questions
    ? []
    : getFilteredQuestions(
        questions,
        authedUser,
        questionVisibilityFilter
      ).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
})

export default connect(mapStateToProps)(Questions)
