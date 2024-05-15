const randomNumber1 = Math.floor(Math.random() * 6) + 1
const randomDiceImage = 'dice' + randomNumber1 + '.png'
const randomImageSource = './images/' + randomDiceImage

let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource)
