Coding Challenge 

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

"use strict";

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);
const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

console.log(avgDolphins1, avgKoalas1);
console.log(avgDolphins2, avgKoalas2);

function checkWinner(avgDolphins, avgKoalas) {
  const avgD = avgDolphins;
  const avgK = avgKoalas;

  if (avgD > avgK * 2) {
    console.log(`Dolphins win (${avgD} vs. ${avgK})`);
  } else if (avgD * 2 < avgK) {
    console.log(`Koalas win (${avgK} vs. ${avgD})`);
  } else if (avgD === avgK) {
    console.log(`Its drew by the point ${avgD}`);
  } else {
    console.log("This games is not acceptable");
  }
  return;
}

const winner1 = checkWinner(avgDolphins1, avgKoalas1);

const winner2 = checkWinner(avgDolphins2, avgKoalas2);
