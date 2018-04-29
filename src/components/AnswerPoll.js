import React from "react"
import PropTypes from "prop-types"
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
    const { classes } = this.props
    return (
      <Grid container className={classes.margin}>
        <Grid item xs={1} sm={3} lg={4} xl={5} />
        <Grid item xs={10} sm={6} lg={4} xl={2}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="Recipe">R</Avatar>}
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
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
                    value="Be a superhero"
                    control={<Radio />}
                    label="Be a superhero"
                  />
                  <FormControlLabel
                    value="Be a supervillain"
                    control={<Radio />}
                    label="Be a supervillain"
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

export default withStyles(styles)(AnswerPoll)
