import { getRandomNumber, makeQuestion } from '../index.js';

const isEvenNumber = num => num % 2 === 0;

const getCorrectAnswer = num => (isEvenNumber(num) ? 'yes' : 'no');

export default function prepareQuestionAndAnswer() {
  const num = getRandomNumber();
  const correctAnswer = getCorrectAnswer(num);
  const qeuestionParam = makeQuestion(num);
  return [qeuestionParam, correctAnswer];
}
