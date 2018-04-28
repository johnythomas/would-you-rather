import React from "react"
import { AppBar, Toolbar, IconButton, Typography, Button } from "material-ui"
import MenuIcon from "@material-ui/icons/Menu"
import { AccountCircle } from "@material-ui/icons"

const styles = {
  iconButton: {
    marginLeft: -12,
    marginRight: 20
  },
  flex: {
    flex: 1
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
        <AccountCircle />
        Logout
      </Button>
    </Toolbar>
  </AppBar>
)

export default TopNav
