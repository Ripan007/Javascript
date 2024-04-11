function calSum(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

console.log(calSum([1, 3, 3]))
