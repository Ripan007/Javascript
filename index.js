const restaurant = {
    name: 'xxx',
    mainMenu: ['dal', 'rice', 'brinjal'],
    openingHours: {
        mon: {
            open: 12,
            close: 2,
        },
    },
    getMenu(starterIndex) {
        console.log(`the ordered dish is ${this.mainMenu[starterIndex]}`);
    },
};

restaurant.getMenu(1);
