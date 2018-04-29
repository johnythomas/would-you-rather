import React from "react"
import PropTypes from "prop-types"
import { Grid, Avatar, withStyles } from "material-ui"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
import Paper from "material-ui/Paper"
import { deepOrange } from "material-ui/colors"

const styles = theme => ({
  root: {
    padding: 50
  },
  paper: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  orangeAvatar: {
    color: "#fff",
    backgroundColor: deepOrange[500]
  }
})

let id = 0
function createData(name, calories, fat) {
  id += 1
  return { id, name, calories, fat }
}

const data = [
  createData("Frozen yoghurt", 159, 6),
  createData("Ice cream sandwich", 237, 9),
  createData("Eclair", 262, 16.0),
  createData("Cupcake", 305, 3),
  createData("Gingerbread", 356, 16.0)
]

function Leaderboard(props) {
  const { classes } = props

  return (
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
            {data.map(n => (
              <TableRow key={n.id}>
                <TableCell>{n.id}</TableCell>
                <TableCell>
                  <Avatar className={classes.orangeAvatar}>DP</Avatar>
                </TableCell>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  )
}

Leaderboard.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired,
    orangeAvatar: PropTypes.string.isRequired
  }).isRequired
}

export default withStyles(styles)(Leaderboard)
