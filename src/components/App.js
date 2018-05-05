import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import LoadingBar from "react-redux-loading-bar"
import Questions from "./Questions"
import LeftDrawer from "./LeftDrawer"
import TopNav from "./TopNav"
import Login from "./Login"
import AddPoll from "./AddPoll"
import Leaderboard from "./Leaderboard"
import Poll from "./Poll"
import { fetchUsers } from "../actions/users"
import PrivateRoute from "./PrivateRoute"
import Message from "./Message"

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
          <PrivateRoute path="/" exact component={Questions} />
          <PrivateRoute path="/leaderboard" component={Leaderboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/add" component={AddPoll} />
          <PrivateRoute path="/questions/:id" component={Poll} />
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
