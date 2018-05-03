import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {
  Avatar,
  Typography,
  Card,
  Button,
  Grid,
  List,
  IconButton
} from "material-ui"
import { CardContent, CardActions, CardHeader } from "material-ui/Card"
import DeleteIcon from "@material-ui/icons/Delete"
import PollOption from "./PollOption"
import { formatDate, calculateVotePercent } from "../util/helpers"

const Question = ({ author, question, authedUser }) => {
  const { optionOne, optionTwo } = question
  const optionOnePercent = calculateVotePercent(
    question,
    author.id,
    "optionOne"
  )
  const optionTwoPercent = calculateVotePercent(
    question,
    author.id,
    "optionTwo"
  )

  const isChecked = option =>
    optionOnePercent !== 0 || optionTwoPercent !== 0
      ? option.votes.includes(authedUser)
      : null

  return (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
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
          <div>
            <List dense>
              <PollOption
                text={optionOne.text}
                isChecked={isChecked(optionOne)}
                percent={optionOnePercent}
              />
              <PollOption
                text={optionTwo.text}
                isChecked={isChecked(optionTwo)}
                percent={optionTwoPercent}
              />
            </List>
          </div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={`/questions/${question.id}`}
          >
            Answer
          </Button>
          <IconButton aria-label="Delete" style={{ marginLeft: "auto" }}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired,
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    }).isRequired
  }).isRequired,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired,
  authedUser: PropTypes.string.isRequired
}

const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id]
  const author = question ? users[question.author] : {}
  return {
    question,
    author,
    authedUser
  }
}

export default connect(mapStateToProps)(Question)
