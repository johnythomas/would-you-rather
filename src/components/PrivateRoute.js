import React from "react"
import { Route, Redirect, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = ({ authedUser }) => ({
  isAuthenticated: authedUser !== null
})
export default withRouter(connect(mapStateToProps)(PrivateRoute))
