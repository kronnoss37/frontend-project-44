import readlineSync from 'readline-sync';
import greetingUser from './cli.js';

export const getRandomNumber = (num = 100) => Math.floor(Math.random() * (num + 1));

export const getRandomExpression = () => {
  const arrayOfOperators = ['+', '-', '*'];
  const mathOperator = arrayOfOperators[getRandomNumber(arrayOfOperators.length - 1)];
  let maxNumberInOperation = 50;
  const firstOperand = getRandomNumber(maxNumberInOperation);
  if (mathOperator === '*') {
    maxNumberInOperation = 10;
  }
  const secondOperand = getRandomNumber(maxNumberInOperation);
  return `${firstOperand} ${mathOperator} ${secondOperand}`;
};

export const normalizeUserAnswer = (userAnswer) => {
  const answerToNumber = Number(userAnswer);
  return Number.isNaN(answerToNumber) ? userAnswer.trim().toLowerCase() : answerToNumber;
};

export const communicationWithUser = (rule, makeUpQuestion, getAnswer) => {
  const userName = greetingUser();
  console.log(rule);

  const amountOfCorrectAnswers = 3;
  let countCorrectAnswers = 0;

  while (countCorrectAnswers < amountOfCorrectAnswers) {
    const questionInCurrentGame = makeUpQuestion();
    console.log(`Question: ${questionInCurrentGame}`);
    let userAnswer = readlineSync.question('Your answer: ');
    userAnswer = normalizeUserAnswer(userAnswer);
    const correctAnswer = getAnswer(questionInCurrentGame);
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
