type AvailableDrinks = "Coffee" | "Tea" | "Orange Juice" | "Lemonade";

let JohnsDrink: AvailableDrinks;
JohnsDrink: "Coffee";

type DrinksJaneDoesNotLike = "Coffee" | "Orange Juice";
type DrinksJaneLike = "Tea" | "Lemonade" | "Mohito";

// let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesNotLike>;

let JanesDrink: Extract<AvailableDrinks, DrinksJaneLike>;

JanesDrink = "Tea";
