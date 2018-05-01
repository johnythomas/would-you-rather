import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Paper } from "material-ui"
import Tabs, { Tab } from "material-ui/Tabs"
import {
  toggleQuestionVisibilityFilter,
  QuestionFilters
} from "../actions/questionVisibilityFilter"

const TopTab = ({
  questionVisibilityFilter,
  changeQuestionVisibilityFilter
}) => (
  <Paper>
    <Tabs
      value={questionVisibilityFilter === QuestionFilters.UNANSWERED ? 0 : 1}
      onChange={(e, value) =>
        changeQuestionVisibilityFilter(
          value === 0 ? QuestionFilters.UNANSWERED : QuestionFilters.ANSWERED
        )
      }
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Unanswered" />
      <Tab label="Answered" />
    </Tabs>
  </Paper>
)

TopTab.propTypes = {
  questionVisibilityFilter: PropTypes.string.isRequired,
  changeQuestionVisibilityFilter: PropTypes.func.isRequired
}

const mapStateToProps = ({ questionVisibilityFilter }) => ({
  questionVisibilityFilter
})

export default connect(mapStateToProps, {
  changeQuestionVisibilityFilter: toggleQuestionVisibilityFilter
})(TopTab)
