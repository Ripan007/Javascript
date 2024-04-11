function sum(num1, num2) {
  console.log('num1', num1)
  let count = 0
  for (let i = 0; i < num1.length; i++) {
    console.log('i', i)
    for (let j = 0; j < num2.length; j++) {
      console.log('j', j)
      count[(i, j)] = num1[(i, j)] + num2[(i, j)]
      return count
    }
  }
}

console.log(sum[12], [13])
