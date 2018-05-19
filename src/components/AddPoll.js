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
  TextField,
  CardActions,
  withStyles
} from "@material-ui/core"
import { handleAddQuestion } from "../actions/questions"

const styles = {
  cardAction: {
    padding: 20
  },
  addPollHeading: {
    marginTop: 10,
    marginBottom: 10
  },
  formCard: {
    textAlign: "center",
    marginTop: 20,
    padding: 10
  }
}

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

  handleSubmit = e => {
    e.preventDefault()
    if (!this.isFormValid()) return

    this.props.addQuestion({
      author: this.props.authedUser,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    })
    this.props.history.push("/")
  }

  isFormValid = () => !!this.state.optionOne && !!this.state.optionTwo

  render() {
    const { classes } = this.props
    const isFormValid = this.isFormValid()
    return (
      <Fragment>
        <Grid container style={{ marginTop: 40 }}>
          <Grid item xs={1} sm={2} md={3} lg={4} xl={4} />
          <Grid item xs={10} sm={8} md={6} lg={4} xl={4}>
            <Card>
              <form
                className={classes.formCard}
                autoComplete="off"
                onSubmit={this.handleSubmit}
              >
                <Typography
                  color="primary"
                  className={classes.addPollHeading}
                  variant="display1"
                >
                  Would You Rather
                </Typography>
                <Divider />
                <TextField
                  id="optionOne"
                  name="optionOne"
                  onChange={this.handleChange}
                  value={this.state.optionOne}
                  label="option 1"
                  InputLabelProps={{
                    shrink: true
                  }}
                  placeholder="enter option 1"
                  fullWidth
                  margin="normal"
                  className={classes.margin}
                />
                <TextField
                  id="optionTwo"
                  name="optionTwo"
                  onChange={this.handleChange}
                  value={this.state.optionTwo}
                  label="option 2"
                  InputLabelProps={{
                    shrink: true
                  }}
                  placeholder="enter option 2"
                  fullWidth
                  margin="normal"
                  className={classes.margin}
                />
                <Divider />
                <CardActions className={classes.cardAction}>
                  <Button
                    type="submit"
                    variant="raised"
                    color="primary"
                    style={{ marginLeft: "auto" }}
                    disabled={!isFormValid}
                  >
                    Save
                  </Button>
                </CardActions>
              </form>
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
    formCard: PropTypes.string.isRequired
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
