const handleError = (callback) => {
  try {
    callback()
  }
  catch (error) {
    console.log(error.message)
  }
}

export default handleError
