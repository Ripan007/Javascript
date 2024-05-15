const randomNumber1 = Math.floor(Math.random() * 6) + 1
const randomDiceImage = 'dice' + randomNumber1 + '.png'
const randomImageSource = './images/' + randomDiceImage

// this one is for  first image
let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource)

//  this one is for second image

let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomImageSource)

if (randomNumber1 === 6) {
    document.querySelector('h1').textContent = 'both are winning'
}

//  randomNumber , diceImage ,imageSource
