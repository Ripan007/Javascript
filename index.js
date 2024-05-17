const ripan = {
    firstName: 'ripan',
    lastName: 'mondal',
    birthYear: 1999,
    job: 'programmer',
    friends: ['first', 'second', 'third'],
    hasDriverLicense: true,
    calAge: function () {
        this.age = 2024 - this.birthYear
        return this.age
    },
}

//  dot notation

console.log(ripan.age)
