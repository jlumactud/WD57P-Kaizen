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