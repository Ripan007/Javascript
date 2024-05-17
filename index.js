'use strict'
const restaurant = {
    name: 'bhaba  ka  dhaba',
    location: 'delhi chourha',
    categories: ['indian', 'chinease', 'italian'],
    starterMenu: ['dal', 'rice', 'vegggie'],
    mainMenu: ['chicken', 'fish'],
}

let [main, , secondary] = restaurant.categories

const temp = main
main = secondary
secondary = temp
console.log(main, secondary)
