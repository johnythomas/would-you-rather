import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Typography, Card, Grid, List } from "material-ui"
import { ListItem, ListItemText, ListItemIcon } from "material-ui/List"
import { CardContent } from "material-ui/Card"

const Question = ({ question }) => {
  const { optionOne, optionTwo } = question

  return (
    <Grid item xs={12} sm={6} lg={4} xl={3}>
      <Link style={{ textDecoration: "none" }} to={`/questions/${question.id}`}>
        <Card>
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
  }).isRequired
}

const mapStateToProps = ({ questions }, { id }) => {
  const question = questions[id]
  return {
    question
  }
}

export default connect(mapStateToProps)(Question)
