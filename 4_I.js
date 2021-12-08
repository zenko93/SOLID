// Interface segregation Principle

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     walk() {
//         console.log(`${this.name} can walk`)
//     }
//
//     swim() {
//         console.log(`${this.name} can swim`)
//     }
//
//     fly() {
//         console.log(`${this.name} can fly`)
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null;
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null;
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null;
//     }
//
//     walk() {
//         return null;
//     }
// }
//
// const dog = new Dog('Sam');
//
// dog.walk();
// dog.swim();
// dog.fly();
//
// const eagle = new Eagle('Orel');
//
// eagle.fly();
// eagle.walk();
// eagle.swim();
//
// const whale = new Whale('Big blu friend');
//
// whale.swim();
// whale.walk();
// whale.fly();

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const flier = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

const dog = new Dog('Sam');

dog.walk();
dog.swim();

const eagle = new Eagle('Orel');

eagle.fly();
eagle.walk();

const whale = new Whale('Big blu friend');

whale.swim();
