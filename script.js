function maxSubArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    console.log(i)
    for (let j = i + 1; j < array.length; j++) {
      console.log(j)
      return [array[i] + array[j]]
    }
  }
}

const result = maxSubArray([1, 13, 3, 6])
console.log(result)
