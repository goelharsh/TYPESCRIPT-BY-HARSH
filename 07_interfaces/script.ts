
// type kis type ka hoga 
type Sankhya = number;

let a: Sankhya;

// interface

interface User{
    name: string,
    userName: string,
    password: string
} 

function getUser(user: User){
    user.password
}


// we should start interface with capital letter

// 1. interface me equal nhi ata 
// 2. we can declare to same name of interface
 
interface Human{
    name: string
}

interface Human{
    age: string
}

// in above both interface has been merged 
// and now we can use any 
function abcd(human: Human){
    human.name
}

// so we can merge using interfaces

// 3. extense 
interface Food{
    name: string;
    price: number
}

interface SweetFood extends Food{
    quanity: number;
    sweetness: string
}

function getSweet(sweet: SweetFood){
    console.log(sweet.sweetness)
}

// making our object and printing sweetness 
const mySweetFood: SweetFood = {
    name: 'patisa',
    price: 230,
    quanity: 45,
    sweetness: 'high'
}
getSweet(mySweetFood);