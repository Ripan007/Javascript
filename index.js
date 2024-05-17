// primitive
let age = 10
let oldAge = age
age = 20
console.log(`age is ${age}`)
console.log(`old age is ${oldAge}`)

// non primitive
const me = {
    name: 'john',
    age: 10,
}

const friend = me
me.age = 20
console.log(`object me age is ${me}`)
console.log(`object friend age is ${friend}`)
