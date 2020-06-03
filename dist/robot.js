"use strict";
let Robot = /** @class */ (() => {
    class Robot {
        constructor(_name) {
            this._name = _name;
        }
        static isColorAvailable(color) {
            return Robot.availableColors.includes(color);
        }
        askName() {
            console.log(`My name is ${this.name}`);
        }
        move(distance) {
            console.log(`${this.name} moved ${distance}`);
        }
        set color(color) {
            if (!Robot.isColorAvailable(color)) {
                throw new Error(`Color ${color} is not available`);
            }
            this._color = color;
        }
        set name(value) {
            this._name = `PREFIX_` + value;
        }
        get name() {
            return this._name + "_SUFFIX";
        }
    }
    Robot.availableColors = ["green", "yellow"];
    return Robot;
})();
class FlyingRobot extends Robot {
    constructor(name, jetpackSize) {
        super(name);
        this.jetpackSize = jetpackSize;
    }
    move(distance) {
        console.log(`${this.name} is flying`);
        //đảm bảo đc ghi đè lên
        super.move(distance);
    }
}
const robot = new Robot("anh");
robot.askName();
robot.move(300);
const flyingRobot = new FlyingRobot("anh", 2);
flyingRobot.move(10);
// console.log(`Flying robot's jetpack size is ${flyingRobot.name}`);
flyingRobot.name = "anh12";
console.log(`my name is ${flyingRobot.name}`);
// Robot.availableColors;
