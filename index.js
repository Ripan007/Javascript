const restaurant = {
    name: 'dhaba',
    location: 'delhi van  vihar',
    categories: ['indian', 'chinease', 'itilian'],
    starterMenu: ['sweet', 'puri', 'kofta'],
    mainMenu: ['chicken', 'potato', 'dalmakhi'],
    dish: {
        first: 'vara',
    },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

for (let item of menu) {
    console.log(typeof item);
}

//  i want to  perform lot  of  task , for ta
