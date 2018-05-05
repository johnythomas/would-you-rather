import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Avatar, Typography, Card, Grid, List } from "material-ui"
import { ListItem, ListItemText, ListItemIcon } from "material-ui/List"
import { CardContent, CardHeader } from "material-ui/Card"
import { formatDate } from "../util/helpers"

const Question = ({ author, question }) => {
  const { optionOne, optionTwo } = question

  return (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
      <Link style={{ textDecoration: "none" }} to={`/questions/${question.id}`}>
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
                <ListItem>
                  <ListItemIcon>
                    <Typography variant="headline">•</Typography>
                  </ListItemIcon>
                  <ListItemText>{optionOne.text}</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Typography variant="headline">•</Typography>
                  </ListItemIcon>
                  <ListItemText>{optionTwo.text}</ListItemText>
                </ListItem>
              </List>
            </div>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  )
}

Question.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired,
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id]
  const author = question ? users[question.author] : {}
  return {
    question,
    author
  }
}

export default connect(mapStateToProps)(Question)
