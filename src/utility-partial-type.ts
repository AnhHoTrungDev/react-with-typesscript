interface StartShip {
  name: string;
  enableHyperJump: boolean;
}

const updateStartShip = (id: number, startShip: Partial<StartShip>) => {};
// const updateStartShip = (id: number, startShip: StartShip) => {};

updateStartShip(1, {
  name: "name",
  //   enableHyperJump: true,
});
