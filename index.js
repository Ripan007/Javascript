const numberOfDrumButtons = document.querySelectorAll('.button').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.button')
        [i].addEventListener('click', function () {
            alert('button got clicked')
        })
}
