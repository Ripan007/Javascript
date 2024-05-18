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

const [players1, players2] = game.players;
const [gk, ...fieldplayers] = players1;
// console.log(gk, fieldplayers);
const allplayers = [...players1, ...players2];
// console.log(allplayers);

const playersfinal = [...players1, 'thiago', 'couthino', 'periscic'];

// important part in object  retriving
const {
    odds: { team1, x, team2 },
} = game;
console.log(team1, x, team2);

const printGoals = function () {};

printGoals();
