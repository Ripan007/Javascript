function returnDuplicate(array) {
  const len = array.length
  console.log('length', len)
  for (let i = 0; i < len - 1; i++) {
    console.log(`mentino ${i}`)
    for (let j = i + 1; j < len; j++) {
      if (array[i] === array[j]) {
        return true
      }
    }
  }
  return false
}

const result = returnDuplicate([1, 2, 3, 10])
console.log(result)
