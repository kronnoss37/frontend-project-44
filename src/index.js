import readlineSync from 'readline-sync'

export const getRandomNumber = (max = 100, min = 0) => Math.floor(Math.random() * (max - min + 1) + min)

export const normalizeUserAnswer = userAnswer => userAnswer.trim().toLowerCase()

export const makeQuestion = (...params) => params.join(' ')

export const communicationWithUser = (rule, prepareQuestionAndAnswer, userName) => {
  console.log(rule)

  const amountOfCorrectAnswers = 3
  let countCorrectAnswers = 0

  while (countCorrectAnswers < amountOfCorrectAnswers) {
    const [question, correctAnswer] = prepareQuestionAndAnswer()
    console.log(`Question: ${question}`)

    let userAnswer = readlineSync.question('Your answer: ')
    userAnswer = normalizeUserAnswer(userAnswer)
    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!')
      countCorrectAnswers += 1
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`)
      return
    }
  }
  console.log(`Congratulations, ${userName}!`)
}
