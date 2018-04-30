import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Drawer, Divider, List, withStyles } from "material-ui"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import { Add, TrendingUp, Home } from "@material-ui/icons"

const styles = {
  navLink: {
    textDecoration: "none"
  }
}

const LeftDrawer = ({ classes, isOpen, toggleDrawer }) => (
  <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="drawer-list-item">
        <List>
          <Link to={"/"} className={classes.navLink}>
            <ListItem button>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Divider />
          <Link to={"/leaderboard"} className={classes.navLink}>
            <ListItem button>
              <ListItemIcon>
                <TrendingUp />
              </ListItemIcon>
              <ListItemText primary="Leaderboard" />
            </ListItem>
          </Link>
          <Divider />
          <Link to={"/add"} className={classes.navLink}>
            <ListItem button>
              <ListItemIcon>
                <Add />
              </ListItemIcon>
              <ListItemText primary="Create Poll" />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </div>
    </div>
  </Drawer>
)

LeftDrawer.propTypes = {
  classes: PropTypes.shape({
    navLink: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(LeftDrawer)
