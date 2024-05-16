const numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            const buttonInnerHtml = this.innerHTML
            switch (buttonInnerHtml) {
                case 'w':
                    let tom1 = new Audio('sounds/tom-1.mp3')
                    tom1.play()
                    break
                case 'a':
                    let tom2 = new Audio('sounds/tom-2.mp3')
                    tom1.play()
                    break
                case 's':
                    let tom3 = new Audio('sounds/tom-3.mp3')
                    tom1.play()
                    break
                case 'd':
                    let tom4 = new Audio('sounds/tom-4.mp3')
                    tom1.play()
                    break
                case 'j':
                    let crash = new Audio('sounds/crash.mp3')
                    tom1.play()
                    break
                case 'k':
                    let kick = new Audio('sounds/kick-bass.mp3')
                    tom1.play()
                    break
                case 'l':
                    let snare = new Audio('sounds/snare.mp3')
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
