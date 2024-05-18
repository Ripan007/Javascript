const weekdays = ['mon', 'sun'];
const openingHours = {
    [weekdays[0]]: {
        open: 12,
        close: 2,
    },
};

const restaurant = {
    name: 'xxx',
    mainMenu: ['dal', 'rice', 'brinjal'],
    openingHours,
    getMenu(starterIndex) {
        console.log(`the ordered dish is ${this.mainMenu[starterIndex]}`);
    },
};

console.log(restaurant.openingHours[1]);
