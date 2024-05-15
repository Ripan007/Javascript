const numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            alert('button got clicked')
        })
}


function add(num)

function calculator(num1, num2, operator) {
    return operator(num1,num2)

}