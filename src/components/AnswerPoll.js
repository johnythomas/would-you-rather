import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Avatar,
  Typography,
  Card,
  Button,
  Grid,
  IconButton,
  withStyles
} from "material-ui"
import { CardContent, CardActions, CardHeader } from "material-ui/Card"
import DeleteIcon from "@material-ui/icons/Delete"
import Radio, { RadioGroup } from "material-ui/Radio"
import { FormControl, FormControlLabel } from "material-ui/Form"
import { calculateVotePercent, formatDate } from "../util/helpers"

const styles = {
  margin: {
    marginTop: 100
  }
}

class AnswerPoll extends React.Component {
  state = {
    value: ""
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    const { classes, question, author } = this.props
    if (!question) {
      return <div>question not present</div>
    }

    const { optionOne, optionTwo } = question

    return (
      <Grid container className={classes.margin}>
        <Grid item xs={1} sm={3} lg={4} xl={5} />
        <Grid item xs={10} sm={6} lg={4} xl={2}>
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

              <FormControl component="fieldset" required>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
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
            </CardContent>
            <CardActions>
              <Button color="primary" variant="raised">
                Answer
              </Button>
              <IconButton aria-label="Delete" style={{ marginLeft: "auto" }}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

AnswerPoll.propTypes = {
  classes: PropTypes.shape({
    margin: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  return {
    question,
    author: question ? users[question.author] : null,
    authedUser: users[authedUser]
  }
}

export default connect(mapStateToProps)(withStyles(styles)(AnswerPoll))
