const jonas = {
    name: 'jonas',
    year: 1995,
    calAge: function () {
        console.log(this)
        const age = 2024 - this.year
        return age
    },
}

jonas.calAge()

const matilda = {
    year: 1996,
}

matilda.calAge = jonas.calAge
console.log(matilda.calAge())
