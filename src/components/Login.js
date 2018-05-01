import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Typography,
  Card,
  Grid,
  Button,
  Divider,
  List,
  withStyles
} from "material-ui"
import { CardActions } from "material-ui/Card"
import User from "./User"

const styles = {
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
}

class Login extends React.Component {
  state = {
    selectedUser: null
  }

  handleToggle = value => () => {
    this.setState({
      selectedUser: value
    })
  }

  render() {
    const { classes, userIds } = this.props
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
                {userIds &&
                  userIds.map(id => (
                    <Fragment key={id}>
                      <User
                        id={id}
                        handleToggle={this.handleToggle}
                        selectedUser={this.state.selectedUser}
                      />
                      <Divider />
                    </Fragment>
                  ))}
              </List>
              <CardActions className={classes.loginCardAction}>
                <Button
                  variant="raised"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                  disabled={!this.state.selectedUser}
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

Login.propTypes = {
  classes: PropTypes.shape({
    userList: PropTypes.string.isRequired,
    loginCardAction: PropTypes.string.isRequired,
    loginHeading: PropTypes.string.isRequired
  }).isRequired,
  userIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const mapStateToProps = ({ users }) => ({
  userIds: Object.keys(users)
})

export default connect(mapStateToProps)(withStyles(styles)(Login))
