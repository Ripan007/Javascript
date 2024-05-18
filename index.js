const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[1]]: {
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

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    console.log('day', day);
    const open = restaurant.openingHours[day]?.open;
    console.log(`on ${day},we open at ${open}`);
}
