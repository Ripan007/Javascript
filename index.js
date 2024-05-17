const jonas = {
    name: 'jonas',
    year: 1995,
    calAge: function () {
        const age = 2024 - this.year
        return age
    },
}

console.log(jonas.calAge())
