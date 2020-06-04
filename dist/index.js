"use strict";
class Cat {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
}
class Dog {
    constructor(name) {
        this.name = name;
    }
    setGroup(group) {
        this.group = group;
    }
    bark() { }
}
function initializeAnimal(Animal, name) {
    const animal = new Animal(name);
    //   animal.name
    animal.setGroup("mamals");
    return animal;
}
const cat = initializeAnimal(Cat, "meow");
const dog = initializeAnimal(Dog, "Bo");
dog.bark();
console.log("cat :>> ", cat);
console.log("dog :>> ", dog);
