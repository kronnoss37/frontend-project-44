import { getRandomNumber, makeQuestion } from '../index.js';

const calculateGCD = (firstNum, secondNum) => {
  let firstNumber = firstNum;
  let secondNumber = secondNum;

  if (firstNumber < secondNumber) {
    const temp = firstNumber;
    firstNumber = secondNumber;
    secondNumber = temp;
  }

  let GCD = true;
  while (GCD) {
    GCD = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = GCD;
  }
  return firstNumber;
};

export default function prepareQuestionAndAnswer() {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const correctAnswer = calculateGCD(firstNum, secondNum);
  const qeuestionParam = makeQuestion(firstNum, secondNum);
  return [qeuestionParam, correctAnswer];
}
