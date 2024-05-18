const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

// first goalKeeper
const [x, ...others1] = players1;
// second goalkeeper
const [y, ...others2] = players2;
// console.log(x, y);
// field players
// console.log(others1, others2);

// fieldplayers data => remaining all players
const allPlayers = [others1, others2];
console.log(`allPlayers data:${allPlayers}`);

// goalkeeper data
const gk = [x, y];
console.log(`goalkeeper data :${gk}`);
