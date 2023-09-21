///////////////////////////////////////
// Coding Challenge

///////////////////////////////////////
// Sort ,flat ,flatMap ,some ,every and find Methods

('use strict');

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
/// 1.

console.log('/// 1.Adding Recommended Food to Every Object');
dogs.forEach(
  arr => (arr.recommended = parseFloat(arr.weight ** 0.75 * 28).toFixed(2))
);
console.log(dogs);
/// 2.

console.log('/// 2.Check Sarah`s Dog');

const healtyEating = function (arr) {
  if (arr.curFood > (arr.recommended * 110) / 100) {
    console.log(`The Cat that Belongs to ${arr.owners} is Eating Too Much`);
  } else if (arr.curFood < (arr.recommended * 90) / 100) {
    console.log(`The Cat that Belongs to ${arr.owners} is Eating Too Little`);
  } else {
    console.log(`The Cat that Belongs to ${arr.owners} is Eating Healthy`);
  }
};

const index = dogs.findIndex(arr => arr.owners.includes('Sarah'));

healtyEating(dogs[index]);

/// 3.
console.log('/// 3.Find Selected Owners');

const ownersEatTooMuch = dogs
  .filter(arr => arr.curFood > (arr.recommended * 110) / 100)
  .map(arr => arr.owners)
  .flat();
console.log(ownersEatTooMuch.join(' and '));
const ownersEatTooLittle = dogs
  .filter(arr => arr.curFood < (arr.recommended * 90) / 100)
  .map(arr => arr.owners)
  .flat();
console.log(ownersEatTooLittle.join(' and '));

/// 4.
console.log(`/// 4.Log a String to the Console For Each Array`);

console.log(
  `All Owners of Dogs Who Eat Too Much Are ${ownersEatTooMuch.join(' and ')}`
);

console.log(
  `All Owners of Dogs Who Eat Too Little Are ${ownersEatTooLittle.join(
    ' and '
  )}`
);

/// 5.
console.log(
  `/// 5.Any Dog Eating EXACTLY the Amount of Food that is Recommended `
);
const ownersEatExactly = dogs.some(arr => arr.curFood == arr.recommended);
console.log(
  ownersEatExactly
    ? 'There Is a Dog Eating EXACTLY the Amount of Healthy Food'
    : 'There Is No Dog Eating EXACTLY the Amount of Healthy Food'
);

/// 6.
console.log(`/// 6.Any Dog Eating OK Amount of Food that is Recommended `);
const ownersEatHealthy = dogs.some(
  arr =>
    arr.curFood < (arr.recommended * 110) / 100 &&
    arr.curFood > (arr.recommended * 90) / 100
);
console.log(
  ownersEatHealthy
    ? 'There Is a Dog Eating OK Amount of Healthy Food'
    : 'There Is No Dog Eating OK Amount of Healthy Food'
);

/// 7.
console.log(
  `/// 7.An Array Containing the Dogs that Are Eating an OKAY Amount of Food`
);
const healtyEatingDogs = dogs.filter(
  arr =>
    arr.curFood < (arr.recommended * 110) / 100 &&
    arr.curFood > (arr.recommended * 90) / 100
);
console.log(healtyEatingDogs);

/// 8.
console.log(
  `/// 8.Sorted Array of dogs by Recommended Food Portion in an Ascending Order`
);

const newDogs = dogs.sort((a, b) => {
  if (a.recommended > b.recommended) return 1;
  if (a.recommended < b.recommended) return -1;
});

console.log(newDogs);
