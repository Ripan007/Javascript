function sum(num1, num2) {
  let count = 0
  for (let i = 0; i < num1.length; i++) {
    for (let j = 0; j < num2.length; j++) {
      count[(i, j)] = num1[(i, j)] + num2[(i, j)]
    }
    return count
  }
}

console.log(sum([12], [13]))
