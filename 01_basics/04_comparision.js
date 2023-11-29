// Comarision in js

console.log( 2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// we avoid this type of conversions 

console.log(null > 0); // false
console.log(null == 0) // false
console.log(null < 0); // false
console.log(null >= 0); // true

let resutl1 = console.log("2" > 1); // true Datatypes should be same whenever your compare two values.
let result2 = console.log("02" == 2); // true
console.table([resutl1,result2]); // undefined

// strict check ===

console.log("2" === 2); // false; different data type

