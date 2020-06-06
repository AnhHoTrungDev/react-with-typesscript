"use strict";
function DeleteTable(Base) {
    return class extends Base {
        delete() { }
    };
}
class Car {
    constructor(name) {
        this.name = name;
    }
}
class User {
    constructor(name) {
        this.name = name;
    }
}
const DeleteTableCar = DeleteTable(Car);
const DeleteTableUser = DeleteTable(User);
class Profile {
}
const profile = new Profile();
profile.user = new DeleteTableUser("john");
profile.car = new DeleteTableUser("Honda");
