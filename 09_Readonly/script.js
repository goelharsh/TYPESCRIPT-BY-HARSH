// if anything is assigned as readonly then we can only read that value , ie we cannot change that value
// class Abcd {
//   constructor(public readonly name: string) {
//     // this will give error bcoz name is only read only , so we can not give any value to that
//     // this.name: value ;
//   }
// }
//____________________________-
// class newClass {
//   constructor(public readonly name: string) {}
//   //   this funciton is only reading the value of name, so it is okay
//   getName() {
//     console.log(this.name);
//   }
// }
//______________________________
// GETERS AND SETERS 
var geterSeter = /** @class */ (function () {
    function geterSeter(userName) {
        this.userName = userName;
        this.userName = userName;
    }
    Object.defineProperty(geterSeter.prototype, "name", {
        get: function () {
            return this.userName;
        },
        set: function (value) {
            this.userName = value;
        },
        enumerable: false,
        configurable: true
    });
    return geterSeter;
}());
var object = new geterSeter('harsh');
console.log(geterSeter.name);
// geterSeter.name ='goel';
// console.log(geterSeter.name)
