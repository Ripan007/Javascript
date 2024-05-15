const numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document
        .querySelectorAll('.drum')
        [i].addEventListener('click', function () {
            alert('button got clicked')
        })
}

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}

function calculator(num1, num2, operator) {
    return operator(num1, num2)
}

calculator(2, 3, add)
