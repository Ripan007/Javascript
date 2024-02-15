//  REUSABLE CODE , DRY CODE (don't repeat your code) //

// bmi = mass / (heigth * height)
//  bmi = mass /  (height ** 2)

/*
const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.95
const bmiMark = 78 / 1.69 ** 2
const bmiJohn = 92 / 1.95 ** 2

console.log(bmiMark, bmiJohn)



if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`)
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than John's (${bmiMark})`)
}

*/

/*
if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphins) {
  console.log('koalas win  the trophy')
} else {
  console.log('both win the trophy')
}

const scoreDolphins = (100 + 108 + 120) / 3
const scoreKoalas = (100 + 100 + 110) / 3

console.log(
  ` score of dolphins ${scoreDolphins}, score of koalas  ${scoreKoalas}`
)

if (scoreDolphins > scoreKoalas && scoreDolphins > 100) {
  console.log('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphins && scoreKoalas > 100) {
  console.log('Koalas win  the trophy')
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('both win the trophy')
} else {
  console.log('no one wins  the trophy')
}


const day = 'sunday'

switch (day) {
  case 'monday':
    console.log('welcome')
    break
  case 'tuesday':
    console.log('next  day')
    break
  default:
    console.log('welcome to the switch statement')
}

const bill = 275
const tip = bill <= 300 && bill >= 50 ? bill * 0.2 : bill * 0.1
console.log(
  `the bill was ${bill}, and the tip was ${tip}, and the total value  was ${
    bill + tip
  }`
)

const retiresUtilAge = (birthYear, name) => {
  const age = 2024 - birthYear
  const retire = 80 - age
  return `${name} remain age for  retirement is ${retire}`
}

console.log(retiresUtilAge(1995, 'random'))


const cutPieces = function (fruit) {
  return fruit * 4
}

const fruitProcessor = function (apple, orange) {
  const applePieces = cutPieces(apple)
  const orangePieces = cutPieces(orange)
  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`
  return juice
}

console.log(fruitProcessor(2, 4))


const calAge = function (birthYear) {
  return 2050 - birthYear
}

const yearsUntilRetirement = function (birthYear, name) {
  const age = calAge(birthYear)
  const retirement = 90 - age
  if (retirement > 0) {
    console.log(`${name} retires at the age of ${retirement}`)
    return retirement
  } else {
    console.log(`${name} has already retire 🧨`)
    return -1
  }
}

console.log(yearsUntilRetirement(1995, 'random'))


*/

const calAverage = function (a, b, c) {
  const averageScore = (a + b + c) / 3
  return averageScore
}

const scoreDolphins = function (score1, score2, score3) {
  return calAverage(score1, score2, score3)
}

const scoreKoalas = function (score1, score2, score3) {
  return calAverage(score1, score2, score3)
}

console.log(scoreDolphins(44, 23, 71))
console.log(scoreKoalas(65, 54, 49))
