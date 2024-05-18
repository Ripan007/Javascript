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

const days = ['mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHours[day]?.open;
    console.log(`on ${day},we open at ${open}`);
}
