import React from "react"
import { Grid } from "material-ui"
import Question from "./Question"

const styles = {
  padding: 20
}

const Questions = () => (
  <Grid style={styles} container spacing={24}>
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
  </Grid>
)

export default Questions
