import React from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar
} from "material-ui"
import MenuIcon from "@material-ui/icons/Menu"

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

const TopNav = ({ toggleDrawer }) => (
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
      <Button color="inherit">
        <Avatar aria-label="Recipe" style={styles.profilePic}>
          R
        </Avatar>
        Logout
      </Button>
    </Toolbar>
  </AppBar>
)

export default TopNav
