///////////////////////////////////////
// Coding Challenge

///////////////////////////////////////
// Object-Oriented Programming in JavaScript, Constructor Functions and the new Operator, Prototypes,Prototypal Inheritance and The Prototype Chain, Prototypal Inheritance on Built-In Objects

('use strict');

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (name, speed) {
  this.name = name;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.name} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(`${this.name} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
bmw.brake();

console.log(bmw);

///////////

mercedes.brake();
mercedes.accelerate();
mercedes.brake();
mercedes.brake();
mercedes.accelerate();

console.log(mercedes);
