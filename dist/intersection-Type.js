"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
function X(obj) {
    return obj.a + obj.b + obj.c;
}
function combine(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const objA = { a: 1 };
const objB = { b: 1 };
exports.result = combine(objA, objB);
// interface Y {
//   Y: number | undefined;
// }
// let XY: X & Y;
// XY = { x: 1 }; no
// XY = { x: 1, Y: 1 };ok
