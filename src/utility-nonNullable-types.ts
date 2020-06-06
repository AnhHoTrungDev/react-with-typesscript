interface StartShipProperty {
  color?: "blue" | "red" | "green";
}

function paintStarship(
  id: number,
  color: NonNullable<StartShipProperty["color"]>
) {}

paintStarship(1, "blue");
