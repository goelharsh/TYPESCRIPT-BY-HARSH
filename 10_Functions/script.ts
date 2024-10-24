// TS says that 
    // - a function should always tell return type of the function 

    // - type of parameters has to be written


// named funciton 
function food(): void{

}

// anonymous function
function(): void{

}


// arrow function
const sweet = (): void=>{

} 


// implicit return type
// ie we have not mentioned anywhere that the return type is  string, but TS has implicit the return type  
function taste(){
    return 'hey'
}


//explicit return type
// here we have explicitely mentioned that the return type is stirng 
function drive(): string{
    return 'hey'
}


// optional parameteres
// here we have made gender as optional paramters
function user(name: string, age: number, gender?: string){

}
user('harsh', 3);


// default paramters 
function defaultParam(name: string = 'defaultName'){
    console.log(name);
}
defaultParam();
defaultParam('myname');


// rest paramters 
function names(...names: string[]){
    console.log(names);
}
names('harsh','goel');