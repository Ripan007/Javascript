const numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            const buttonInnerHtml = this.innerHTML
            switch (buttonInnerHtml) {
                case w:
                    let tom1 = new Audio('./sounds/tom1.mp3')
                    tom1.play()
                    break

                default:
                    console.log(buttonInnerHtml)
            }
        })
}

/*var video = new Audio('./sounds/crash.mp3')
video.play()
*/
