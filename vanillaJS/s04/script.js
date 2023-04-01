console.log("connected");

//For Loops - repeats a block of code as long as a certain condition is met.
// it is used to execute a block of code for certain number of times.

/*
    SYNTAX:
    for (initialization; condition; increment) - these three are what we call params(parameters)
    {
        //block of code
    }
    USAGES:
    1. initialization - initialize the counter variables and evaluated once unconditionally before the first execution of the loop body.

    2. condition - evaluated at the beginning of each iteration.
        - if true, the loop statements execute
        - if false, execution of the loop ends
    
    3. increment - updates the loop counter with a new value each time the loop runs.
*/

// for (let i = 0; i <= 5; i++)
// {
//     console.log (`This is number ${i}`);
// }

// //if the condition is <= 5 it displays the output from 0 to 5
// //if the condition is < 5 it will display the output from 0 to 4

// let herName = "Lady Ada Augusta Byron King";
// console.log (herName.length); //27
// console.log (herName[6]); //d
// console.log (herName[13]);//s

// let letter = 0;

// for (letter; letter<herName.length; letter++) 
// {
//     console.log(herName[letter])
// }

// let fruits = ["guava", "mangosteen", "santol", "durian"];
// console.log (fruits);
// fruits [4] = "banana";
// fruits [5] = "strawberry";
// console.log(fruits.length); //6

// let index = 0;
// for (index; index<fruits.length; index++)
// {
//     console.log(fruits[index])
// }

// let cars = [
//     {
//         brand: "Volkswagen",
//         type: "SUV"
//     },

//     {
//         brand: "Toyota",
//         type: "Sedan"
//     },

//     {
//         brand: "Rolls Royce",
//         type: "Phantom"
//     }
// ];

// let x = 0;

// for (x; x<cars.length; x++)
// {
//     // console.log(cars[x]); //it displays the object properties such as brand and its type
//     // console.log(cars[x].brand); //brand printed
//     console.log (cars[x].type); //it displays the property called types
// }

//while loop starts by evaluating condition
//if true, code block gets executed
//if false, code block not executed and it terminates the loop

/*
    SYNTAX: 
    while (condition)
    {
        //statement
        //increment
    }
*/

// let count = 0;
// while (count <= 5) {
//     console.log(count)
//     count++;
// }

// let i = 2;
// while (i <= 6)
// {
//     console.log(i);
//     i++;
// }

//Do-While Loop
//same as while loop
//condition is checked at the end of each iteration of the loop,rather than at the beginning before the loop runs.

/*
    SYNTAX: 

    do {
        //statement
        //increment
    } while (condition)

*/

// let count = 0;

// do {

//     console.log (count)
//     count++;

// } while (count <= 10)

//BONUS
//continue statement - breaks one iteration (in the loop) if a specified condition occurs
//continues with the next iteration of the loop
//jumps over one iteration in the loop

//skipping numbers using for loop
let text = "";
// let j = 1;

// for (j;j<8; j++ )
// {
//     if (j === 2 || j === 3) continue;
//     console.log(text += j)
// }

const car = ["BMW", "Volvo", "Saab", "Ford"];

for (let ai = 0; ai < car.length; ai++)
{
    if (car[ai] === "Saab") continue;
    console.log(text += car[ai])
}