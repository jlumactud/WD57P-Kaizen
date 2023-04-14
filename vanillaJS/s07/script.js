console.log("connected");

//object code sample
let gino = {
    firstGrading:95, //integer or number
    subject: "English", //string
    teachers: ["Jelly", "Ean", "Raymart"], //array
    isStudent: true,//boolean

    school: {
        city: "Manila",
        country: "Philippines"
    },//object
    
    classmates:[
        {
            name: "King",
            batch: "1"
        },
        {
            name: "Kim",
            batch: "2"
        },
        {
            name: "Roxy",
            batch: "3"
        }
    ],

    description: function () {
        return `${this.subject}:${this.firstGrading}`
    }
}

//Q: How do we access properties in an object?
//through dot notation
//through bracket notation
//objectName.propertyName

console.log(gino.firstGrading); //95
console.log(gino.subject); //English
console.log(gino["isStudent"]); //boolean - true
console.log(gino["teachers"]); //array of teachers
console.log(gino.teachers);
console.log(gino.school); //displays key-value pairs or objects
console.log(gino["school"]);
console.log(gino.school.city); //Manila
console.log(gino["school"]["city"]); //Manila
console.log(gino.school["city"]); //Manila

//How to access school's country?
console.log(gino["school"]["country"]); //Philippines
console.log(gino.school.country); //Philippines

console.log(gino.classmates); //array of objects
console.log(gino.classmates[1]); //Kim 2nd object
console.log(gino.classmates[0]); //King 1st object
console.log(gino.classmates[0].name); //displays name

//Q: How do we access the function in an object?
console.log(gino.description); //displays the defined function but did not execute the function

//Solution
console.log(gino.description()); //this method displays the content inside the function

//Q: How to add the property in an object?
console.log(gino.semester); //undefined
gino.semester = "first"; //this adds a new property inside the object
console.log(gino);

//Q: How to remove a property in an object?
delete gino.semester
console.log(gino);

const studentGrades = [
    {
        studentId:1,
        Q1:89.3,
        Q2:91.2,
        Q3:93.3,
        Q4:89.8
    },

    {
        studentId:2,
        Q1:69.2,
        Q2:71.3,
        Q3:76.5,
        Q4:81.9
    },

    {
        studentId:3,
        Q1:95.7,
        Q2:91.4,
        Q3:90.7,
        Q4:85.6
    },

    {
        studentId:4,
        Q1:86.9,
        Q2:74.5,
        Q3:83.3,
        Q4:86.1
    },

    {
        studentId:5,
        Q1:70.9,
        Q2:73.8,
        Q3:80.2,
        Q4:81.8
    }
];

//Instruction: compute the average of each students
//Clue: Using For Loop
for (let i = 0; i<studentGrades.length; i++)
{
    //compute the element average
    let forLoopAve = (studentGrades[i].Q1 + studentGrades[i].Q2 + studentGrades[i].Q3 + studentGrades[i].Q4)/4
    console.log(forLoopAve);
    
    //add aveProperty in each object
    studentGrades[i].forLoopAve = parseFloat(forLoopAve.toFixed(2));
}
console.log(studentGrades);

//Object Constructor
let hero = {
    name: "Angela",
    level:1,
    role:"support",
    health:100,
    attack:50,
    mana:100,

    tackle:function(){
        console.log(`This hero tackled the enemy`)

        console.log(`Enemy's health is deteriorated`)
    },

    faint:function() {
        console.log("Hero fainted")
    }
}
console.log(hero);

/*
    What if we want to create multiple objects with the same properties for each objects?
    Solution: to solve this problem we can use "Object Constructor"
    Serves as a blueprint of our objects
    Objects are created using "this" constructor
    //this will inherit what are the function properties and method set by this function
*/

//Step 1: Create a template or blueprint
function Pokemon(name,lvl,hp){
    this.name = name;
    this.level = lvl;
    this.health = hp * 2;
    this.attack = lvl;
    this.tackle = function (target) {
        console.log(target);
        console.log(`${this.name} tackled ${target.name}`);
        console.log(`${target.name}'s health is now reduced to ${target.health - this.attack}`);
    };
    this.faint = function() {
        console.log(`${this.name} fainted`);
    }
}

//Step 2: Initialize an object with arguments
let pikachu = new Pokemon("Pikachu", 5, 50);
let charizzard = new Pokemon("Charizzard", 8, 40);
console.log(pikachu);
console.log(charizzard); 
//it displays the object properties that were initialized.

//Step 3: Execute the tackle property of pikachu object
console.log(pikachu.tackle(charizzard));
console.log(pikachu.tackle(charizzard));

/*

Exercise 1: Object Constructor
Create your own person self object and with the use of object constructor, create a new person with different information out of the template.

*/

function Person (firstName, lastName, age)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = `${firstName}, ${lastName}`;
}

let jelly = new Person("Jelly", "Lumactud", 11);
console.log(jelly);

//Array of Objects
let cars = [
    {
        brand: "Toyota",
        model: "vios",
        price: 1000000
    },

    {
        brand: "Honda",
        model: "civic",
        price: 700000
    },

    {
        brand: "Toyota",
        model: "corolla",
        price: 1000000
    }
];

/*
    find()
    - iterates over items in our array and returns the item/element 
    which will satisfy the condition
    - it will return the "first" item that will satisfy the condition
    and stops the process.
    - if find() cannot satisfy its condition even after iterating all of the items/elements
    in the array, it will return undefined.
    - we can even use logical operators for our condition
    - Case sensitive
*/

let foundCar = cars.find (function (car)
    {
        console.log(car); //it displays car objects
        return (car.brand == "Toyota")
    }
);
console.log(foundCar); //it displays the specific brand of the car

if (foundCar === undefined) {
    console.log("Some data not existing");
} else {
    console.log("Data exist");
}

/*
Exercise 2: Array of Objects 
Create a new function called login.
This function should be able to receive an email and a password.
This function should be able to find the user with the correct email and password.
Save the returned user into a variable.
show the found user object in the console.

Stretch Goal:
if we can't find a user with the same email or password: Show an alert: Login Failed. Wrong Credentials.
if we did find a user with the same email or password: Show an alert: Thank you for logging in. 

*/

let users = [
	{
		username: "kimdhyn",
		email: "dahyun@gmail.com",
		password: "dahyunTwiceu"
	},
	{
		username: "jenKimBP",
		email: "jennieSolo@gmail.com",
		password: "dududuJennie",
	},
	{
		username: "lisaBP",
		email: "lisaManoban@gmail.com",
		password: "lisaIsHere"
	}
];

//SOLUTION:

function login (userEmail, userPassword)
{
    let userCredentials = users.find((user) => {
        return user.email === userEmail && user.password === userPassword
    });

    if(!userCredentials) {
        alert ("Login Failed. Wrong Credentials");
    }
    else {
        alert("Thank you for loggin in.")
        console.log(userCredentials);
    }
}

login("dahyun@gmail.com", "dahyunTwiceu");

