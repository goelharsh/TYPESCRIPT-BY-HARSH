//  let a;  It has type 'any'  --> Not good

//best practices
let a: number; 
let b: string;
let c: [];
let d: boolean;

let e: 5 // e will automatically figure out that variable e has type 'number'


// Now 
// here array will get confused that whether array is array of string or number 
let arr: [1,2,3,4,"harsh"];

// tuples 
// In TS we can define type in array called as tuples   
// here we have defined string number and boolean particularly 
let arr2: [string, number, boolean] = ["harsh", 4, false];
arr2.push(4);


// here varaibale has type any, so we are able to give any type to variable 
let variable: any;
variable:"string"
variable:4;

//similar to any
let ok: unknown;
variable = 12;


// jab function kuch bhi return nhi krta to never chlta hai  
// also jab ye chalta hai then uske age ka code nhi chalta 
function runInfinite(): never {
    while(true){
        console.log("infinite")
    }
}

//when I am calling this function the clg is getting faded 
// runInfinite();
// console.log("hey")


function abcd(): number{
    return 12;
}

abcd()
// if we write number TouchEvent, abcd(). will give only methods realted to number 



// void  
function abcde(): void{
    console.log("Not returning anything")
}


let rightDirection = "Up";
let leftDirection = "Up";
let topDirection = "Up";
let bottomDirection = "Up";

// grouping variables 
enum Direction{
    right = "UP",
    left = "UP",
    top = "UP",
    bottom = "UP",

}


enum MousePosition{
    x= 0,
    y = 0
}

enum Human{
    name= "harsh",
    age= 25,
}
console.log(Human.age)


