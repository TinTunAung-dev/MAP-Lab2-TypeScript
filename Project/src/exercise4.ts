let baseObject: {
    width: number,
    length: number
} = { 
	width: 0, 
	length: 0 
}; 
let rectangle: any = Object.create(baseObject); 

rectangle.width = 5; 
rectangle.length = 2; 

rectangle.calcSize = function(): number { 
	return this.width * this.length; 
}; 

console.log(rectangle.calcSize()); // 10

abstract class BaseObject {
    constructor(public width: number, public length: number) {}
    abstract calcSize(): number
}

class Rectangle extends BaseObject {
    constructor(width: number, length: number) {
        super(width, length);
    }

    calcSize(): number {
        return this.width * this.length;
    }
}
let rectangle1: Rectangle = new Rectangle(10, 6);
console.log(rectangle1.calcSize());
