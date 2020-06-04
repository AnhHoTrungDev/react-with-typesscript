"use strict";
// /////////////////////////////////
// interface Cart {
//   calculateTotal(): number;
// }
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const React = __importStar(require("react"));
const server_1 = require("react-dom/server");
React.Component.prototype.helloWorld = function () {
    return "Hello world";
};
class MyComponent extends React.Component {
    render() {
        return React.createElement("div", null,
            " ",
            this.helloWorld(),
            " ");
    }
}
console.log("rs :>> ", server_1.renderToString(React.createElement(MyComponent, null)));
