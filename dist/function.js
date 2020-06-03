"use strict";
//func (optional and default parameters)
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b = 0) {
    return a + (b || 0);
}
sum(1);
//Unknown number Of arguments is
function sumEverything(arg1, arg2, ...numbers) {
    return numbers.reduce((rs, num) => rs + num, 0);
}
