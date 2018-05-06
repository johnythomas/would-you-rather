/* eslint no-underscore-dangle: ["off"] */

let users = {
  lazyduck408: {
    id: "lazyduck408",
    name: "Romain Hoogmoed",
    avatarURL: "https://randomuser.me/api/portraits/men/83.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo"
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
  },
  avalawrence: {
    id: "avalawrence",
    name: "Ava Lawrence",
    avatarURL: "https://randomuser.me/api/portraits/women/65.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo"
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"]
  },
  wendyfuller: {
    id: "wendyfuller",
    name: "Wendy Fuller",
    avatarURL: "https://randomuser.me/api/portraits/women/90.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "lazyduck408",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["lazyduck408"],
      text: "have horrible short term memory"
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory"
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "wendyfuller",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero"
    },
    optionTwo: {
      votes: ["wendyfuller", "lazyduck408"],
      text: "become a supervillian"
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "lazyduck408",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic"
    },
    optionTwo: {
      votes: ["lazyduck408"],
      text: "be telepathic"
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "avalawrence",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer"
    },
    optionTwo: {
      votes: ["lazyduck408"],
      text: "be a back-end developer"
    }
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "avalawrence",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["avalawrence"],
      text: "find $50 yourself"
    },
    optionTwo: {
      votes: ["wendyfuller"],
      text: "have your best friend find $500"
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "wendyfuller",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["wendyfuller"],
      text: "write JavaScript"
    },
    optionTwo: {
      votes: ["avalawrence"],
      text: "write Swift"
    }
  }
}

function generateUID() {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  )
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000)
  })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText
    },
    optionTwo: {
      votes: [],
      text: optionTwoText
    }
  }
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}

export function _deleteQuestion(qid) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = Object.keys(users).reduce((acc, userId) => {
        acc[userId] = {
          ...users[userId],
          questions: users[userId].questions.filter(q => q !== qid),
          answers: Object.keys(users[userId].answers).reduce(
            (answersAcc, ansId) => {
              if (qid !== ansId) {
                return {
                  ...answersAcc,
                  [ansId]: users[userId].answers[ansId]
                }
              }
              return answersAcc
            },
            {}
          )
        }
        return acc
      }, {})

      questions = Object.keys(questions).reduce((acc, questionId) => {
        if (questionId !== qid) {
          acc[questionId] = questions[questionId]
        }
        return acc
      }, {})
      res()
    }, 500)
  })
}
