import React, { Component } from "react"
import { Paper } from "material-ui"
import Tabs, { Tab } from "material-ui/Tabs"

class TopTab extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }
  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Answered" />
          <Tab label="Unanswered" />
        </Tabs>
      </Paper>
    )
  }
}

export default TopTab
