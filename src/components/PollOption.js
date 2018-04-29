import React from "react"
import PropTypes from "prop-types"
import { LinearProgress, withStyles } from "material-ui"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons"

const styles = theme => ({
  progressBar: {
    height: 10
  },
  radioBtn: {
    color: theme.palette.secondary.light
  }
})

const PollOption = ({ classes, isChecked, text, percent }) => (
  <ListItem>
    {isChecked !== null && (
      <ListItemIcon>
        {isChecked ? (
          <RadioButtonChecked className={classes.radioBtn} />
        ) : (
          <RadioButtonUnchecked className={classes.radioBtn} />
        )}
      </ListItemIcon>
    )}
    <ListItemText>
      {text}
      <LinearProgress
        className={classes.progressBar}
        variant="determinate"
        value={percent}
      />
    </ListItemText>
  </ListItem>
)

PollOption.defaultProps = {
  isChecked: null
}

PollOption.propTypes = {
  classes: PropTypes.shape({
    progressBar: PropTypes.object.isRequired,
    radioBtn: PropTypes.object.isRequired
  }).isRequired,
  isChecked: PropTypes.bool,
  text: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired
}

export default withStyles(styles)(PollOption)
