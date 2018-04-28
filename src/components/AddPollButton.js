import React from "react"
import { Button } from "material-ui"
import AddIcon from "@material-ui/icons/Add"

const style = {
  position: "fixed",
  bottom: 20,
  right: 20
}

const AddPollButton = () => (
  <Button variant="fab" color="secondary" style={style}>
    <AddIcon />
  </Button>
)

export default AddPollButton
