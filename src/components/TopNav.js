import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  withStyles
} from "material-ui"
import Menu, { MenuItem } from "material-ui/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import { ArrowDropDown } from "@material-ui/icons"
import { logout } from "../actions/authedUser"
import { toggleDrawer } from "../actions/drawer"

const styles = {
  profilePic: {
    marginLeft: 5
  },
  pageTitleLink: {
    textDecoration: "none",
    flex: 1,
    color: "white"
  },
  name: {
    textTransform: "uppercase"
  },
  arrowdropDown: {
    width: "14px"
  }
}

class TopNav extends Component {
  state = {
    anchorEl: null
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, toggleDrawerState, user, doLogout } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    return (
      <AppBar position="static">
        <Toolbar>
          {user && (
            <IconButton
              onClick={() => toggleDrawerState()}
              className={classes.iconButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link to="/" className={classes.pageTitleLink}>
            <Typography variant="title" color="inherit">
              Would You Rather
            </Typography>
          </Link>
          {user && (
            <Fragment>
              <Typography
                className={classes.name}
                color="inherit"
                variant="subheading"
              >
                {user.name}
              </Typography>
              <Avatar
                aria-label="Recipe"
                className={classes.profilePic}
                src={user.avatarURL}
              />
              <div>
                <IconButton
                  className={classes.arrowdropDown}
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <ArrowDropDown />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      this.handleClose()
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.handleClose()
                      doLogout()
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

TopNav.propTypes = {
  toggleDrawerState: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    avatarURL: PropTypes.string.isRequired
  }),
  classes: PropTypes.shape({
    profilePic: PropTypes.string.isRequired,
    pageTitleLink: PropTypes.string.isRequired
  }).isRequired
}

TopNav.defaultProps = {
  user: null
}

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser]
})

export default connect(mapStateToProps, {
  doLogout: logout,
  toggleDrawerState: toggleDrawer
})(withStyles(styles)(TopNav))
