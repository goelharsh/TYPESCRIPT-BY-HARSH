class Airpod{
    // here we dont have to write let const or anything 
    price = 2300;
    image = 'image/airpod.png';
    color = 'white'

    // we dont have to write function keyword 
    playMusic(){
        console.log('Music playing')
    }

    switchMode(mode: string){
        console.log(mode);
    }
}


class AirConditioner{
    color = 'white';
    tones = 5;
    company = 'voltas';
    temperature =  22;

    turnOn(name: string){
        console.log(`Turning on ${name}.... `);
        console.log(`Turned on ${name}.`);
    }
    turnOf(){
        console.log('Turning off....');
        console.log('Turned off.')
    }
    raiseTemperature(){
        this.temperature++;
        console.log(this.temperature);
    }
    decreaseTemp(){
        console.log('Descreasing temp by 1')
    }
}

let ac = new AirConditioner();
ac.raiseTemperature();

let ac1 = new AirConditioner();
ac1.turnOn('ac1');

//__________________________________


class Pendrive{
    company: 'hp';
    price: 1200;
    data: null | string = null;

    putData(){
        console.log(`Putting data ${this.data}`)
    }
}

let pendrive1 = new Pendrive();
pendrive1.putData();


// ____________________________________

class Food{
    price = 1100;
    eat(){
        console.log('eating')
    }
}

class Sweet extends Food{   
    name= 'patisa'
}

let sweet = new Sweet();
console.log(sweet.name)



//_________________________________-

// constructor concept
// it is special method of class which is used to initialized things 
class Car{
    public company: string;
    

    constructor(name: string){
        this.company = name;
    }
    print(){
        console.log(this.company)
    }
}

let volvo = new Car('volvo')
volvo.print();


//___________________________________


class Bottle{

    // we can do this thing as well 
    // constructor(public shape: string){
    public shape: string;
    constructor(shape: string){
        this.shape = shape;
    }
    printBottle(){
        console.log(this.shape);
    }
}

// ACCESS MODIFIERS 

// By default everything is PUBLIC in class, and  (variable or function or object) are accessible OUTSIDE the class 

// If we make things PRIVATE, then we cannot use that variable or function or object OUTSIDE the class
// WE can use private inside whole class 

// protected example 
class User{
    protected balance = 1200;
}

class Admin extends User{
    private isAdmin = true;
    getBalance(){
        this.balance
    }
}

// If we make things PROTECTED, then we cannot use things OUTSIDE the class, but private is accessible in EXTENDED Classes 

// WE CAN MAKE FUNCTIONS AS private OR protected OR public  