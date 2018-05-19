import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Grid, withStyles } from "@material-ui/core"
import Question from "./Question"
import AddPollButton from "./AddPollButton"

const styles = {
  spacing: {
    padding: 20
  }
}

const Questions = ({ classes, questionIds }) => (
  <Fragment>
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

export default withStyles(styles)(Questions)
