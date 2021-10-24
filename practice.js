console.log("Welcome to JavaSrcipt Practice!!..");
let numType = 16;
console.log("num type "+ numType);
let lastName = "Johnson";
console.log("string type "+ lastName);
//Object type data
let objectType = {firstName:"John", lastName:"Doe"};
console.log(objectType.firstName + " and "+ objectType.lastName);
//JavaScript Types are Dynamic
let DynamicType;
DynamicType = 5;
console.log("num type: "+ DynamicType);
DynamicType = "John";
console.log("string type: " + DynamicType);
//Booleans type data
let boolx = 5;
let booly = 5;
let boolz = 6;
console.log(boolx == booly);// Returns true
console.log(booly == boolz);// Returns false
//JavaScript Booleans
console.log(typeof ""  );           // Returns "string"
console.log(typeof "John");         // Returns "string"
let car;    // Value is undefined, type is undefined
console.log("undefined type data: " +car);
let car1 = "";    // The value is "", the typeof is "string
console.log("Empty type data "+car1);

//UC-2 Functions
let funReturn = myFunction(4, 3);
console.log("Product of two num with local var: "+funReturn);
function myFunction(a, b) {
    let c = 30;
    return a * b * c;
}