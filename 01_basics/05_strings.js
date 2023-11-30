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

const sentence = 'Akshaykashyap.';

console.log(`Character code ${sentence.charCodeAt(2)} `);

const array1 = ['Akshay', 'Kashyap'];
const array2 = ['28', 'kagnra', 'Himachal pradesh'];
const array3 =`Hello Good Morning My Name is ${array1.concat(array2)}`;

// document.body.innerHTML = array3;

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);


const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(20, '.'));

const str21 = '5';

console.log(str21.padStart(2, '0'));
// Expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);

const mood = "Happy! ";
console.log(`Today I am ${mood.repeat(2)}`);

const para = "I think Ruth's dog is cuter than your dog!";

console.log(para.replace("Ruth's", "My"));

const reg = /Dog/i;
console.log(para.replace(reg, 'ferret'));

const re = /apples/gi;
const str = "Apples are round, and apples are juicy.";
const newstr = str.replace(re, "oranges");
// document.body.innerHTML = newstr;