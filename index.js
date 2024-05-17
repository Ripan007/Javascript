const ripan = {
    firstName: 'ripan',
    lastName: 'mondal',
    birthYear: 1999,
    job: 'programmer',
    friends: ['first', 'second', 'third'],
    hasDriverLicense: true,
    calAge: function (birthYear) {
        return 2024 - birthYear
    },
}

//  dot notation

console.log(ripan.calAge(1995))
//  bracket notation
console.log(ripan['calAge'](1990))
