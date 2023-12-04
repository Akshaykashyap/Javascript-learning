// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

//let myCreateDate = new Date(2023,0,23);
// let myCreateDate = new Date(2023,0,23,5,3);
let myCreateDate = new Date("01-14-2023");
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(myCreateDate.getDay());

let newValue = myDate.toLocaleTimeString('default', {
    weekday: "long",
    day: "2-digit",
})
console.log(newValue);
