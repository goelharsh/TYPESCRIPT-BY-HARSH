// let a:number;
// let b: string;


// we are able to make our own type 
// primitive type aliases 
type Name = string;
let a: Name;

type sankhya = number;
let b: number;


//abject type aliases
type Human = {
    name: string,
    age: string,
    email: string
}
let harsh: Human  ={
    name: 'goel',
    age:'23',
    email: 'hgoel95@gmail.com'
};
// so harsh will accept name age email 

type Box = {
    weight: number,
    color: string
}

let box  = {
    name: 'mybox',
    weight: 4,
    color: 'blue'
}
console.log(box);