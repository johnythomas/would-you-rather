import React from "react"
import { Drawer, Divider, List } from "material-ui"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import { Add, TrendingUp } from "@material-ui/icons"

const LeftDrawer = ({ isOpen, toggleDrawer }) => (
  <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="drawer-list-item">
        <List>
          <ListItem button>
            <ListItemIcon>
              <TrendingUp />
            </ListItemIcon>
            <ListItemText primary="Leaderboard" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <Add />
            </ListItemIcon>
            <ListItemText primary="Create Poll" />
          </ListItem>
          <Divider />
        </List>
      </div>
    </div>
  </Drawer>
)

export default LeftDrawer
