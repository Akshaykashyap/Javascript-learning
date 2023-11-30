let firstName = "Akshay";
let lastName = "kashyap";
let repoCount = 45;

console.log(`Hello my Name is ${firstName} ${lastName} and my repo count is ${45}.`);

const gameName = new String('Akshaykashyap');

console.log(gameName.length);
console.log(gameName.charAt(6));
console.log(gameName.indexOf('s'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(0,6);
console.log(newString);

const anotherString = newString.slice(0,4);
console.log(anotherString);

const newStringOne = "   Akshay kashyap  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/Akshay%20kashyap"
console.log(url.replace('%20', ''));

console.log(url.includes('kashyap'));

const gameNameOne = new String('Akshay-kashyap-Javascript');
console.log(gameNameOne.split('-'));