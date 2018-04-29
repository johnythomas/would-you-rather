import React, { Fragment, Component } from "react"
import PropTypes from "prop-types"
import {
  Typography,
  Card,
  Grid,
  Button,
  Divider,
  Input,
  withStyles
} from "material-ui"
import { CardActions } from "material-ui/Card"
import { InputLabel } from "material-ui/Input"
import { FormControl } from "material-ui/Form"

const styles = theme => ({
  cardAction: {
    padding: 20
  },
  addPollHeading: {
    marginTop: 10,
    marginBottom: 10
  },
  margin: {
    margin: theme.spacing.unit * 3
  }
})

class AddPoll extends Component {
  state = {
    isFormValid: false
  }

  render() {
    const { classes } = this.props
    return (
      <Fragment>
        <Grid container style={{ marginTop: 40 }}>
          <Grid item xs={1} sm={2} md={3} lg={4} xl={4} />
          <Grid item xs={10} sm={8} md={6} lg={4} xl={4}>
            <Card style={{ textAlign: "center", marginTop: 20 }}>
              <Typography
                color="primary"
                className={classes.addPollHeading}
                variant="display3"
              >
                Would You Rather
              </Typography>
              <Divider />
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="option1">Option 1</InputLabel>
                <Input id="option1" value={this.state.amount} />
              </FormControl>
              <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="option2">Option 2</InputLabel>
                <Input id="option2" value={this.state.amount} />
              </FormControl>
              <Divider />
              <CardActions className={classes.cardAction}>
                <Button
                  variant="raised"
                  color="primary"
                  style={{ marginLeft: "auto" }}
                  disabled={!this.state.isFormValid}
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    )
  }
}

AddPoll.propTypes = {
  classes: PropTypes.shape({
    cardAction: PropTypes.string.isRequired,
    addPollHeading: PropTypes.string.isRequired,
    margin: PropTypes.string.isRequired
  }).isRequired
}

export default withStyles(styles)(AddPoll)
