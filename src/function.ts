//func (optional and default parameters)

function sum(a: number, b: number = 0): number {
  return a + (b || 0);
}

sum(1);

//Unknown number Of arguments is

function sumEverything(
  arg1: string,
  arg2: boolean,
  ...numbers: number[]
): number {
  return numbers.reduce((rs, num) => rs + num, 0);
}

//Overloads
// function sum2(a: number, b: number): number;

// function sum2(length: number): number;

// const rs = sum2(3);
// console.log(`rs = ${sum2(3)}`);

export interface sum2 {
  (a: number, b: number): number;
}
