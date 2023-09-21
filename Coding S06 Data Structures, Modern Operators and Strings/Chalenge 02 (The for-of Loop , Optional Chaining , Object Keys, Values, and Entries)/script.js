Coding Challenge 

///////////////////////////////////////
//  The for-of Loop , Optional Chaining , Looping Objects: Object Keys, Values, and Entries

'use strict';

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Karim Benzema")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 2.22
      Odd of victory Real Madrid: 2.43
Get the team names directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Federico Valverde: 1,
        Sadio Mané: 1,
        Karim Benzema: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  players1: [
    'Manuel Neuer',
    'Matthijs de Ligt',
    'Dayot Upamecano',
    'Joshua Kimmich ',
    'Serge Gnabry',
    'Leon Goretzka',
    'Leroy Sané',
    'Kingsley Coman',
    '	Eric Maxim Choupo-Moting',
    'Sadio Mané',
    'Alphonso Davies',
  ],
  subPlayers1: ['Lucas Hernandez', 'João Cancelo', 'Thomas Müller'],
  players1Final: [],
  team2: 'Real Madrid',
  players2: [
    'Thibaut Courtois',
    'Dani Carvajal',
    'Éder Militão',
    'David Alaba',
    'Ferland Mendy',
    'Toni Kroos',
    'Luka Modrić',
    'Eduardo Camavinga',
    'Federico Valverde',
    'Vinícius Júnior',
    'Karim Benzema',
  ],
  subPlayers2: ['Lucas Vázquez', 'Dani Ceballos', 'Antonio Rüdiger'],
  players2Final: [],
  allPlayers: [],
  date: '2023 , Feb 3 Fri',
  odds: {
    team1: 1.33,
    drew: 2.22,
    team2: 2.43,
  },
  scored: '1-3',
  printGoals: function (...player) {
    for (let i = 0; i <= player.length - 1; i++) {
      console.log(`${player[i]} has scored`);
    }
    return;
  },
};
game.players1Final = [...game.players1, ...game.subPlayers1];
game.players2Final = [...game.players2, ...game.subPlayers2];
game.allPlayers = [...game.players1, ...game.players2];

game.odds.team1 < game.odds.team2 &&
  console.log(`${game.team1} is more likely to win`);
game.odds.team1 > game.odds.team2 &&
  console.log(`${game.team2} is more likely to win`);

  game.scored = [
  'Karim Benzema',
  'Federico Valverde',
  'Sadio Mané',
  'Karim Benzema',
];
// 1
for (let [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${player}`);

// 2
const odd = Object.values(game.odds);
console.log(odd);
let sum = 0;
for (let item of odd) sum += item;
let avg = sum / odd.length;
console.log(`Average odd is ${avg}`);

// 3
const entries = Object.entries(game.odds);
console.log(entries);
for (let [team, odd] of entries) {
  let str = team === 'drew' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str} ${odd}`);
}

//4

const scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);
