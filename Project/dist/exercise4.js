"use strict";
let baseObject = {
    width: 0,
    length: 0
};
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10
class BaseObject {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
}
class Rectangle extends BaseObject {
    constructor(width, length) {
        super(width, length);
    }
    calcSize() {
        return this.width * this.length;
    }
}
let rectangle1 = new Rectangle(10, 6);
console.log(rectangle1.calcSize());
