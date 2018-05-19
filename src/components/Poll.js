import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import {
  Avatar,
  Typography,
  Card,
  Button,
  Grid,
  IconButton,
  List,
  FormControl,
  FormControlLabel,
  CardContent,
  CardActions,
  CardHeader,
  RadioGroup,
  Radio,
  withStyles
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { formatDate, calculateVotePercent } from "../util/helpers"
import { handleAnserQuestion, handleDeleteQuestion } from "../actions/questions"
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
  }

  render() {
    const {
      classes,
      question,
      author,
      isAnswered,
      authedUser,
      isLoading,
      deleteQuestion,
      history
    } = this.props

    if (!isLoading && !question) {
      return <Redirect to="/404" />
    }

    if (!question) {
      return <div />
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
                    disabled={!this.state.value}
                    onClick={this.handleSubmit}
                  >
                    Answer
                  </Button>
                )}
                {question.author === authedUser && (
                  <IconButton
                    aria-label="Delete"
                    style={{ marginLeft: "auto" }}
                    onClick={() => {
                      deleteQuestion(question.id)
                      history.push("/")
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
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
  isLoading: PropTypes.bool.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

Poll.defaultProps = {
  question: null,
  author: null
}

const mapStateToProps = (
  { questions, users, authedUser, loadingBar },
  props
) => {
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
    isAnswered,
    isLoading: loadingBar.default === 1
  }
}

export default connect(mapStateToProps, {
  saveAnswer: handleAnserQuestion,
  deleteQuestion: handleDeleteQuestion
})(withStyles(styles)(Poll))
