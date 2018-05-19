import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Snackbar } from "@material-ui/core"
import { hideMessage } from "../actions/message"

const Message = ({ message, open, handleClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    open={open}
    onClose={handleClose}
    autoHideDuration={3000}
    message={<span id="mesage">{message}</span>}
  />
)

Message.propTypes = {
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
}

Message.defaultProps = {
  message: ""
}

const mapSateToProps = ({ message }) => ({
  message: message.text,
  open: message.isOpen
})

export default connect(mapSateToProps, { handleClose: hideMessage })(Message)
