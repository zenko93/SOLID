// Open Close Principle // Открыты для расширения закрыты для модификации

class Shape {
    area() {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) / 2;
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }
// прибежал заказчик и захотел еще фигурку, теперь нам нужно изменять класс AreaCalculator и так может еще 200 раз
    // sum() {
    //     return this.shapes.reduce((acc, shape) => {
    //         if (shape.type === 'circle') {
    //             acc += (shape.radius ** 2) * Math.PI;
    //         } else if (shape.type === 'square') {
    //             acc += shape.size ** 2;
    //         } else if (shape.type === 'rectangle') {
    //             acc += shape.width * shape.height;
    //         }
    //
    //         return acc;
    //     }, 0)
    // }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            return acc += shape.area();
        }, 0)
    }
}

const square = new Square(10);
const circle = new Circle(5);
const circle1 = new Circle(1);
const rect = new Rectangle(10, 20);
const triangle = new Triangle(5, 10);

const calc = new AreaCalculator([square, circle, circle1, rect, triangle]);

console.log(calc.sum())