class Robot {
  _color: string | undefined;

  private static availableColors = ["green", "yellow"];

  static isColorAvailable(color: string): boolean {
    return Robot.availableColors.includes(color);
  }

  constructor(protected _name: string) {}

  askName() {
    console.log(`My name is ${this.name}`);
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance}`);
  }

  set color(color: string) {
    if (!Robot.isColorAvailable(color)) {
      throw new Error(`Color ${color} is not available`);
    }
    this._color = color;
  }

  set name(value: string) {
    this._name = `PREFIX_` + value;
  }

  get name() {
    return this._name + "_SUFFIX";
  }
}

class FlyingRobot extends Robot {
  private readonly jetpackSize: number;

  constructor(name: string, jetpackSize: number) {
    super(name);
    this.jetpackSize = jetpackSize;
  }

  move(distance: number) {
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
