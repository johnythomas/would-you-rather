import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Avatar,
  Typography,
  Card,
  Button,
  Grid,
  IconButton,
  List,
  withStyles
} from "material-ui"
import { CardContent, CardActions, CardHeader } from "material-ui/Card"
import DeleteIcon from "@material-ui/icons/Delete"
import Radio, { RadioGroup } from "material-ui/Radio"
import { FormControl, FormControlLabel } from "material-ui/Form"
import { formatDate, calculateVotePercent } from "../util/helpers"
import { handleAnserQuestion } from "../actions/questions"
import AddPollButton from "./AddPollButton"
import PollOption from "./PollOption"

const styles = {
  margin: {
    marginTop: 100
  }
}

class Poll extends React.Component {
  state = {
    value: ""
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = () => {
    const { question, authedUser } = this.props
    this.props.saveAnswer({
      qid: question.id,
      authedUser,
      answer: this.state.value
    })
    this.props.history.push("/")
  }

  render() {
    const { classes, question, author, isAnswered, authedUser } = this.props
    if (!question) {
      return <div>question not present</div>
    }

    const { optionOne, optionTwo } = question

    return (
      <Fragment>
        <Grid container className={classes.margin}>
          <Grid item xs={1} sm={3} lg={4} xl={4} />
          <Grid item xs={10} sm={6} lg={4} xl={3}>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="Recipe" src={author.avatarURL} />}
                title={author.name}
                subheader={formatDate(question.timestamp)}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Would You Rather
                </Typography>

                {!isAnswered && (
                  <FormControl component="fieldset" required>
                    <RadioGroup
                      value={this.state.value}
                      onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="optionOne"
                        control={<Radio />}
                        label={optionOne.text}
                      />
                      <FormControlLabel
                        value="optionTwo"
                        control={<Radio />}
                        label={optionTwo.text}
                      />
                    </RadioGroup>
                  </FormControl>
                )}

                {isAnswered && (
                  <div>
                    <List dense>
                      <PollOption
                        text={optionOne.text}
                        isChecked={optionOne.votes.includes(authedUser)}
                        votes={optionOne.votes.length}
                        percent={optionOne.percent}
                      />
                      <PollOption
                        text={optionTwo.text}
                        isChecked={optionTwo.votes.includes(authedUser)}
                        votes={optionTwo.votes.length}
                        percent={optionTwo.percent}
                      />
                    </List>
                  </div>
                )}
              </CardContent>
              <CardActions>
                {!isAnswered && (
                  <Button
                    color="primary"
                    variant="raised"
                    onClick={this.handleSubmit}
                  >
                    Answer
                  </Button>
                )}
                <IconButton aria-label="Delete" style={{ marginLeft: "auto" }}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <AddPollButton />
      </Fragment>
    )
  }
}

Poll.propTypes = {
  classes: PropTypes.shape({
    margin: PropTypes.string.isRequired
  }).isRequired,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired
    }),
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  }),
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }),
  authedUser: PropTypes.string.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

Poll.defaultProps = {
  question: null,
  author: null
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  let isAnswered = false
  if (question) {
    question.optionOne.percent = calculateVotePercent(question, "optionOne")
    question.optionTwo.percent = calculateVotePercent(question, "optionTwo")
    const { optionOne, optionTwo } = question
    isAnswered =
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser)
  }
  return {
    question,
    author: question ? users[question.author] : null,
    authedUser,
    isAnswered
  }
}

export default connect(mapStateToProps, { saveAnswer: handleAnserQuestion })(
  withStyles(styles)(Poll)
)
