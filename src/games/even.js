import { getRandomNumber, makeQuestion } from '../index.js';

const isEvenNumber = num => num % 2 === 0;

const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no');

export const prepareQuestionAndAnswer = () => {
  const num = getRandomNumber();
  const correctAnswer = getCorrectAnswer(num);
  const qeuestionParam = makeQuestion(num);
  return [qeuestionParam, correctAnswer];
};

export const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
