import greetingUser from '../cli/cli.js'

const init = (runGame) => {
  const userName = greetingUser()
  runGame(userName)
}

export default init
