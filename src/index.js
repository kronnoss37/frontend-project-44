import readlineSync from 'readline-sync';
import greetingUser from './cli.js';

export const getRandomNumber = (num = 100) => Math.floor(Math.random() * (num + 1));

export const getRandomMathOperator = () => {
  const arrayOfOperators = ['+', '-', '*'];
  return arrayOfOperators[getRandomNumber(arrayOfOperators.length - 1)];
};

export const isEvenNumber = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const calculateExpression = (firstOperand, secondOperand, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      return null;
  }
};

export const calculateGCD = (firstNum, secondNum) => {
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

export const normalizeUserAnswer = (userAnswer) => {
  const answerToNumber = Number(userAnswer);
  return Number.isNaN(answerToNumber) ? userAnswer.trim().toLowerCase() : answerToNumber;
};

export const makeQuestion = (...params) => {
  console.log(`Question: ${params.join(' ')}`);
  return true;
};

export const communicationWithUser = (rule, getAnswer) => {
  const userName = greetingUser();
  console.log(rule);

  const amountOfCorrectAnswers = 3;
  let countCorrectAnswers = 0;

  while (countCorrectAnswers < amountOfCorrectAnswers) {
    const correctAnswer = getAnswer();
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = normalizeUserAnswer(userAnswer);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};
