import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar
} from "material-ui"
import MenuIcon from "@material-ui/icons/Menu"
import { logout } from "../actions/authedUser"

const styles = {
  iconButton: {
    marginLeft: -12,
    marginRight: 20
  },
  flex: {
    flex: 1
  },
  profilePic: {
    marginRight: 5
  }
}

const TopNav = ({ toggleDrawer, user, doLogout }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        onClick={toggleDrawer(true)}
        style={styles.iconButton}
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" style={styles.flex}>
        Would You Rather
      </Typography>
      {user && (
        <Button color="inherit" onClick={() => doLogout()}>
          <Avatar
            aria-label="Recipe"
            style={styles.profilePic}
            src={user.avatarURL}
          />
          Logout
        </Button>
      )}
    </Toolbar>
  </AppBar>
)

TopNav.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    avatarURL: PropTypes.string.isRequired
  })
}

TopNav.defaultProps = {
  user: null
}

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser]
})

export default connect(mapStateToProps, { doLogout: logout })(TopNav)
