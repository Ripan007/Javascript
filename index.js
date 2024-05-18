const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[1]]: {
        open: 0,
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

console.log(restaurant.getMenu?.(1) ?? 'method does not exist');
