function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    console.log('hmm it is not good')
  }
  const backward = []
  const totalItems = str.length - 1
  for (let i = totalItems; i >= 0; i--) {
    backward.push(str[i])
  }
  console.log(backward)
  return backward.join('')
}

function reverse2(str) {
  return str.split('').reverse().join('')
}
const rever = reverse2('i am  ripan')
console.log(rever)
