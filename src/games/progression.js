import { getRandomNumber, makeQuestion } from '../index.js'

const makeProgression = (num, step) => {
  const resultProgression = []
  const amountOfNumsInProgression = 10
  let currentNum = num

  for (let i = 0; i < amountOfNumsInProgression; i += 1) {
    resultProgression[i] = currentNum
    currentNum += step
  }

  return resultProgression
}

export const prepareQuestionAndAnswer = () => {
  const stepOfProgression = getRandomNumber(20, 1)
  const firstNumInProgression = getRandomNumber(20, 1)
  const progression = makeProgression(firstNumInProgression, stepOfProgression)

  const indexOfMissingNum = getRandomNumber(9)
  const conversationOfNum = progression[indexOfMissingNum]
  progression[indexOfMissingNum] = '..'
  const qeuestionParam = makeQuestion(progression.join(' '))
  return [qeuestionParam, conversationOfNum]
}

export const rulesOfTheGame = 'What number is missing in the progression?'
