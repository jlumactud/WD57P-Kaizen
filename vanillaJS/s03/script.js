console.log ("connected");

//Selection Control Structure

//If Statements - conditional branching statement
//condition is true, a group of statement is executed
//condition is false, the statement is skipped

/*
    SYNTAX:
    if (condition)
    {
        //statement1
        //statement2
    }
*/

if (50 <= 30) {
    console.log("not allowed to enter");
}

// let age = prompt ("Enter your age");

// function getAge (age) {

//     if (age <= 30)
//     {
//         console.log("You are not allowed");
//     }

//     return (age);
// }

// getAge (age);

//If -Else Statement
//2 way decision statement
//it is used to make decisions and execute commands conditionally

/*
    SYNTAX:
    if (condition)
    {
        statement 1
    }
    else {
        //statement 2
    }
*/

let myAge = 75;

if (myAge === 30) {
    alert("hello from the codeblock");
} else {
    console.log ("haller sa aming bloke");
}

//Exercise 1:

/*

    Assign a variable that lets the user input a height in centimeter. Ensure that the word centimeter is indicated for proper reference.
    Create an If-Else Statement using the following conditions:

    If the height is below 150cm, display "Did not pass the minimum height requirement“.
    If the height is above 150, display "Pass the minimum height requirement“.

    Put the conditional statement inside the function.
    Ensure that the proper NAMING STANDARD is followed.


*/

// let height = prompt ("Enter your height in cm");

// function humanHeight (height) {
//     if (height >= 150) {
//         console.log ("Pass the minimum height requirements");
//     } else {
//         console.log ("Did not pass the minimum height requirements.");
//     }
// }

// humanHeight(height);

//Else If - 2 or more possible outcomes

//Syntax

/*
    if (condition)
    {
        //statement 1
    } else if (condition) {
        //statement 2
    } else {
        statement 3
    }
*/

// let price = prompt ("Enter your price:");

// if (price < 50) {
//     console.log ("affordable");
// } else if (price <= 75) {
//     console.log ("pricey");
// } else if (price <= 90) {
//     console.log ("benta ko muna atay ko");
// } else {
//     console.log ("out of budget");
// }

//Exercise 2
// let intensity = prompt ("Enter typhoon intensity");

// function tIntensity (intensity) {

//     if (intensity <= 30) 
//     {
//         console.log ("not a typhoon");
//     }

//     else if (intensity <= 61) 
//     {
//         console.log ("tropical depression is detected");

//     } 

//     else if ((intensity >= 61) && (intensity <= 88)) 
//     {
//         console.log ("tropical storm is detected");
//     }

//     else if ((intensity >= 89) && (intensity <=117))
//     {
//         console.log ("severe tropical is detected");
//     }

//     else 
//     {
//         console.log ("typhoon detected");
//     }

// }

// tIntensity(intensity);

//Switch Statement - used to perform different actions on different conditions
//compare the same expression to several different values.

//RULE OF THUMB
/*
    YOU CAN USE THIS STATEMENT WHEN YOU ARE COMPARING
    A LIST OF VALUES AGAINST A SINGLE VARIABLE

*/

/*
    SYNTAX:
    switch (expression) {
        case (condition) 1:
            //statements
            //break; stops the execution inside the switch block
        case (condition) 2:
            //statements
            //break
            .
            .
            .
            .
        default:
            //statement
            specifies the code to run if there is no match.
    }
*/

let day = prompt ("Enter a number between 1 to 7");

switch (day) 
{
    case (day = "1"):
        console.log("Monday");
        break;

    case (day = "2"):
        console.log("Tuesday");
        break;

    case (day = "3"):
        console.log("Wednesday");
        break;

    case (day = "4"):
        console.log("Thursday");
        break;

    case (day = "5"):
        console.log("Friday");
        break;

    case (day = "6"):
        console.log("Saturday");
        break;

    case (day = "7"):
        console.log ("Sunday");
        break;

    default:
        console.log("Invalid weekday");

}
