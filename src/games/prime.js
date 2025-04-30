import { getRandomNumber, makeQuestion } from '../index.js';

const isPrimeNumber = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (!(num % i) && num !== i) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (...num) => (isPrimeNumber(num) ? 'yes' : 'no');

export default function prepareQuestionAndAnswer() {
  const num = getRandomNumber();
  const correctAnswer = getCorrectAnswer(num);
  const qeuestionParam = makeQuestion(num);
  return [qeuestionParam, correctAnswer];
}
