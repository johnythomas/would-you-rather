import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"
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
import { setAuthedUser } from "../actions/authedUser"
import { fetchQuestions } from "../actions/questions"

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
    redirectToReferrer: false,
    selectedUser: null
  }

  handleToggle = value => {
    this.setState({
      selectedUser: value
    })
  }

  handleLoginClick = () => {
    this.props.login(this.state.selectedUser)
    this.props.getPolls()
    this.setState({
      redirectToReferrer: true
    })
  }

  render() {
    const { classes, userIds } = this.props
    const { from } = this.props.location.state || { from: { pathname: "/" } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer) {
      return <Redirect to={from} />
    }

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
                    <div
                      role="button"
                      tabIndex="0"
                      onClick={() => this.handleToggle(id)}
                      onKeyPress={() => this.handleToggle(id)}
                      key={id}
                    >
                      <User
                        id={id}
                        isSelected={this.state.selectedUser === id}
                      />
                      <Divider />
                    </div>
                  ))}
              </List>
              <CardActions className={classes.loginCardAction}>
                <Button
                  variant="raised"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                  disabled={!this.state.selectedUser}
                  onClick={this.handleLoginClick}
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
  userIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  login: PropTypes.func.isRequired,
  getPolls: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      from: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      })
    })
  }).isRequired
}

const mapStateToProps = ({ users }) => ({
  userIds: Object.keys(users)
})

export default connect(mapStateToProps, {
  login: setAuthedUser,
  getPolls: fetchQuestions
})(withStyles(styles)(Login))
