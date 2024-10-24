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

class geterSeter{
    constructor(public userName: string){
        this.userName = userName;
    }

    get name(){
        return this.userName
    }

    set name(value: string){
        this.userName = value;
    }
}

let object = new geterSeter('harsh');
console.log(geterSeter.name);

// ____________________________________

