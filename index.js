'use strict'
const restaurant = {
    name: 'bhaba  ka  dhaba',
    location: 'delhi chourha',
    categories: ['indian', 'chinease', 'italian'],
    starterMenu: ['dal', 'rice', 'vegggie'],
    mainMenu: ['chicken', 'fish'],
    openingHours: {
        mon: {
            open: 9,
            close: 7,
        },
        thu: {
            open: 10,
            close: 9,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]]
    },
}

/*const [starterCourse, mainCourse] = restaurant.order(0, 1)
console.log(`starterCourse : ${starterCourse}`)
console.log(`mainCourse : ${mainCourse}`)*/

let a = 10
let b = 20
let
