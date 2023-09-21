Coding Challenge 

///////////////////////////////////////
// Destructuring , The Spread Operator (...) , Rest Pattern and Parameters , Short Circuiting (&& and ||) , Logical Assignment Operators

'use strict';

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Lucas Hernandez', 'João Cancelo' and 'Thomas Müller'.
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
call the function again with players from game.scored

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

// 7.Print to the console which team is more likely to win
game.odds.team1 < game.odds.team2 &&
  console.log(`${game.team1} is more likely to win`);
game.odds.team1 > game.odds.team2 &&
  console.log(`${game.team2} is more likely to win`);

//8.call the function again with players from game.scored
game.scored = ['Karim Benzema', 'Federico Valverde', 'Sadio Mané' , 'Karim Benzema'];
game.printGoals(...game.scored);
