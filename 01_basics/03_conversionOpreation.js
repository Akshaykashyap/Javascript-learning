// string to Number

let score = "56";
// console.log(typeof(score));

var valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "56" => 56
// "56abc" => NaN
// true => 1; false => 0


// Number to boolean

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// " " => false
// "Akshay" => true

// Number to string

let someNumber = 54;

let stringNumber = String(someNumber);

// console.log(typeof stringNumber);
// console.log(stringNumber);

// *********************** Operations ***************************

let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello";
let str2 = " Akshay";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2) // 122
console.log(1+ 2 + 4 + "5"); // 75


let gamecounter = 100;
++gamecounter;
console.log(gamecounter);