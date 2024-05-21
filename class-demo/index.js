// Introduction to Classes in JavaScript
// Classes in JavaScript provide a way to encapsulate and manage related data and functions.
// They serve as blueprints for creating objects that share similar properties and methods.
// Classes were introduced in ECMAScript 2015 (ES6) and provide a much clearer and simpler syntax compared to the earlier prototype-based approach.

// Key Concepts of Classes:
// Constructor: A special method for creating and initializing objects created with a class.
// Instance Properties: Properties that belong to individual instances of the class.
// Static Properties: Properties that belong to the class itself, not to any object instance.
// Methods: Functions that can perform actions on objects or compute and return information
// about objects.

class Car {
  constructor(brand, year) {
    this._brand = brand;
    this._year = year;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    if (newYear > 1885 && newYear <= new Date().getFullYear()) {
      this._year = newYear;
    } else {
      console.log(
        "Invalid Year, please make sure to set a year between 1885 and the current year we are in"
      );
    }
  }

  // Method that belongs to the instance of the Class
  displayInfo() {
    console.log(`This car is ${this.brand}, made in ${this.year}`);
  }

  // Create a function that takes 2 Car instances and compare their brands
  // if brands match return true either return false
  static compareBrands(carOne, carTwo) {
    if (carOne.brand === carTwo.brand) {
      return "Two cars have the same model!";
    } else {
      return "Not the same model :(";
    }
  }
}

const myCar = new Car("Jaguar", 2000);
const menarsCar = new Car("Mercedes", 2025);

console.log("Before change", myCar.year);
myCar.year = 1884;
console.log("after change", myCar.year);

// console.log(Car.compareBrands(myCar, menarsCar));
// myCar.displayInfo();
// menarsCar.displayInfo();

// console.log(myCar.brand);
