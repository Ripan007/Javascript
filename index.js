const ripan = {
    firstName: 'ripan',
    lastName: 'mondal',
    birthYear: 1999,
    job: 'programmer',
    friends: ['first', 'second', 'third'],
    hasDriverLicense: true,
    calAge: function () {
        // console.log(this)
        this.age = 2024 - this.birthYear
        return this.age
    },
}

console.log(ripan.age)
