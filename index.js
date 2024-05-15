// first dice
const randomNumber = Math.floor(Math.random() * 6) + 1
const randomDiceImage = 'dice' + randomNumber + '.png'
const randomImageSource = './images/' + randomDiceImage

let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource)

//  second dice

const randomNumber2 = Math.floor(Math.random() * 6) + 1
const randomDiceImage2 = 'dice' + randomNumber2 + '.png'
const randomImageSource2 = './images/' + randomDiceImage2

let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomImageSource2)

if (randomNumber > randomNumber2) {
    document.querySelector('h1').textContent = 'randomNumber 1  win'
} else if (randomNumber2 > randomNumber) {
    document.querySelector('h1').textContent = 'randomNumber 2  win'
} else {
    document.querySelector('h1').textContent = 'no   buddy win'
}
