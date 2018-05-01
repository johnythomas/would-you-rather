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
