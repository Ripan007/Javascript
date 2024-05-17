'use strict'
function calAge(birthyear) {
    const age = 2024 - birthyear
    // console.log(firstName)
    function printAge() {
        let output = `you are ${age} , born in ${birthyear}`
        console.log(output)
        if (birthyear >= 1981 && birthyear <= 1996) {
            const firstName = 'janvi'
            output = 'chanage in the output'

            var milleneal = true
            const str = `oh, you are a milleneal,  ${firstName}`
            console.log(str)
            function add(a, b) {
                return a + b
            }
            console.log(add(10, 10))
        }
        console.log(milleneal)
        console.log(output)
    }
    printAge()
    return age
}

const firstName = 'ripan'
calAge(1991)

//  1996 -1981
