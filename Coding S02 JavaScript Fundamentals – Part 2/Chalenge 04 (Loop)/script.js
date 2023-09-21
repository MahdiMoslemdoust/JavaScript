Coding Challenge
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

"use strict";

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

function calcTip(bill) {
  const bil = bill;
  if (bil > 300) {
    let tip = (bil * 20) / 100;
    return tip;
  } else if (bil < 300 && bill > 50) {
    let tip = (bil * 15) / 100;
    return tip;
  } else {
    let tip = (bil * 10) / 100;
    return tip;
  }
  return;
}

for (let i = 0; i <= bills.length - 1; i++) {
  tips[i] = calcTip(bills[i]);
  total[i] = calcTip(bills[i]) + bills[i];
}
console.log(bills);
console.log(tips);
console.log(total);

function calcAverage(arr) {
  let avg = arr;
  let arraySum;
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum += avg[i];
  }
  arraySum = sum / arr.length;
  return arraySum;
}

console.log(calcAverage(total));
console.log(calcAverage(tips));

