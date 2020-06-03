// // Interface
// interface Profile {
//   readonly name: string;
//   age?: number;
// }

// let profile: Profile = {
//   name: "anh",
//   age: 23,
// };

// // profile.name = "anh 1";

// //Index Signature
// interface A {
//   someProp: string;
//   [key: string]: number | string;
// }

// const a: A = { someProp: "some prop" };

// // a.y = "anme";
// // a.x = 2;

// //Call Signature

// interface Sum {
//   (a: number, b: number): number;
//   prop1: string;
// }

// const sum: Sum = (a, b) => a + b;
// sum.prop1 = "anh";

// //extending interface

// interface Parent {
//   x: string;
// }

// interface Parent2 {
//   y: string;
// }

// interface Parent3 {
//   z: string;
// }

// interface Child extends Parent,Parent3,Parent2 {}

// let child: Child = {
//   x: "anh",
//   y:"anh2",
//   z:"anh3"
// };
