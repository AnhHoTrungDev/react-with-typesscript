interface StartShip {
  name: string;
  enableHyperJump: boolean;
}

type StartShipNameOnly = Pick<StartShip, "name">;
