const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[0]]: {
        open: 0,
        close: 2,
    },
    [weekdays[1]]: {
        open: 0,
        close: 2,
    },
    [weekdays[2]]: {
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

const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are  open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

for (const [day, { open, close }] of entries) {
    console.log(`on ${day} we open at  ${open}  and close at ${close}`);
}

//  dont take e your dream lightly , i
