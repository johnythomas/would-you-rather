import React, { Fragment } from "react"
import {
  Typography,
  Card,
  Grid,
  Button,
  Divider,
  Checkbox,
  Avatar,
  withStyles
} from "material-ui"
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List"
import { CardActions } from "material-ui/Card"
import { deepOrange } from "material-ui/colors"

const styles = theme => ({
  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  notSelected: {
    backgroundColor: theme.palette.text.disabled
  },
  selected: {
    backgroundColor: "transparent"
  },
  userList: {
    maxHeight: 500,
    overflowY: "auto"
  },
  loginCardAction: {
    padding: 20
  },
  loginHeading: {
    marginTop: 10,
    marginBottom: 10
  }
})

class Login extends React.Component {
  state = {
    checked: null
  }

  handleToggle = value => () => {
    this.setState({
      checked: value
    })
  }

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Grid container style={{ marginTop: 40 }}>
          <Grid item xs={1} sm={2} md={3} lg={4} xl={4} />
          <Grid item xs={10} sm={8} md={6} lg={4} xl={4}>
            <Card style={{ textAlign: "center", marginTop: 20 }}>
              <Typography className={classes.loginHeading} variant="display3">
                Login
              </Typography>
              <Divider />
              <List className={classes.userList}>
                {[1, 2, 3, 4].map(value => (
                  <Fragment>
                    <ListItem
                      onClick={this.handleToggle(value)}
                      key={value}
                      dense
                      button
                      className={
                        value === this.state.checked
                          ? classes.notSelected
                          : classes.selected
                      }
                    >
                      <Avatar className={classes.orangeAvatar}>RS</Avatar>
                      <ListItemText primary={`User ${value}`} />
                      <ListItemSecondaryAction>
                        <Checkbox
                          onChange={this.handleToggle(value)}
                          checked={this.state.checked === value}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                  </Fragment>
                ))}
              </List>
              <CardActions className={classes.loginCardAction}>
                <Button
                  variant="raised"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                  disabled={!this.state.checked}
                >
                  Login
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Login)
