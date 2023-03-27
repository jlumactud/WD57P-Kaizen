console.log("connected");

//JS Operators - symbols used to manipulate values/operands.
//it is used to perform specific mathematical and logical computations in operands.

//Assignment Operators (=)
//let - can be re-assigned but cannot be re-declared

let a = 14;
a = 18;

console.log(a);

let b = a;
console.log (b);

//Arithmetic Operators - performs mathematical operation on numerical values/operands and returns a single numerical value.

//Addition (+)
console.log(20+30); //it displays the sum which is a number/integer
console.log("20"+"30"); //2030 - concatenation - it links 2 strings together.
//string concatenation

//Subtraction (-)
console.log(20-10); //10 - integer/number
console.log("20"-"10"); //10 - type coercion - automatic/implicit conversion of values from one data type to another

let val1 = 50;
let val2 = "30";

let diff = val1 - val2;
console.log(diff);

console.log ("twenty" - "ten"); //NaN - not a number

//Multiplication (*)

console.log(10*5);
console.log("10" * 5); //coercion

//Division (/)
console.log(50/5);//integer
console.log("50"/5); //coercion

//Modulo (%) - remainder 
console.log(100 % 3); //1 - number
console.log("100" % 3); //coercion

//Increment (++) and Decrement (--)

let c = 30;
console.log (++c); //increased by 1
console.log(c); //31
console.log (--c); // 30 => decreased by 1
console.log(c); //30

//if operator comes first (++ and --), it performs arithmetic operations before displaying the result

console.log (c++); //30
console.log(c);
console.log(c--); //31
console.log(c);

//if operand (variable) comes first before the operator (++ and --) it displays the value of the operand before performing arithmetic operations.

// Perform arithmetic Operation on two numbers.
console.log(65+35);

// Perform arithmetic Operation on two variables with numerical values.
let f = 50;
let g = 10;

console.log(50+10);

// Multiply a number to the difference of two numbers
// 	PEMDAS RULE
let h = 4;
console.log((52-29)*h);

//Compound Assignment Operators - shorthand for arithmetic and assignment operators
//performs mathematical operation first then assigning the result back to the variable.

//Long method:
let j = 15;
console.log(j+3);
console.log(j);

//Addition-Assignment Operator (+=)
let i = 15;
console.log(i += 3); //18

//Subtraction-Assignment Operator (-=)
console.log( i -= 10); //8 wherein 18 is the final value of addition-assignment operator

//Multiplication-Assignment Operator (*=)
console.log( i *= 5); //40

//Division-Assignment Operator (/=)
console.log(i /= 2); //20

