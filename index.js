const numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            const buttonInnerHtml = this.innerHTML
            switch (buttonInnerHtml) {
                case 'w':
                    const tom1 = new Audio('sounds/tom-1.mp3')
                    tom1.play()
                    break
                case 'a':
                    const tom2 = new Audio('sounds/tom-2.mp3')
                    tom2.play()
                    break
                case 's':
                    const tom3 = new Audio('sounds/tom-3.mp3')
                    tom3.play()
                    break
                case 'd':
                    const tom4 = new Audio('sounds/tom-4.mp3')
                    tom4.play()
                    break
                case 'j':
                    const crash = new Audio('sounds/crash.mp3')
                    crash.play()
                    break
                case 'k':
                    const kick = new Audio('sounds/kick-bass.mp3')
                    kick.play()
                    break
                case 'l':
                    const snare = new Audio('sounds/snare.mp3')
                    snare.play()
                    break

                default:
                    console.log(buttonInnerHtml)
            }
        })
}

// const houseKeeper1 = {
//     yearsOfExperience: 12,
//     name: 'raju',
//     houseKeeperRepotire: ['bathroom', 'kitchen'],
// }

// create a constructor => avoid reputation

const bellBoy = function (name, yearsOfExperience, houseKeeperRepotire) {
    this.name = name
    this.yearsOfExperience = yearsOfExperience
    this.houseKeeperRepotire = houseKeeperRepotire
    return [name, yearsOfExperience, houseKeeperRepotire]
}

const bellBoy1 = new bellBoy('raju', 12, ['batching', 'basthrom'])
console.log([bellBoy1])

// console.log(houseKeeper1.yearsOfExperience)
