import React from "react"
import PropTypes from "prop-types"
import { Grid, withStyles } from "material-ui"
import Question from "./Question"

const styles = {
  spacing: {
    padding: 20
  }
}

const Questions = ({ classes }) => (
  <div className={classes.spacing}>
    <Grid container spacing={16}>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </Grid>
  </div>
)

Questions.propTypes = {
  classes: PropTypes.shape({
    spacing: PropTypes.string.isRequired
  }).isRequired
}

export default withStyles(styles)(Questions)
