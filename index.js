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


const res1 = {
    name: 'raju',
    numOfGuest:10
}

const const2 = {
    name: 'dhaba',
    owner:'rani'
}


res1.numOfGuest = res1.numOfGuest || 10
res2.numOfGuest = res2.numOfGuest ||

