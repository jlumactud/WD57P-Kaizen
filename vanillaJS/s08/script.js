console.log("connected");
//ES6 Updates (2015)

//before ES6, Math.pow() is being used for exponent operator
const firstNum = Math.pow(8,2);
console.log(firstNum);

//ES6 version, you can use **
const secondNum = 8**2;
console.log(secondNum);

//Template Literals
//allows to write strings without using the concatenation operator (+)
//greatly helps us with code readability

//pre-template literal string
    //uses single quote ('') or double quote ("")

let name = 'John';
let message = "Hello" + "" + name + "Welcome to programming!";

//Strings using template literals
    //uses backticks (``) and ${}

message = `Hello ${name}! Welcome to programming`;
console.log(`Message with template literals: ${message}`);

//Multi line using template literals
const anotherMessage = 
`
    ${name} attended a math competition.
    He won it by solving the problem
    8**2 with the solution of
    ${firstNum}
`

console.log(anotherMessage);

//template literals allow us to write strings with embedded JS expressions.
//expressions are any valid unit of code that resolves to a value
//${} are used to include JS expressions in strings using template literals.

const interestRate = 1;
const principal = 1000;

console.log(`The interest on your savings account is ${principal * interestRate}.`);

//Array Destructuring
//Syntax: let/const [variableName, variableName] = array;
//it allows to unpack elements in arrays into distinct variables
//it also allows to name array elements with variables instead of using index numbers
//it also helps with code readability

const fullName= ["Juan", "Dela", "Cruz"];
const pet = ["dogs", "cats", "birds"];

//pre-array destructuring
console.log(fullName[0]);
console.log(fullName[1]);
console.log(fullName[2]);
console.log(pet[0]);
console.log(pet[1]);
console.log(pet[2]);

//convert the message using values coming from array elements.
console.log(`Hello firstName, middleName, lastName! It's nice to see you.`);
//problem above literally display the declared message

//solution:
console.log(`Hello ${fullName[0]}, ${fullName[1]}, ${fullName[2]}! It's nice to meet you.`);

//Using Array Destructuring starting ES6
const [firstName, middleName, lastName] = fullName;
const [pet1, pet2, pet3] = pet;

//converted each elements into distinct variables
console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(`Hello ${firstName}, ${middleName}, ${lastName}! It's nice to meet you.`);
console.log(`I have three pets! I have ${pet1}, ${pet2}, and ${pet3}`);

//using array destructuring in a function
function introduce() {
    console.log(`Hi! My name is ${firstName}, ${middleName}, ${lastName}.`)
    console.log(`I have three pets! I have ${pet1}, ${pet2}, and ${pet3}`);
}
introduce();

//using array destructuring in a function (using parameters and arguments)
function introduce_2 (fn,mn,ln) {
    console.log(`Hi! My name is ${fn}, ${mn}, ${ln}`);
    console.log(`I have three pets! I have ${pet1}, ${pet2}, and ${pet3}`);
}

introduce_2(firstName, middleName, lastName);

//Object Destructuring
//it allows to unpack properties of objects into distinct variables.
//it shortens the syntax for accessing properties from objects.
//syntax: let/const {propertyName, propertyName} = object

let person = {
    givenName: "Jane",
    maidenName: "Dela",
    familyName: "Cruz"
}

//pre-Object destructuring
console.log(person.givenName);
console.log(person.maidenName);
console.log(person.familyName);

//Object Destructuring
let {givenName, maidenName, familyName } = person;

console.log(givenName); //it displays the property declared inside the object even it is already destructured.

let intro = 
`Hello ${givenName}, ${maidenName}, ${familyName}! It's good to see you! `
console.log(intro);

//object in a function still displays the information inside the object
function getFullName (personObject) {
    console.log(personObject);
    console.log(`My name is ${personObject.givenName}, ${personObject.maidenName}, ${personObject.familyName}`);
}
getFullName(person);

//Object destructuring inside a function
function getCompleteName ({givenName, maidenName, familyName})
{
    console.log(`My name is ${givenName}, ${maidenName}, ${familyName}`);
}
getCompleteName(person);

function get_FullName(personObject) {
    console.log(personObject)
    const {givenName, maidenName, familyName} = personObject;
    console.log(`My name is ${givenName}, ${maidenName}, ${familyName}!`);
}
get_FullName(person);

//Arrow Functions
//compact alternate syntax to traditional function
//useful for code snippets where creating functions will not be re-used in any other portion of the code
//adheres to DRY method ("Don't Repeat Yourself")
/*syntax: 
    let/const variableName = () => {
        //function code block
    }
*/

//Arrow function with multiline codeblock
const hello = () => {
    console.log("Hello world");
}
hello();

//Arrow function in one-line (w/o return keyword and curly braces)
const Hello = () => console.log("Hello World version 2!");
Hello();

//Traditional function
function sayHello() {
    console.log("Hello from the traditional function");
}
sayHello();

//Exercise 1:
let students = ["John", "Jane", "Judy"];

//Destructure an Array
const [student1, student2, student3] = students;

//Solution A
const greeting = () => {
    console.log(`My name is ${student1}`);
    console.log( `My name is ${student2}`);
    console.log(`My name is ${student3}`);
}
greeting();

//Solution B
const greeting_v2 = (elements) => {
    console.log(elements);
    //array destructuring
    const [s1, s2, s3] = elements;
    console.log(`Hi I'm ${s1}`);
    console.log(`Hi I'm ${s2}`);
    console.log(`Hi I'm ${s3}`);
}
greeting_v2(students);

//Implicit Return Statement
//these are instances where you can omit the return statement
//it works because even without the return statement, JS implicitly add it for the result of the function

//traditional function
function fName() {
    return 5*2
}
console.log (fName());

//function expression 
//an anonymous function being stored in a variable

const fName2 = function () {
    return 3*3
}
console.log(fName2());

//arrow function with implicit return statement
//one liner function without return and curly braces
const fName3 = () => 2*2
console.log(fName3());

//arrow function with explicit return statement 
//multi liner function code block with curly braces and return keyword

const fName4 = () => {
    return 2*9
}
console.log(fName4());

//Default Function Argument Value
//it provides a default argument value if none is provided when the function is invoked.

const myName = (name = 'User') => {
    return `Good morning, ${name}!`
}
console.log(myName()); //it displays the default value named User
console.log(myName("Angelito")); //it displays the declared argument in the invoked function

//Class-Based Object Blueprints
//allows creation/instantiation of objects using classes as blueprints

/*
    Syntax: className {
        constructor (objectPropertyA, objectPropertyB)
        {
            this.objectPropertyA = objectPropertyA;
            this.objectPropertyB = objectPropertyB;
        }
    }

*/

class Car {
    constructor (brand, name, year) {
        this.brand = brand;
        this.name = name;
        this.year = year;
    }
}

//Step1 : Instantiate an object using "new" keyword + the class name
const myCar = new Car();
console.log(myCar); //it displays undefined because we did not assign any values on it

//using an assignment operator ti assign values to properties after instantiation of an object
myCar.brand = "Ford";
myCar.name = "Ranger Raptor";
myCar.year = 2021;
console.log(myCar); //displays the defined properties in the class objects.

//instantiating a new object from the car class with initialized values
const myNewCar = new Car
("Toyota", "Vios", 2021);
console.log(myNewCar);

//Constructor - responsible for allocating (distributing) memory for the objects of the class.
//functions - represents actions that object can take
//a.k.a "methods"