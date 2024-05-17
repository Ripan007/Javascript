'use strict'
const restaurant = {
    name: 'bhaba  ka  dhaba',
    location: 'delhi chourha',
    categories: ['indian', 'chinease', 'italian'],
    starterMenu: ['dal', 'rice', 'vegggie'],
    mainMenu: ['chicken', 'fish'],
}

let [first, , third] = restaurant.categories

let temp = first
first = third
third = temp
console.log(first, third)
