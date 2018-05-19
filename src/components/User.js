import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Checkbox,
  Avatar,
  Typography,
  ListItem,
  ListItemSecondaryAction,
  withStyles
} from "@material-ui/core"

const styles = theme => ({
  notSelected: {
    backgroundColor: theme.palette.text.disabled
  },
  selected: {
    backgroundColor: "transparent"
  },
  bigAvatar: {
    width: 60,
    height: 60,
    marginRight: 20
  }
})

const User = ({ classes, isSelected, user }) => (
  <ListItem
    dense
    button
    className={isSelected ? classes.notSelected : classes.selected}
  >
    <Avatar className={classes.bigAvatar} src={user.avatarURL} />
    <Typography variant="title">{user.name}</Typography>
    <ListItemSecondaryAction>
      <Checkbox checked={isSelected} />
    </ListItemSecondaryAction>
  </ListItem>
)

User.propTypes = {
  classes: PropTypes.shape({
    bigAvatar: PropTypes.string.isRequired,
    notSelected: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = ({ users }, { id }) => ({
  user: users[id]
})

export default connect(mapStateToProps)(withStyles(styles)(User))
