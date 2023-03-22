console.log("connected");

// Two types of comments:

// This is a single line comment.
/* 
    This is a multi line comment 
*/

// Naming Variables
const pi = 3.1416; //constant variables cannot be re-assigned.
// pi = 2.0000;
console.log (pi); 

let name1 = "Boriz"; //let can be re-assigned
name1 = "Richard";
console.log (name1); 

// let name1 = "David"; //let cannot be declared
// console.log(name1);

// var food = "pizza"; //ES6 slowly unused var as declaring variable
// console.log (food);

//Primitive Data Types

let name = "Joel"; //String data type
name = 'Tonet';
name = `Kokou`;
console.log (name);

let age = 15; //Number or integer
console.log(age);
console.log (typeof age); //it displays the data type that was assigned in the variable

let grade = 90.5;
console.log (grade);

let myCopy; //this is an example of declaring a variable in a camel case notation.
console.log(myCopy); //it will be tag as undefined because nothing is declared in the variable.

let option1 = null;
console.log(option1);

// let 1fruit = "apple"; we do not apply a number before the word in the variable
// console.log(1fruit);

let $year = 2023;
console.log($year);

let $_year = 2023;
console.log($_year);

let __year = 2023;
console.log(__year);

// let !year = 2023;
// console.log(!year); 

//NOTE: Certain special characters are accepted when naming a variable
//NOTE: When combining special characters, it is still depends when naming a variable.

//Objects
//they have properties or key value pairs

let person = {
    //property:value

    name: "Jose Rizal", //string
    age:30, //number
    address: "Calamba, Laguna", //string
    isDoctor:true, //boolean
    spouse: null, //null
    siblings : [ //arrays
        "Paciano",
        "Maria",
        "Olympia",
        "Saturnina",
        "Josefa",
        "Narcisa",
        "Lucia",
        "Soledad",
        "Concepcion",
        "Trinidad"
    ]
}

console.log(person); //it displays the object content
console.log(person.name);
console.log(person.address);
console.log(person.siblings); //it displays an array of siblings

//NOTE: We will use dot (.) notation to call the properties in the specific object.

//Array - storage of data types

let fruits = ["Apple", "Pear", "Guava", "Aratilis", "Grapes"];

console.log (fruits);
console.log (fruits.length); //this method displays the number of elements inside the array/size of an array.
console.log (fruits[2]);
console.log (fruits[4]);

//Function
    //Function Declaration/structure
        //function keyword
        //function name and parenthesis (which holds the parameters)
        //curly braces - determines the block of codes/statements that are written inside the code block
    
function greeting (firstName, lastName) {
    //parameters a.k.a "arguments", "properties" and "attributes"

    console.log(`My name is ${firstName}, ${lastName}. It was nice to meet you!`);

}

greeting ("Annie", "Batungbakal"); //invoke function calls

greeting ("Rey", "Toro");

function product (a,b) {
    console.log("Product: ");
    return (a*b); //stops the execution of a function and returns a value
}

console.log(product(2,4));

