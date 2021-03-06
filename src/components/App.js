import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import LoadingBar from "react-redux-loading-bar"
import QuestionsContainer from "./QuestionsContainer"
import LeftDrawer from "./LeftDrawer"
import TopNav from "./TopNav"
import Login from "./Login"
import AddPoll from "./AddPoll"
import Leaderboard from "./Leaderboard"
import Poll from "./Poll"
import { fetchUsers } from "../actions/users"
import PrivateRoute from "./PrivateRoute"
import Message from "./Message"
import Profile from "./Profile"
import NotFound from "./NotFound"
import TopTab from "./TopTab"

class App extends Component {
  componentDidMount() {
    this.props.getAllUsers()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <TopNav />
          <LeftDrawer />
          <Switch>
            <PrivateRoute
              path="/"
              exact
              component={() => (
                <Fragment>
                  <TopTab />
                  <QuestionsContainer />
                </Fragment>
              )}
            />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/add" component={AddPoll} />
            <PrivateRoute path="/questions/:id" component={Poll} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
          <Message />
        </Fragment>
      </Router>
    )
  }
}

App.propTypes = {
  getAllUsers: PropTypes.func.isRequired
}

export default connect(null, { getAllUsers: fetchUsers })(App)
