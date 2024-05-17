'use strict'
function calAge(birthyear) {
    const age = 2024 - birthyear
    // console.log(firstName)

    function printAge() {
        const output = `you are ${age} , born in ${birthyear}`
        console.log(output)
    }
    printAge()
    return age
}

const firstName = 'ripan'
calAge(1991)
