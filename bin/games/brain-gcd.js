#!/usr/bin/env node

import { getRandomNumber, communicationWithUser } from '../../src/index.js';

const calculateGCD = (numbers) => {
  let [firstNumber, secondNumber] = numbers;

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

const prepareQuestionAndAnswer = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const numbers = [firstNum, secondNum];
  const correctAnswer = calculateGCD(numbers);
  return [numbers, correctAnswer];
};

const rulesOfTheGame = 'Find the greatest common divisor of given numbers.';

communicationWithUser(rulesOfTheGame, prepareQuestionAndAnswer);
