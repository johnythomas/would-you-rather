import React from "react"
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

const Question = () => (
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
            <PollOption text="Become a superhero" isChecked percent={80} />
            <PollOption
              text="Become a supervillain"
              isChecked={false}
              percent={20}
            />
          </List>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Answer
        </Button>
        <IconButton aria-label="Delete" style={{ marginLeft: "auto" }}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  </Grid>
)

export default Question
