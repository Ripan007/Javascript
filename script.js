function twoSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    console.log('i', i)
    for (let j = i + 1; j < array.length; j++) {
      console.log('j', j)
      if (array[i] + array[j] === target) {
        return [i, j]
      }
    }
  }
}

const result = twoSum([1, 2, 3, 9], 12)
console.log(result)
