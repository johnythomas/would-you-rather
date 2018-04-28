import React, { Component } from "react"
import Questions from "./components/Questions"
import LeftDrawer from "./components/LeftDrawer"
import TopNav from "./components/TopNav"
import AddPollButton from "./components/AddPollButton"
import TopTab from "./components/TopTab"

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
      <div>
        <TopNav toggleDrawer={this.toggleDrawer} />
        <LeftDrawer
          toggleDrawer={this.toggleDrawer}
          isOpen={this.state.isOpen}
        />
        <TopTab />
        <Questions />
        <AddPollButton />
      </div>
    )
  }
}

export default App
