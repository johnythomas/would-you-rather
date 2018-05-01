import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Grid, withStyles } from "material-ui"
import Question from "./Question"

const styles = {
  spacing: {
    padding: 20
  }
}

const Questions = ({ classes, questionIds }) => (
  <div className={classes.spacing}>
    <Grid container spacing={16}>
      {questionIds.map(id => <Question key={id} id={id} />)}
    </Grid>
  </div>
)

Questions.propTypes = {
  classes: PropTypes.shape({
    spacing: PropTypes.string.isRequired
  }).isRequired,
  questionIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions)
})

export default connect(mapStateToProps)(withStyles(styles)(Questions))
