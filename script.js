function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    console.log('hmm that is not good')
  }
  const backward = []
  const totalItems = str.length - 1
  for (let i = totalItems; i >= 0; i--) {
    backward.push(str[i])
  }
}
