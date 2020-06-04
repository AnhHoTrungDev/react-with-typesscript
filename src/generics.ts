console.log("run =>> generics...");
//Generic Function

function genericFunction<T, X, SomeOtherType>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

//Generic interface
interface GenericInterface<T> {
  (a: T): T;
  someProp: T;
}

interface GenericInterface<T> {
  <U>(a: U): U;
  someProp: T;
}

//generic class
class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }

  // ko dung dc P cho cac static
  //   static A: P;
  //   static someMethod(p:P) {

  //   }
}
//-------||----------
interface Expiable {
  expiryDate: Date;
}

interface ChocolateCake extends Expiable {}
interface VanillaCake extends Expiable {}

interface GetExpiredItemsFunction {
  <Item extends Expiable>(items: Array<Item>): Array<Item>;
}

const chocolate: ChocolateCake[] = [{ expiryDate: new Date() }];
const vanillaCake: VanillaCake[] = [{ expiryDate: new Date() }];

const getExpiredItems: GetExpiredItemsFunction = (items) => {
  const currentDate = new Date().getTime();
  return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

export const expiredChocolateCakes = getExpiredItems<ChocolateCake>(chocolate);
export const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCake);

interface ShoppingCart<ItemId, Item> {
  items: Array<Item>;
  addItem(this: ShoppingCart<ItemId, Item>, item: Item): void;
  getItemById(
    this: ShoppingCart<ItemId, Item>,
    itemId: ItemId
  ): Item | undefined;
}

interface Item {
  id: number;
  price: number;
}

const cart: ShoppingCart<number, Item> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItemById(id) {
    return this.items.find((item) => item.id === id);
  },
};
