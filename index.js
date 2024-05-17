const jonas = {
    name: 'jonas',
    year: 1995,
    calAge: function () {
        // console.log(this)
        const age = 2024 - this.year
        return age
    },
}

const f = jonas.calAge()
f()
