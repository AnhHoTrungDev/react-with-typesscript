interface StartShip {
  name: string;
  enableHyperJump: boolean;
}

type StartShipWithOutName = Omit<StartShip, "name">;
