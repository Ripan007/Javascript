const jessica = {
    firstName: 'jessica',
    lastName: 'williams',
    age: 19,
}

const jessicaCopy = Object.assign({}, jessica)
jessicaCopy.lastName = 'katrin'
console.log(`old jessica data is ${jessica.lastName}`)
console.log(`jessicaCopy data is ${jessicaCopy.lastName}`)
