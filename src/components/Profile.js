import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Typography, Avatar, withStyles } from "@material-ui/core"
import Questions from "./Questions"

const styles = {
  row: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
  headline: {
    marginTop: 20
  },
  container: {
    padding: 10
  }
}

const Profile = ({
  classes,
  authedUser,
  questionsAsked,
  questionsAnswered,
  isLoading
}) => (
  <div className={classes.container}>
    <div className={classes.row}>
      <Avatar
        alt="Adelle Charles"
        src={authedUser.avatarURL}
        className={classes.bigAvatar}
      />
    </div>
    <div className={classes.row}>
      <Typography variant="title">{authedUser.name}</Typography>
    </div>
    <div className={classes.row}>
      <Typography variant="title">{`@${authedUser.id}`}</Typography>
    </div>
    <Typography
      className={classes.headline}
      variant="headline"
    >{`Questions Asked(${questionsAsked.length})`}</Typography>
    {!isLoading && <Questions questionIds={questionsAsked} />}
    <Typography
      className={classes.headline}
      variant="headline"
    >{`Questions Answered(${questionsAnswered.length})`}</Typography>
    {!isLoading && <Questions questionIds={questionsAnswered} />}
  </div>
)

Profile.propTypes = {
  classes: PropTypes.shape({
    row: PropTypes.string.isRequired,
    bigAvatar: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired
  }).isRequired,
  authedUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired,
  questionsAsked: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  questionsAnswered: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = ({ users, questions, authedUser, loadingBar }) => {
  const questionsAsked = !questions ? [] : users[authedUser].questions
  const questionsAnswered = !questions
    ? []
    : Object.keys(users[authedUser].answers)

  return {
    authedUser: users[authedUser],
    questionsAsked,
    questionsAnswered,
    isLoading: loadingBar.default === 1
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Profile))
