"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expiredVanillaCakes = exports.expiredChocolateCakes = void 0;
console.log("run =>> generics...");
//Generic Function
function genericFunction(x) {
    return x;
}
const genericArrowFunction = (x) => x;
//generic class
class GenericClass {
    constructor(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
const chocolate = [{ expiryDate: new Date() }];
const vanillaCake = [{ expiryDate: new Date() }];
const getExpiredItems = (items) => {
    const currentDate = new Date().getTime();
    return items.filter((item) => item.expiryDate.getDate() < currentDate);
};
exports.expiredChocolateCakes = getExpiredItems(chocolate);
exports.expiredVanillaCakes = getExpiredItems(vanillaCake);
const cart = {
    items: [],
    addItem(item) {
        this.items.push(item);
    },
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    },
};
