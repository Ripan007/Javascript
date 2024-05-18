'use strict';
const restaurant = {
    name: 'bhaba  ka  dhaba',
    location: 'delhi chourha',
    categories: ['indian', 'chinease', 'italian'],
    starterMenu: ['dal', 'rice', 'vegie'],
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
        sat: {
            open: 2,
            close: 9,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]];
    },
    orderDelivery: function ({ starterIndex = 1, mainIndex, time, address }) {
        console.log(this);
        console.log(
            `ordered delivered was ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]} at ${time} and the location was ${address}`
        );
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`pasta with ingredient ${ing1},${ing2},${ing3}`);
    },
    orderPizza: function (mainIngredients, ...restIngredients) {
        console.log('main', mainIngredients);
        console.log('rest', restIngredients);
    },
};

restaurant.numGuest = 20;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
