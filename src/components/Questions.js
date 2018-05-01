import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, withStyles } from "material-ui"
import Question from "./Question"
import AddPollButton from "./AddPollButton"
import TopTab from "./TopTab"
import { getFilterdQuestions } from "../util/helpers"

const styles = {
  spacing: {
    padding: 20
  }
}

const Questions = ({ classes, questionIds }) => (
  <Fragment>
    <TopTab />
    <div className={classes.spacing}>
      <Grid container spacing={16}>
        {questionIds.map(id => <Question key={id} id={id} />)}
      </Grid>
    </div>
    <AddPollButton />
  </Fragment>
)

Questions.propTypes = {
  classes: PropTypes.shape({
    spacing: PropTypes.string.isRequired
  }).isRequired,
  questionIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const mapStateToProps = ({
  questions,
  authedUser,
  questionVisibilityFilter
}) => ({
  questionIds: getFilterdQuestions(
    questions,
    authedUser,
    questionVisibilityFilter
  ).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
})

export default connect(mapStateToProps)(withStyles(styles)(Questions))
