// // Compile with --noImplicitThis

// type ObjectDescriptor<D, M> = {
//     data?: D;
//     methods?: M & ThisType<D & M>;  // Type of 'this' in methods is D & M
// }

// function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
//     let data: object = desc.data || {};
//     let methods: object = desc.methods || {};
//     return { ...data, ...methods } as D & M;
// }

// let obj = makeObject({
//     data: { x: 0, y: 0 },
//     methods: {
//         moveBy(dx: number, dy: number) {
//             this.x += dx;  // Strongly typed this
//             this.y += dy;  // Strongly typed this
//         }
//     }
// });

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
interface NumberDictionary {
  [index: string]: number | string;
}

const numberDictionary: NumberDictionary = { asss: 1 };

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

// const abcd = <Counter>(start: number) => {};

// const counter: Counter = { interval: 1, reset: () => {},abcd };
