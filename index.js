const numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            this.style.color = 'red'
        })
}

/*var video = new Audio('./sounds/crash.mp3')
video.play()
*/
