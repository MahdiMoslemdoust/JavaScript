 Coding Challenge




///////////////////////////////////////
//  Sets , Maps and Which Data Structure to Use.

('use strict');

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

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
for (let [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1} : ${player}`);

const odd = Object.values(game.odds);
console.log(odd);
let sum = 0;
for (let item of odd) sum += item;
let avg = sum / odd.length;
console.log(`Average odd is ${avg}`);

const entries = Object.entries(game.odds);
console.log(entries);
for (let [team, odd] of entries) {
  let str = team === 'drew' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${str} ${odd}`);
}

const scorers = {};
for (let player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

/////// Start`s Here...

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const eventsKNum = [...gameEvents.keys()];
const eventsNum = eventsKNum.length;
console.log(`An event happened, on average, every ${90 / eventsNum} minutes`);

// 4.
for (const [key, value] of gameEvents) {
  const eventsLop =
    key <= 45
      ? `[FIRST HALF] ${key} :  ${value}`
      : `[SECOND HALF] ${key} :  ${value}`;
  console.log(eventsLop);
}
