'use strict';
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
        return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]];
    },
    orderDelivery: function (starterIndex, mainIndex, time, address) {
        console.log(
            `ordered delivered was ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}at ${time} and the location was ${address}`
        );
    },
};

orderDelivery.restaurant = {
    starterIndex: 0,
};
