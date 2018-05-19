import React from "react"
import PropTypes from "prop-types"
import {
  LinearProgress,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from "@material-ui/core"
import { Done } from "@material-ui/icons"

const styles = theme => ({
  progressBar: {
    height: 10
  },
  radioBtn: {
    color: theme.palette.secondary.light
  }
})

const PollOption = ({ classes, isChecked, text, votes, percent }) => (
  <ListItem>
    {isChecked && (
      <ListItemIcon>
        <Done className={classes.radioBtn} />
      </ListItemIcon>
    )}
    <ListItemText inset>
      {text}
      {`(${votes} votes | ${percent}%)`}
      <LinearProgress
        className={classes.progressBar}
        variant="determinate"
        value={percent}
      />
    </ListItemText>
  </ListItem>
)

PollOption.propTypes = {
  classes: PropTypes.shape({
    progressBar: PropTypes.string.isRequired,
    radioBtn: PropTypes.string.isRequired
  }).isRequired,
  isChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired
}

export default withStyles(styles)(PollOption)
