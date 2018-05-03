import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Snackbar } from "material-ui"
import { hideMessage } from "../actions/message"

const Message = ({ message, open, handleClose }) => (
  <Snackbar
    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    open={open}
    onClose={handleClose}
    SnackbarContentProps={{
      "aria-describedby": "message"
    }}
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
