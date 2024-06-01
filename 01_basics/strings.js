// const name = "Batman"
// const real_name = "Bruce"
// age = 22


// //we can concatinate numbers in string and using ` ` is prioritized in current times.
// console.log(`I am ${name} and I am also known as ${real_name} and I am ${age} years old`);


//We can also declare a string using a new Keyword
// Heap Memory Allocation for String Objects
// Object Creation:

// When you use new String("Superman"), JavaScript creates a new String object.
// This object is allocated in the heap memory, which is used for dynamic memory allocation.
// Reference Handling:

// The variable hero holds a reference (or pointer) to the String object in the heap.
// Unlike primitive values, which are stored directly in the stack, objects and arrays in JavaScript are stored in the heap.

const hero = new string("Superman")



// Accessing Characters
// charAt(index):

// Returns the character at the specified index.
// javascript
// Copy code
// const gameName = "Superman";
// console.log(gameName.charAt(2)); // "p"
// indexOf(substring):

// Returns the index of the first occurrence of the specified substring, or -1 if not found.
// javascript
// Copy code
// console.log(gameName.indexOf('t')); // -1 (because 't' is not in "Superman")
// String Manipulation
// substring(start, end):

// Returns a substring from the start index to the end index (not including the end index).
// javascript
// Copy code
// const newString = gameName.substring(0, 4);
// console.log(newString); // "Supe"
// slice(start, end):

// Extracts a section of the string and returns it as a new string. Negative indices count from the end.
// javascript
// Copy code
// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString); // ""
// trim():

// Removes whitespace from both ends of a string.
// javascript
// Copy code
// const newStringOne = "   hitesh    ";
// console.log(newStringOne.trim()); // "hitesh"
// Searching and Replacing
// replace(searchValue, newValue):

// Replaces the first occurrence of searchValue with newValue.
// javascript
// Copy code
// const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url.replace('%20', '-')); // "https://hitesh.com/hitesh-choudhary"
// includes(substring):

// Checks if the string contains the specified substring. Returns true or false.
// javascript
// Copy code
// console.log(url.includes('sundar')); // false
// Splitting Strings
// split(separator):
// Splits the string into an array of substrings using the specified separator.
// javascript
// Copy code
// const gameName = "Superman-Batman";
// console.log(gameName.split('-')); // ["Superman", "Batman"]
// Example Code
// Here is the example code with the methods applied:

// javascript
// Copy code
// const gameName = "Superman";

// // Accessing Characters
// console.log(gameName.charAt(2)); // "p"
// console.log(gameName.indexOf('t')); // -1 (because 't' is not in "Superman")

// // String Manipulation
// const newString = gameName.substring(0, 4);
// console.log(newString); // "Supe"

// const anotherString = gameName.slice(-8, 4);
// console.log(anotherString); // ""

// // Trimming Whitespace
// const newStringOne = "   hitesh    ";
// console.log(newStringOne); // "   hitesh    "
// console.log(newStringOne.trim()); // "hitesh"

// // Searching and Replacing
// const url = "https://hitesh.com/hitesh%20choudhary";
// console.log(url.replace('%20', '-')); // "https://hitesh.com/hitesh-choudhary"
// console.log(url.includes('sundar')); // false

// // Splitting Strings
// console.log(gameName.split('-')); // ["Superman"]
// Summary
// charAt() and indexOf() for accessing and searching characters.
// substring() and slice() for extracting parts of a string.
// trim() for removing whitespace.
// replace() and includes() for searching and replacing content.
// split() for splitting a string into an array.
// // These methods provide powerful tools for manipulating and analyzing strings in JavaScript.