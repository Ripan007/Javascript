function mergeSortedArray(array1, array2) {
  const mergedArray = []
  let array1Item = array1[0]
  let array2Item = array2[0]
  // check input
  if (array1.length === 0) {
    return array2
  }
  if (array2.length === 0) {
    return array1
  }
  return mergedArray
}

mergeSortedArray([0, 3, 4, 31], [4, 6, 30])
