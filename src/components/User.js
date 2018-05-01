import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Checkbox, Avatar, Typography, withStyles } from "material-ui"
import { ListItem, ListItemSecondaryAction } from "material-ui/List"

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

const User = ({ classes, selectedUser, user, handleToggle }) => (
  <ListItem
    onClick={handleToggle(user.id)}
    dense
    button
    className={
      user.id === selectedUser ? classes.notSelected : classes.selected
    }
  >
    <Avatar className={classes.bigAvatar} src={user.avatarURL} />
    <Typography variant="title">{user.name}</Typography>
    <ListItemSecondaryAction>
      <Checkbox
        onChange={handleToggle(user.id)}
        checked={selectedUser === user.id}
      />
    </ListItemSecondaryAction>
  </ListItem>
)

User.propTypes = {
  classes: PropTypes.shape({
    bigAvatar: PropTypes.string.isRequired,
    notSelected: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired
  }).isRequired,
  selectedUser: PropTypes.string,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired,
  handleToggle: PropTypes.func.isRequired
}

User.defaultProps = {
  selectedUser: null
}

const mapStateToProps = ({ users }, { id }) => ({
  user: users[id]
})

export default connect(mapStateToProps)(withStyles(styles)(User))
