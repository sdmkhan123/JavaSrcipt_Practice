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

//JavaScript Arrays are used to store multiple values in a single variable
let arrOfString = ["Banana", "Orange", "Apple"];
arrOfString.push("Lemon");
console.log(arrOfString);
console.log(arrOfString.sort());
let arrOfNum = [40, 1, 5, 25,];
arrOfNum.push(21);
console.log(arrOfNum);

//he JavaScript Math object allows you to perform mathematical tasks on numbers
console.log(Math.round(4.9));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.pow(8, 2));
console.log(Math.sqrt(64));
console.log(Math.abs(-4.7));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));
//Returns a random integer from 0 to 9:
console.log(Math.floor(Math.random() * 10));
//Returns a random integer from 0 to 99:
console.log(Math.floor(Math.random() * 100));
//Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random() * 10) + 1);

//Conditional Statements
var boolValue = true;
if (boolValue == true){
    console.log("Conditional Statements is ture");
}

let age = 20;
if (age < 18) {
    console.log("Conditional Statements is ture");
} else{
    console.log("Conditional Statements is false");
}

let time = 20;
if (time < 10) {
    console.log("Good morning");
} else if (time < 20) {
    console.log("Good day");
} else {
    console.log("Good evening");
}

//Switch case stmt
let caseNum = 1;
switch (caseNum) {
    case 0:
        console.log("csae zero called");
        break;
    case 1:
        console.log("csae one called");
        break;
    default:
        console.log("csae default called");
        break;
}
//Loops stmt
for (let i = 0; i <= 10; i++){
    console.log("for loop iteration num " + i);
}
let numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
    console.log(numbers[x]);
}