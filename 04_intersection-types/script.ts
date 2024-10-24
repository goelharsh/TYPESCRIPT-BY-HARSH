// this is union, ie either number or string
let a: number | string;
a = 12;
a = "harsh";

//intersection
// this can not happen
// let a: number & string;

// So we have to do something else
// let b: number;

// classmates is a type
type Classmates = {
  section: string;
};
type Students = {
  name: string;
};

// now we can make intersection by joining then
// now b should have both values 
type ClassmatesInStudents = Classmates & Students;
let b: ClassmatesInStudents = {
  name: "harsh",
  section: "a",
};


// Examples 
type City = {
    name: string,
    population: number
}

type Planet = {
    name: string,
    cities: number
}

type CitiesInPlanet = City & Planet;
let value: CitiesInPlanet = {
    name: 'yamuna nagar',
    population: 230000,
    cities: 2
}

