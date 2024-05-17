'use strict'
function calAge(birthyear) {
    const age = 2024 - birthyear
    // console.log(firstName)

    function printAge() {
        const output = `you are ${age} , born in ${birthyear}`
        console.log(output)
        if (birthyear >= 1981 && birthyear <= 1961) {
            const str = `oh, you are a milleneal,  ${firstName}`
            console.log(str)
        }
    }
    printAge()
    return age
}

const firstName = 'ripan'
calAge(1950)
