// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    },
}

const john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    },
}

const markBmi = Math.floor(mark.calcBMI())
const johnBmi = Math.floor(john.calcBMI())
console.log(markBmi, johnBmi)

if (markBmi > johnBmi) {
    console.log(`${mark.fullName}' BMI  (${markBmi})} is higher than ${john.fullName} (${johnBmi})
}`)
} else if (johnBmi > markBmi) {
    console.log(`${john.fullName}' BMI  (${johnBmi})} is higher than ${mark.fullName} (${markBmi})
}`)
} else {
    console.log('no own wins')
}
