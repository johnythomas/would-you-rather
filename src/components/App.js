import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import Questions from "./Questions"
import LeftDrawer from "./LeftDrawer"
import TopNav from "./TopNav"
import AddPollButton from "./AddPollButton"
import TopTab from "./TopTab"
import Login from "./Login"
import AddPoll from "./AddPoll"
import Leaderboard from "./Leaderboard"
import AnswerPoll from "./AnswerPoll"
import { fetchUsers } from "../actions/users"

class App extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  toggleDrawer = open => () => {
    this.setState({
      isOpen: open
    })
  }

  render() {
    return (
      <Router>
        <Fragment>
          {/* Add the loading bar here */}
          <TopNav toggleDrawer={this.toggleDrawer} />
          <LeftDrawer
            toggleDrawer={this.toggleDrawer}
            isOpen={this.state.isOpen}
          />
          <Route
            path="/"
            exact
            render={() => (
              <Fragment>
                <TopTab />
                <Questions toggleDrawer={this.toggleDrawer} />
              </Fragment>
            )}
          />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={AddPoll} />
          <Route path="/question" component={AnswerPoll} />
          <AddPollButton />
        </Fragment>
      </Router>
    )
  }
}

App.propTypes = {
  getAllUsers: PropTypes.func.isRequired
}

export default connect(null, { getAllUsers: fetchUsers })(App)
