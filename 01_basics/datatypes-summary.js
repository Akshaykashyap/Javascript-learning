/* Data Types
 Primitive 
    1. String
    2. Number
    3. Boolean
    4. null
    5. undefined
    6. Symbol
    7. BigInt */

    const score = 100;
    const scorevalue = 100.3;

    const isLoggedIn = false;
    const  outsideTemp = null;
    let userEmail;
    
    const id = Symbol('123');
    const anotherId = Symbol('123');

    let bigNumber = 323423424234n;



/* Non-Primitive (Reference Type)
    1. Array
    2. Objects
    3. Functions */

    const heros = ['shaktiman','Thor','Captain-America','Iron-Man'];
    
   const myObj = {
       name: "Akshay",
       age: 28
   }

   let myFun = function() {
    console.log("Hello world");
   }