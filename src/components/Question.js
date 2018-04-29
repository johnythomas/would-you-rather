import React from "react"
import {
  Avatar,
  Typography,
  Card,
  Button,
  Grid,
  List,
  LinearProgress,
  withStyles
} from "material-ui"
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List"
import { CardContent, CardActions, CardHeader } from "material-ui/Card"
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons"

const styles = theme => ({
  progressBar: {
    height: 10
  },
  radioBtn: {
    color: theme.palette.secondary.light
  }
})

const Question = ({ classes }) => (
  <Grid item xs={12} sm={6} lg={4} xl={3}>
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
        <div>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <RadioButtonChecked className={classes.radioBtn} />
              </ListItemIcon>
              <ListItemText>
                Become a superhero
                <LinearProgress
                  className={classes.progressBar}
                  variant="determinate"
                  value={70}
                />
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <RadioButtonUnchecked className={classes.radioBtn} />
              </ListItemIcon>
              <ListItemText>
                Become a supervillain
                <LinearProgress
                  className={classes.progressBar}
                  variant="determinate"
                  value={30}
                />
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  </Grid>
)

export default withStyles(styles)(Question)
