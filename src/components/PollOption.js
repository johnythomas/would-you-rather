import React from "react"
import PropTypes from "prop-types"
import { LinearProgress, withStyles } from "material-ui"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
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
    {isChecked !== null && (
      <ListItemIcon>
        {isChecked ? <Done className={classes.radioBtn} /> : <span />}
      </ListItemIcon>
    )}
    <ListItemText>
      {text}
      {isChecked !== null && `(${votes} votes | ${percent}%)`}
      {isChecked !== null && (
        <LinearProgress
          className={classes.progressBar}
          variant="determinate"
          value={percent}
        />
      )}
    </ListItemText>
  </ListItem>
)

PollOption.defaultProps = {
  isChecked: null
}

PollOption.propTypes = {
  classes: PropTypes.shape({
    progressBar: PropTypes.string.isRequired,
    radioBtn: PropTypes.string.isRequired
  }).isRequired,
  isChecked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired
}

export default withStyles(styles)(PollOption)
