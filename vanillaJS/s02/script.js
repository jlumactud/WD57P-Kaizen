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

//Modulus-Assignment Operator (%=)
console.log (i %= 8); //4

//Comparison Operators
//compares two operands and returns a logical value (true or false)
//relational: < - less than and > - greater than

//Equality Operator or a.k.a "loose equality" (==)
//COERCION IS ALLOWED
//compares the same value REGARDLESS of data type because of coercion

console.log("Jan" == "January"); //false - different strings of data
console.log(true == true); //true
console.log (false == true); //false
console.log (true == false); //false
console.log(false == false); //true - same value of boolean
console.log (null == undefined); //true - both empty

console.log ("20" == 20); //true - type coercion
console.log (true == 1); //true - binary code
console.log (true == 2); //false
console.log (false == 0); //true - binary code

//Type Coercion - automatic/implicit conversion of values from one data type to another.
//parseInt() - for whole numbers
//parseFloat() - for decimal numbers

let ex = 75.68;
console.log(parseInt("75.68")); //75 rounded as a whole number
console.log(parseFloat("75.68")); //75.68 - it retains their decimal places
console.log(parseInt("75.68").toFixed(2)); //it displays the number of decimals in the number that was declared
console.log(parseFloat("75.68").toFixed(5)); //

//Strict Equality Operator (===)
//compares "sameness of value" and data type
//NO COERCION ALLOWED

console.log (1 === 1); //true
console.log (5 === "5"); //false
console.log (true === 1); //false
console.log (null === undefined); //false
console.log ("James" === "Daniel"); //false - different value
console.log (true === true); //true
console.log (false === true); //false - different value
console.log (false === false); //true - same value
console.log (true === false); //false

//Inequality Operator (!=) a.k.a "Loose Inequality Operator"
//it compares "difference of values"
//coercion will take place

console.log (false != true); //true
console.log (3 != 3.00); //false
console.log (null != undefined); //false
console.log (true != 1); //false - they are equal and coercion takes place

//Greater Than (>)
console.log (100 > 75); //true
console.log (95.75 > 95); //true

//Less Than (<)
console.log (45 < 50); //true
console.log (67 < 45); //false

//Greater Than or Equals To (>=)
console.log (45 >= 45); //true
console.log (44 >= 45); //false

//Less Than or Equal To (<=)
console.log (100 <= 100); //true
console.log (1 <= 0.5); //false

//Logical Operators 

//AND (&&) Operator
console.log (true && true); //true
console.log (true && false); //false
console.log (false && true); //false
console.log (false && false); //false

console.log (("Max" == "Max") && ( undefined == null)); //true
            //(T && T )
            //T

let kei = true;
let el = false;

console.log (kei > 2 && kei < 2); //false
            // F && T
            //F

console.log (kei == el); //false

let isOnline = true;
let isBoss = false;
let chatSiBoss = isOnline && isBoss;
console.log (chatSiBoss); //false

//OR Operator (||)
//it evaluates to true of either of the operation is true
//if both operands are true result is true (vice versa: if both operands are false then the result is false)

console.log (true || true); //true
console.log (true || false); //true
console.log (false || true); //true
console.log (false || false); //false

//NOT OPERATOR (!)
console.log (!true); //false
console.log (!false); //true

let isAdmin = true;
let isInstructor = "1";

let isAnswer = !isAdmin === isInstructor;
            //false === "1"
            //F - no coercion
console.log (isAnswer); //false

let faveNum = 333;
let chooseNum = 245;

let isHigher = !(chooseNum > faveNum || faveNum >= chooseNum)
             //= !(F || T)
             // = !T
             //= False
console.log (isHigher); //false

/*

Exercise:

!
(!isFalse != !isFalse && isFalse !== isTrue || 
T != T && F !== T
F && F
= F
    
(!isTrue != !isFalse && isFalse != !isTrue));
F != T && F != F
T && F
F
T || F
!F
= True

*/
