const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[1]]: {
        open: 0,
        close: 2,
    },
};

const restaurant = {
    name: 'xxx',
    starterMenu: ['rice', 'sormai'],
    mainMenu: ['dal', 'rice', 'brinjal'],
    openingHours,
    getMenu(starterIndex, mainIndex) {
        console.log(
            `the ordered dish is ${this.mainMenu[starterIndex]},${this.mainMenu[mainIndex]}`
        );
    },
};
