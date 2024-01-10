'use strict';

(function () {
  function Human(name, age) {
    this.name = name;
    this.age = age;
  }

  Human.prototype.getData = function () {
    console.log(`Name: ${this.name} & Age: ${this.age}`);
  };

  const ex1 = new Human('Ihor', 21);
  const ex2 = new Human('Sasha', 17);
  const ex3 = new Human('Illia', 22);
  const ex4 = new Human('Dasha', 29);
  console.log(ex1);
  console.log(ex2);
  console.log(ex3);
  console.log(ex4);
  ex1.getData();
  ex2.getData();
  ex3.getData();
  ex4.getData();

  function Car(brand, model, year, engine) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
  }
  Car.prototype.owner = function (owner) {
    if (owner.age >= 18) return this.owner = owner;
    console.log('Human`s age < 18');
  };
  Car.prototype.getFullData = function () {
    console.log(`Brand: ${this.brand}, model: ${this.model}, year: ${this.year}, engine: ${this.engine}`);
    if (this.hasOwnProperty('owner')) {
      this.owner.getData();
    }
  };

  const carEx1 = new Car('Tesla', 'Model 3', 2019, 'Electric');
  const carEx2 = new Car('BMW', 'X5', 2021, 'Gasoline');
  const carEx3 = new Car('Audi', 'rsQ8', 2022, 'Gasoline');

  console.log(carEx1);
  carEx1.owner(ex3);
  console.log(carEx1);
  carEx1.getFullData();

  console.log(carEx2);
  carEx2.owner(ex4);
  console.log(carEx2);
  carEx2.getFullData();

  console.log(carEx3);
  carEx3.owner(ex2);
  console.log(carEx3);
  carEx3.getFullData();
}());
