# 🎮 Brain Games — Набор консольных мини-игр

#### Hexlet tests and linter status:

[![Actions Status](https://github.com/kronnoss37/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kronnoss37/frontend-project-44/actions)

#### Maintainability

[![Maintainability](https://api.codeclimate.com/v1/badges/0002a5a0efa87e863a64/maintainability)](https://codeclimate.com/github/kronnoss37/frontend-project-44/maintainability)

## 🧠 Описание проекта

Проект состоит из пяти самостоятельных мини-игр. Каждая игра — это небольшая консольная головоломка, в которой пользователю предлагается решить задачу.  
Игры построены на общем "движке", который отвечает за:

- приветствие и формирование игровой сессии  
- генерацию вопросов  
- обработку ответов  
- вывод результата

## ✨ Список игр

- ➕ **Калькулятор** — вычисление выражений (сложение, вычитание, умножение)  
- 🔢 **Арифметическая прогрессия** — нахождение пропущенного элемента  
- ❗ **Проверка на чётность** — определить, является ли число чётным  
- 🧮 **НОД** — поиск наибольшего общего делителя  
- 🧠 **Простое ли число?** — проверка простое ли число

Каждая игра задаёт три вопроса. Если игрок правильно отвечает на все — игра считается пройденной.

## 🧰 Стек технологий

- Node.js
- JavaScript (ES Modules)
- readline-sync
- ESLint

## 🎥 Демонстрация

[![asciicast](https://asciinema.org/a/yXtUzDPHTPvFS5KlvT14f4riU.svg)](https://asciinema.org/a/yXtUzDPHTPvFS5KlvT14f4riU)

## 🚀 Установка и запуск

```bash
# Clone the repository
git clone https://github.com/kronnoss37/frontend-project-44.git

# Navigate to the project directory
cd frontend-project-44

# Install dependencies for the program to work correctly
make install

# Run the application file with all the games
make start

make brain-games # run Greeting
make brain-even # run Even Game
make brain-calc # run Calculator Game
make brain-gcd # run GCD Game
make brain-progression # run Progression Game
make brain-prime # run Prime Game
```
