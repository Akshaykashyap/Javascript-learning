// string to Number

let score = "56";
console.log(typeof(score));

var valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "56" => 56
// "56abc" => NaN
// true => 1; false => 0


// Number to boolean

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// " " => false
// "Akshay" => true

// Number to string

let someNumber = 54;

let stringNumber = String(someNumber);

console.log(typeof stringNumber);
console.log(stringNumber);