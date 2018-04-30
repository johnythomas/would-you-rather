import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Questions from "./components/Questions"
import LeftDrawer from "./components/LeftDrawer"
import TopNav from "./components/TopNav"
import AddPollButton from "./components/AddPollButton"
import TopTab from "./components/TopTab"
import Login from "./components/Login"
import AddPoll from "./components/AddPoll"
import Leaderboard from "./components/Leaderboard"
import AnswerPoll from "./components/AnswerPoll"

class App extends Component {
  state = {
    isOpen: false
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

export default App
