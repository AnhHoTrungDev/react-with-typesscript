interface StartShipProperty {
  color?: "blue" | "red" | "green";
}

function paintStarship1(
  id: number,
  color: NonNullable<StartShipProperty["color"]>
) {
  return { id, color };
}

type PaintStarShipReturn = ReturnType<typeof paintStarship1>;
paintStarship1(1, "blue");
