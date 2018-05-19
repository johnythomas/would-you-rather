import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Grid,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  withStyles
} from "@material-ui/core"
import AddPollButton from "./AddPollButton"

const styles = theme => ({
  root: {
    padding: 20
  },
  paper: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  }
})

function Leaderboard(props) {
  const { classes, users } = props

  return (
    <Fragment>
      <Grid className={classes.root} container>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Profile</TableCell>
                <TableCell>User</TableCell>
                <TableCell numeric>Questions Asked</TableCell>
                <TableCell numeric>Questions Answered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Avatar src={user.avatarURL} />
                  </TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell numeric>{user.questions.length}</TableCell>
                  <TableCell numeric>
                    {Object.keys(user.answers).length}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <AddPollButton />
    </Fragment>
  )
}

Leaderboard.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
      questions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      answers: PropTypes.object.isRequired
    }).isRequired
  ).isRequired
}

const mapStateToProps = ({ users }) => {
  const userScore = user =>
    Object.keys(user.answers).length + user.questions.length
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a))
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard))
