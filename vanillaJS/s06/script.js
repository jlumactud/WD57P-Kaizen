console.log("connected");

//What is an array?
//used to store elements
//it is an ordered collection of values/elements because of indexes.

//Basic Structures
//elements - square brackets called Array Literals.

//How to create a JS arrays?
//1. Declare and initialize an array
let array = [];

//2. Using a new keyword + Array()
let arr = new Array();

let months = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

//How to access array elements?
//we can access the array elements thru index
//index starts at zero.

console.log(months[5]);
console.log(months[11]);

//How count elements in an array?
//using .length property
console.log(months.length);

//Array Manipulation

let count = ["one", "two", "three", "four"];
//Traditional Method is using Assignment Operator (=)

console.log (count[4]); //undefined because there is no index four
count[4] = "five";
console.log(count); //adds the element at the end of an array

// OR by using array methods
//Mutator Method - a method that modifies the original array.

//Push method - adds an element at the end of an array
count.push("six");
console.log(count);

//using push method inside the function
function addElement (element) {
    count.push(element);
    console.log(count);
}

addElement("seven");

//Pop Method - removes an element at the end of an array
count.pop();
console.log(count);

//using pop method inside the function
function removeElement () {
    count.pop();
    console.log(count);
}
removeElement();

//How to add an element at the beginning of an array? Using unshift()
//Unshift method - adds the elements at the beginning of an array.
count.unshift("zero");
console.log(count);

//Shift method - removes an element at the beginning of an array.
count.shift();
console.log(count);

//sort method - it sorts the arrays from least to greatest but there is a certain limitation.
let nums = [15,32,61,130,230,13,34];
nums.sort();
console.log(nums);
//output sorts based first two digits of the number
nums.sort(
    //anonymous function because there is no user-defined function
    function (a,b)
    {
        //least to greatest or ascending order
        // return a-b;

        //greatest to least or descending order
        return b-a;
    }
);

console.log(nums); 

//reverse method
nums.reverse();
console.log(nums); //it reversed the orders based on the previous output.

//Splice and Spice
//Splice

//first parameter: index where to start omitting the element
//second parameter: number of elements to be omitted
//third parameter: elements to be added or inserted.

console.log(count); //to reference the first declared variable in Array Manipulation

let newSplice = count.splice(2);
//it deletes two elements at the beginning of an array.
console.log(newSplice);
console.log(count); //it displays the elements that was removed from splice

//Slice Method

let animals = ["tiger", "cat", "rat", "bat", "wolf"];
console.log (animals);

let newSlice = animals.slice(2);
//it removes first two elements
console.log(newSlice);
console.log(animals); //it displays all the elements even that was removed from slice() method.

newSlice = animals.slice (1,2);
//deletes specified number of elements from index 1 then return the remaining elements in the new array newSlice.
console.log(newSlice);

//concat method - it merges 2 or more arrays together.

console.log(animals);
console.log(count);

let newConcat = animals.concat(count);
console.log(newConcat);

//join method

let meal = ["chicken", "sisig", "pizza"];

let newJoin = meal.join();
console.log(newJoin); //it converts array into string

newJoin = meal.join("");
console.log (newJoin);

newJoin = meal.join(" ");
console.log (newJoin);

newJoin = meal.join(" , ");
console.log (newJoin);

//toString method - it returns a string representing the specified array and its elements.

let elements = ["b", "a", "d", 8, 5, "e"];
console.log(elements);
console.log(typeof elements[2]); //string

let newString = elements.toString();
console.log(newString);

//Accessor Method - these are methods that return a new value of representation.

//indexOf()
//lastIndexOf()

let countries = ["US", "PH", "CAN", "THAI", "PH", "SG", "HK", "PH"];

//lastindexOf() - it finds the last index of a given element.
let index = countries.lastIndexOf("PH");
console.log(index);

//indexOf() - it find the first index of a given element.
let index1 = countries.indexOf("PH");
console.log(index1); //1

//forEach() - it executes a provided function (anonymous function) once for each array element.

/*
    SYNTAX:
    forEach (
        function () {
            //statement
        }
    )
*/

let bigData = [
    {
        fn: "Piolo", ln: "Pascual"
    },

    {
        fn: "Empoy", ln: "Marquez"
    },

    {
        fn: "Gerald", ln: "Anderson"
    }
];

let result = bigData.forEach(
    function (element) {
        console.log(element)
        return element
    }
);

console.log(result); //undefined

//Q: How to create a copy of an array from the original array?
let days = ["mon", "tues", "wed", "thurs", "fri", "sat", "sun"];

//first step
//map() iterates each element in an array and returns a new array with same elements
//or different values depending on the result of functions operation
//NOTE: does not modify the original array

let mapNewDays = days.map (
    function (day) {
        return day
    }
);

console.log(mapNewDays);

//second step
//create an array of a new array using forEach()
let newDays = [];
console.log(newDays);
days.forEach (
    function (day){
        newDays.push(day);
    }
);
console.log(newDays);

//filter() - it returns an array that contains elements which passes a given condition.

let digits = [1,2,3,4,5];
let newFilter = digits.filter(
    function (element){
        return element <= 3
    }
);

console.log(newFilter); //it shows first and second element

//includes()
//it determines whether an array includes a certain value among its entries
//it returns true if a string contains a specified string
//otherwise it returns false.

//CASE SENSITIVE

let pets = ["dogs", "cats", "birds", "fishes"];
let newIncludes = pets.includes("cats");
console.log(newIncludes); //true - boolean

function checkTheWord (word) {
    if (pets.includes (word) == true) {
        return word
    }

    else {
        return `${word} not found`
        //template literals
    }
}

console.log(checkTheWord("dogs"));
console.log(checkTheWord("lion"));

//every() - it checks if "all elements" passes a given condition
console.log(digits);

let newEvery = digits.every(

    function (element) {
        return element > 1
    }
);

console.log(newEvery); //false - it returns a boolean

//some() - it checks if "at least one element" passes a given condition
//it returns true even if only some of the elements passes the given condition

let newSome = digits.some(
    function (element) {
        return element > 2
    }
);

console.log(newSome); //true - boolean

//reduce()

let newReduce = digits.reduce(
    function (a,b){
        let total = a + b;
        return total;
    }
)

console.log(newReduce); //15 - it adds all the elements inside the array
console.log(newReduce/digits.length); //3
//15/5 = 3

//Exercise 2:
let numeric = [5,11,30,118,634];

//SOLUTION 1
let nums1 = numeric.reduce(
    function (a,b) {
        return a + b
    }
);
console.log(nums1); //798
console.log(nums1/numeric.length); //159.6

//Stretch Goal
let total = 0;

for (let i = 0; i<numeric.length; i++)
{
    total = total + numeric[i];
}
console.log(total); //798
console.log(total/numeric.length); //159.6

