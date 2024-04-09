function maxSumArray(array) {
  let ans = Number.MIN_VALUE
  console.log(ans)
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
    if (sum > ans) {
      ans = sum
    }
    if (sum < 0) {
      ans = 0
    }
  }
  return ans
}

const result = maxSumArray([1, 2, 4])
console.log(result)
