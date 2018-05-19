import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

const style = {
  position: "fixed",
  bottom: 20,
  right: 20
}

const AddPollButton = () => (
  <Button
    variant="fab"
    color="secondary"
    style={style}
    component={Link}
    to="/add"
  >
    <AddIcon />
  </Button>
)

export default AddPollButton
