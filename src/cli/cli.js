import readlineSync from 'readline-sync'

const validateName = (name) => {
  const normalizedName = name.trim()
  if (normalizedName.length < 2) {
    throw new Error('The name must contain at least 2 characters.')
  }
  if (normalizedName.length > 30) {
    throw new Error('The name must not exceed 30 characters')
  }

  const regex = /^[a-zA-Za-яА-Я ]+$/
  if (!regex.test(normalizedName)) {
    throw new Error('The name contains invalid characters. Use only letters and spaces.')
  }
}

const greetingUser = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ').trim() // ?
  validateName(userName)
  console.log(`Hello, ${userName}!`)
  return userName
}

export default greetingUser
