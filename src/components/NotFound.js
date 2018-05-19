import React from "react"
import PropTypes from "prop-types"
import {
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
  withStyles
} from "@material-ui/core"

const styles = {
  container: {
    padding: 20
  }
}

const NotFound = ({ classes, history }) => (
  <div className={classes.container}>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="display1" component="h1">
          404
        </Typography>
        <Typography component="p" variant="title">
          Page Not Found :(
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => history.push("/")}>
          Go Home
        </Button>
      </CardActions>
    </Card>
  </div>
)

NotFound.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
}

export default withStyles(styles)(NotFound)
