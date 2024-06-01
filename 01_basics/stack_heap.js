// //  Primitive

// //  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n



// // Reference (Non primitive)

// // Array, Objects, Functions

// const heros = ["Superman", "Flash", "Bruce"];
// let myObj = {
//     name: "Batman",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);



//Stack vs Heap Memory Allocation

// let namee = "batman"
// console.log ( namee)

// let name2  = namee
// name2 = "Superman"
// console.log ( namee)
// console.log(name2);

// The primitive variables are stored in thee stack and a copy of variables are created and the changes are made in those copies only as above.

//Heap Memory Allocation

let one = {
     email : "123@gmail.com"
}
console.log(one);

let two = one 
two.email = "123@tahoo.com"
console.log(one);
console.log(two);