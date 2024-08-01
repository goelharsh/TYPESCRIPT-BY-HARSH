//  let a;  It has type 'any'  --> Not good
//best practices
var a;
var b;
var c;
var d;
var e; // e will automatically figure out that variable e has type 'number'
// Now 
// here array will get confused that whether array is array of string or number 
var arr;
// tuples 
// In TS we can define type in array called as tuples   
// here we have defined string number and boolean particularly 
var arr2 = ["harsh", 4, false];
arr2.push(4);
// here varaibale has type any, so we are able to give any type to variable 
var variable;
variable: "string";
variable: 4;
//similar to any
var ok;
variable = 12;
// jab function kuch bhi return nhi krta to never chlta hai  
// also jab ye chalta hai then uske age ka code nhi chalta 
function runInfinite() {
    while (true) {
        console.log("infinite");
    }
}
//when I am calling this function the clg is getting faded 
// runInfinite();
// console.log("hey")
function abcd() {
    return 12;
}
abcd();
// if we write number TouchEvent, abcd(). will give only methods realted to number 
// void  
function abcde() {
    console.log("Not returning anything");
}
var rightDirection = "Up";
var leftDirection = "Up";
var topDirection = "Up";
var bottomDirection = "Up";
// grouping variables 
var Direction;
(function (Direction) {
    Direction["right"] = "UP";
    Direction["left"] = "UP";
    Direction["top"] = "UP";
    Direction["bottom"] = "UP";
})(Direction || (Direction = {}));
var MousePosition;
(function (MousePosition) {
    MousePosition[MousePosition["x"] = 0] = "x";
    MousePosition[MousePosition["y"] = 0] = "y";
})(MousePosition || (MousePosition = {}));
var Human;
(function (Human) {
    Human["name"] = "harsh";
    Human[Human["age"] = 25] = "age";
})(Human || (Human = {}));
console.log(Human.age);
