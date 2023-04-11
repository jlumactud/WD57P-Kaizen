console.log("Hello World!");

let fName;
let lName;
let age;
let hobbies;

const city = "Lincoln";
const hNumber = 32;
const state = "Nebraska";
const street = "Washington";

function userInfo (fName, lName, age, hobbies, city, hNumber, state, street)
{
    hobbies = ["Biking", "Mountain Climbing", "Swimming"];

    console.log (
        `First Name:`, fName,
        `\nLast Name:`, lName,
        `\nAge:`, age,
        `\nHobbies:`, hobbies,
        `\nWork Address:`,
        `\ncity:`, city,
        `\nhouse Number`, hNumber,
        `\nstate:`, state,
        `\nstreet:`, street

    );
}

userInfo ( `John`,
            `Smith`,
            `30`,
            hobbies,
            city,
            hNumber,
            state,
            street
);

function uInfo (fName, lName, age)
{
    console.log (fName, lName, `is`, age, `years of age`);
    return (fName, lName, age)
}

function hobby (hobbies) {
    hobbies = ["eating", "sleeping", "bingewatching"];
    return hobbies.toString();
}

console.log(`His hobbies are:`, hobby());

let city1 = `Lincoln`;
let house1 = 32;
let state1 = `Nebraska`;
let street1 = `Washington`;

console.log(

    `city: ${city}`,
    `\nhouse number: ${house1}`,
    `\nstate: ${state1}`,
    `\nstreet ${street1}`

);

let isMarried;

function relStat(isMarried) {
    console.log ("The value of isMarried is:");
    return (isMarried==isMarried);
}
console.log(relStat());

console.log ("==========");
//answer to number 2
let num1 = 10;
let num2 = 20;

console.log (num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 === num2);
console.log (num1 >= num2);
console.log (num1 <= num2);
num1+=30;
num1-=40;
num1*=50;
num1/=60;
console.log(num1);
console.log(num1 !== num2);

console.log("=============")
//answer to number 3

// let color = prompt ("Enter the color Black, Violet, and Pink");
// function inputColor (color) {
//     switch (color){
//         case (color = "BLACK"):
//             console.log("the color is " + color);
//             break;
//         case (color = "black"):
//             console.log("the color is " + color);
//             break;
//         case (color = "VIOLET"):
//             console.log("the color is " + color);
//             break;
//         case (color = "violet"):
//             console.log("the color is " + color);
//             break;
//         case (color = "PINK"):
//             console.log("the color is " + color);
//             break;
//         case (color = "pink"):
//             console.log("the color is " + color);
//             break;
//         default:
//             console.log("Error: Invalid color");
//     }
// }
// inputColor(color);

console.log ("=========");
//answer to number 4

// function oddOrEven (num) {
//     if (isNaN(num) || typeof parseInt(num) !== "number") {
//         return `Unexpected Input`
//     } else {
//         if (num % 2 == 0) {
//             return ("Even Number");
//         } else {
//             return ("Odd Number")
//         }
//     }
// }

// let userInput = prompt ("Give me a number");
// console.log(oddOrEven(userInput));

//answer to number 5
// let b = 20;

// for (b; b>=0; b--) {
//     if (b % 2 === 0) {
//         console.log(`number: ${b}`);
//     }
// }

// function counting (b) {
//     for (b; b>=0; b--) {
//         if (b % 2 == 0) {
//             console.log(b);
//         }
//     }
// }
// let userInput = prompt ("Enter a number from 0 to 20");
// counting(userInput);

// //answer to number 6
// let number = prompt ("Give me a number");

// for (number; number >= 0; number--)
// {
//     if(number <= 50)
//     {
//         console.log(`Currently at number ${number}. Terminating the loop `)
//     }

//     if (number % 10 === 0){
//         console.log("The number is divisible by 10. Skipping the number");
//     }

//     if (number % 5 === 0) {
//         console.log(number)
//     }
// }

//answer to number 7
//nested IFs
// let login_attempts = 3;
// let uname = prompt ("Enter a username or email");
// let pass = prompt ("Enter a password");

// function login(uname, pass) {
//     if(uname == "student@mail.com" && pass == "discovery")
//     {
//         alert ("Sucessfully login");
//     }
//     else {
//         login_attempts = login_attempts -1;
//         alert ("Login Failed Now Only" + login_attempts + "Login Attempts Available");
//         let uname = prompt ("Enter a username or email");
//         let pass = prompt ("Enter a password");

//         if(uname == "student@mail.com" && pass == "discovery")
//         {
//             alert ("Sucessfully login");
//         }
//         else {
//             login_attempts = login_attempts -1;
//             alert ("Login Failed Now Only" + login_attempts + "Login Attempts Available");
//             let uname = prompt ("Enter a username or email");
//             let pass = prompt ("Enter a password");

//             if(uname == "student@mail.com" && pass == "discovery")
//             {
//                 alert ("Sucessfully login");
//             }

//             else {
//                 login_attempts = login_attempts -1;
//                 alert ("Login Failed Now Only" + login_attempts + "Login Attempts Available");
//             }
            

//         }
//     }
// }

// login(uname, pass);

//loops
let i= 3;
while (i !=0) //loop runs 3 times
{
    let userName = "student@mail.com";
    let uName = prompt ("Enter username or email");
    let userPassword = "discovery";
    let pass = prompt ("Enter a password");

    if (userName == uName && userPassword == pass)
    {
        i = 4-i;
        alert("Sucessfully login");
        break;
    }
    else {
        i = i-1;
        alert ("Login Failed Now Only" + i + "Login Attempts Available")
    }
}

