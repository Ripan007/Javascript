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

//  ripan is a 29-year old programmer, and he has driver"s a:not license

console.log(
    `${ripan.firstName} is  a ${ripan[this.age]}-year old ${
        ripan.job
    } , and he has ${ripan.hasDriverLicense ? 'a' : 'not}'} license`
)
