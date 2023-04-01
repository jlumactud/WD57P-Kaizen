console.log("connected");

// let userInput = prompt ("Give me a number");

//Nested If
// function oddOrEven (num) {
//     if (isNaN (num) || typeof parseInt(num) !== "number")
//     //determines whether a value is NaN (Not a number) or a number.
//     {
//         return `Unexpected Input`;
//     }
//     else if (num == ''){
//         return "Please input inside the box"
//     }

//     else {
//         if (num % 2 == 0)
//         {
//             return ("even number");
//         }
//         else {
//             return ("odd number");
//         }
//     }
// }


// console.log(oddOrEven(userInput));

//Nested Loops
//it composed of outer loop and inner loop

/*
    SYNTAX:
    //outer loop
    for (init; condition; increment/decrement)
    {
        //statement
        //inner loop
        for (init; condition; increment/decrement){
            //statement of inner loop
        }

        //statement
    }
*/

// for (let i = 0; i <=2 ; i++) {
//     console.log("-outer loop");

//     for (let j=0; j<=3; j++)
//     {
//         console.log("--inner loop");
//     }
// }

// let i =0;
// while (i <=2) {
//     console.log("-outer loop");
//     i++;

//     let j=0;
//     while (j <= 3)
//     {
//         console.log("--inner loop")
//         j++;
//     }
// }

// function multiplyAll (arr)
// {
//     let product = 1;

//     for (let i=0; i <arr.length; i++)
//     {
//         for (let j=0; j < arr[i].length; j++)
//         {
//             product *= arr[i][j];
//         }
//     }

//     console.log(product);
//     return product
// }

// //invoke the function
// multiplyAll([[2,5],[9,10],[11,17,20]]);

//SOLUTION
const name = ["Karen", "Marites", "Marisol"];

//outer loop starts here
for (let i = 0; i <name.length; i++)
{
    console.log(`My name is ${name[i]}`);
    //inner loop
    for (let j = 0; j < name[i].length; j++)
    {
        console.log(`spells ${name[i][j]}`)
    }
}


