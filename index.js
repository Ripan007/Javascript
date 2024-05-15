const randomNumber = Math.round(Math.random() * 6) + 1

const getImage = function (random) {
    const image = document.querySelector('img').setAttribute('src', random)
    console.log(image)
}

getImage(randomNumber)
