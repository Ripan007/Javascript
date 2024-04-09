function maxSubArray(array) {
  let fullLength = array.lenth - 1
  for (let i = 0; i < fullLength; i++) {
    console.log(i)
    for (let j = i + 1; j < fullLength; j++) {
      console.log(j)
      return [array[i] + array[j]]
    }
  }
}

const result = maxSubArray([1, 13, 3, 6])
console.log(result)
