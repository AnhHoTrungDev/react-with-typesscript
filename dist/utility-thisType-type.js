"use strict";
// // Compile with --noImplicitThis
function makeObject(desc) {
    let data = desc.data || {};
    let methods = desc.methods || {};
    return Object.assign(Object.assign({}, data), methods);
}
let obj = makeObject({
    data: { x: 0, y: 0 },
    methods: {
        moveBy(dx, dy) {
            this.x += dx; // Strongly typed this
            this.y += dy; // Strongly typed this
        }
    }
});
// obj.x = 10;
// obj.y = 20;
// obj.moveBy(5, 5);
// interface MyObject {
//   sayHello(): void;
// }
// interface MyObjectThis {
//   helloWorld(): string;
// }
// const myObject: MyObject & ThisType<MyObjectThis> = {
//   sayHello() {
//     return this.helloWorld();
//   },
// };
// myObject.sayHello = myObject.sayHello.bind({
//   helloWorld() {
//     return "helloWorld";
//   },
// });
// export const rs = myObject.sayHello();
// type Object = {
//   [key: string]: string;
// };
