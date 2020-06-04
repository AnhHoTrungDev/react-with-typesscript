"use strict";
// function someFn(myArgument: number | string | boolean) {
//   if (typeof myArgument === "string") {
//     let x = myArgument.toUpperCase();
//   } else if (typeof myArgument === "number") {
//     myArgument.toFixed();
//   } else {
//     myArgument;
//   }
function isDog(obj) {
    return obj.bark !== undefined;
}
// interface truy caapj vao xem co khong
function callMyPet(pet) {
    pet.walk();
    if (isDog(pet)) {
        pet.bark();
    }
    else {
        pet.meow();
    }
}
//class dung instanceof 
//----- ex -----
// class Foo {
//   foo: number | undefined;
//   commonProp: string | undefined;
// }
// class Bar {
//   bar: number | undefined;
//   commonProp: string | undefined;
// }
// function fooBarFunction(obj: Foo | Bar) {
//   if (obj instanceof Foo) {
//     obj.foo;
//   } else obj.bar;
// }
