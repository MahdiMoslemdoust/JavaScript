///////////////////////////////////////
// Coding Challenge

///////////////////////////////////////
// ES6 Classes, Setters and Getters,

('use strict');

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }
  get speedUS() {
    return `${this.name}'s current speed is ${this.speed / 1.6}mi/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
ford.accelerate();
ford.accelerate();
ford.brake();
console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford.speedUS);
console.log(ford);
