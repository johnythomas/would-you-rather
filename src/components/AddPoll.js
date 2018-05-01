import React, { Fragment, Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {
  Typography,
  Card,
  Grid,
  Button,
  Divider,
  Input,
  withStyles
} from "material-ui"
import { CardActions } from "material-ui/Card"
import { InputLabel } from "material-ui/Input"
import { FormControl } from "material-ui/Form"
import { handleAddQuestion } from "../actions/questions"

const styles = theme => ({
  cardAction: {
    padding: 20
  },
  addPollHeading: {
    marginTop: 10,
    marginBottom: 10
  },
  margin: {
    margin: theme.spacing.unit * 3
  }
})

class AddPoll extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState(() => ({
      [name]: value
    }))
  }

  handleSubmit = () => {
    this.props.addQuestion({
      author: this.props.authedUser,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    })
    this.props.history.push("/")
  }

  render() {
    const { classes } = this.props
    const isFormValid = !!this.state.optionOne && !!this.state.optionTwo
    return (
      <Fragment>
        <Grid container style={{ marginTop: 40 }}>
          <Grid item xs={1} sm={2} md={3} lg={4} xl={4} />
          <Grid item xs={10} sm={8} md={6} lg={4} xl={4}>
            <Card style={{ textAlign: "center", marginTop: 20 }}>
              <Typography
                color="primary"
                className={classes.addPollHeading}
                variant="display3"
              >
                Would You Rather
              </Typography>
              <Divider />
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="optionOne">Option 1</InputLabel>
                <Input
                  id="optionOne"
                  name="optionOne"
                  onChange={this.handleChange}
                  value={this.state.optionOne}
                />
              </FormControl>
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="optionTwo">Option 2</InputLabel>
                <Input
                  id="optionTwo"
                  name="optionTwo"
                  onChange={this.handleChange}
                  value={this.state.optionTwo}
                />
              </FormControl>
              <Divider />
              <CardActions className={classes.cardAction}>
                <Button
                  variant="raised"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                  disabled={!isFormValid}
                  onClick={this.handleSubmit}
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

AddPoll.propTypes = {
  classes: PropTypes.shape({
    cardAction: PropTypes.string.isRequired,
    addPollHeading: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired
  }).isRequired,
  authedUser: PropTypes.string.isRequired,
  addQuestion: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
})

export default withRouter(
  connect(mapStateToProps, { addQuestion: handleAddQuestion })(
    withStyles(styles)(AddPoll)
  )
)
