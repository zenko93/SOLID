// let obj = {
//     name: 'Jon',
//     toString() {
//         return this.name;
//     }
// }
//
// console.log(obj)

// function Name(name) {
//     this.say = function () {
//         console.log(name);
//     }
// }
//
// function Person() {
//
// }
//
// Person.prototype = new Name('Vanya');
//
// const pers = new Person();
// pers.say()
//
// var a = 1;

var fn = function() {
    setTimeout(function timeout() {
        console.log(`a ${a}`);
        a = 2;
    }, 0);

    var p = new Promise(function(resolve, reject) {
        console.log(`b ${a}`);
        a = 3;
        resolve();
    })

    p.then(function() {
        console.log(`c ${a}`);
        a = 4;
    }).catch(function() {
        console.log(`d ${a}`);
        a = 5;
    }).then(function() {
        console.log(`e ${a}`);
        a = 6;
    })

    console.log(`f ${a}`);
}

fn();
// b 1 | f 3 | c 3 | e 4 | a 6
