import { QuestionFilters } from "../actions/questionVisibilityFilter"

export const calculateVotePercent = (question, userId, option) => {
  const { optionOne, optionTwo } = question
  const optionOneVotes = optionOne.votes.length
  const optionTwoVotes = optionTwo.votes.length
  const totalVotes = optionOneVotes + optionTwoVotes
  return Math.round(question[option].votes.length / totalVotes * 100)
}

export const formatDate = timestamp => {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString("en-US")
  return `${time.substr(0, 5) + time.slice(-2)} | ${d.toLocaleDateString()}`
}

export const getFilterdQuestions = (
  questions,
  authedUser,
  questionVisibilityFilter
) =>
  questionVisibilityFilter === QuestionFilters.ANSWERED
    ? Object.keys(questions).filter(
        qid =>
          questions[qid].optionOne.votes.includes(authedUser) ||
          questions[qid].optionTwo.votes.includes(authedUser)
      )
    : Object.keys(questions).filter(
        qid =>
          !questions[qid].optionOne.votes.includes(authedUser) &&
          !questions[qid].optionTwo.votes.includes(authedUser)
      )
