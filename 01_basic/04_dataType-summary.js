//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof name);

// retrun data type
//7 String => string
//Number => number
// Boolearn => boolean 
// null=> object 
// undefined=> undefined 
//Symbol=> symbol
// BigInt=> undefined


// object => object 
// function =>  function object
// arry => object

// https://262.ecma-international.org/5.1/#sec-11.4.3
