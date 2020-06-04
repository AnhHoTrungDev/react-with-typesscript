// /////////////////////////////////
// interface Cart {
//   calculateTotal(): number;
// }

// interface Cart {
//   x: number;
// }

// interface Cart {
//   calculateTotal(options: { discountCode: number }): number;
// }

// let myCart: Cart = {
//   x: 1,
//   calculateTotal(options?: { discountCode: number }) {
//     if (options && options.discountCode) {
//       //apply discount
//     }
//     return 1;
//   },
// };

// namespace MyNamespace {
//   export const x: number = 10;
//   export interface SomeInterface {
//     y: number;
//   }
// }

// namespace MyNamespace {
//   export const getX = () => x;
//   export interface SomeInterface {
//     x: number;
//   }
// }

// MyNamespace.x;
// MyNamespace.getX();

// const someInterface: MyNamespace.SomeInterface = {
//   x: 1,
//   y: 2,
// };

// function someFunction() {
//   return 10;
// }
// namespace someFunction {
//   export const someProperty = 10;
// }

// someFunction.someProperty;

// /////////////////////////

// enum Vegetables {
//   Tomato = "tomato",
//   Onion = "onion",
// }

// namespace Vegetables {
//   export function makeSalad() {
//     console.log("Vegetables.Tomato :>> ", Vegetables.Tomato);
//     console.log("Vegetables.Onion :>> ", Vegetables.Onion);
//     return Vegetables.Tomato + Vegetables.Onion;
//   }
// }

// // export const salad = Vegetables.makeSalad();

// class Salad {}

// namespace Salad {
//   export const availableDressings = ["olive", "yoghurt"];
// }

// Salad.availableDressings.includes("olive");

import * as React from "react";
import { renderToString } from "react-dom/server";

declare module "react" {
  interface Component {
    helloWorld(): string;
  }
  export function foo(): void;
}

// React.foo(){}

React.Component.prototype.helloWorld = function () {
  return "Hello world";
};

class MyComponent extends React.Component {
  render() {
    return <div> {this.helloWorld()} </div>;
  }
}

console.log("rs :>> ", renderToString(<MyComponent />));
