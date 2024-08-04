let variable: string;
variable = 'abcd';

// here we are defining that var2 can be either string or null 
let var2: string | null;
var2 = 'abcd';
var2 = null;

// now if we have
let var3: string | number;
// and I am trying to access function of var3, then I will be access only those methods whichare common in string and number 
// var3.toLocaleString()


// now if we really want to access parameters of var3 then we can do this thing 
var3 = 12;
if(typeof var3 === 'string'){
    // var3.charAt
}
else if(typeof var3 === 'number'){
    var3.toFixed
}


// In the above example we can write only one if block 
// So solving the above example issue using functions
function abcd(variable: number | string){
    if(typeof variable === 'number'){
        variable.toLocaleString;
    }
    else if(typeof variable === 'string'){
        variable.includes;
    }
}
// Now in this function we will not get any error 
abcd(12);
