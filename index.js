// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'mark',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    },
}

const john = {
    fullName: 'john',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = mass / (height * height)
        return this.bmi
    },
}

const markBmi = mark.calcBMI()
console.log(markBmi)
