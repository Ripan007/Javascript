function Swap(num1, num2) {
  let temp = num1
  num1 = num2
  num2 = temp
  return [num1, num2]
}

const result = Swap([2, 4])
console.log(result)
