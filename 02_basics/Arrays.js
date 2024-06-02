const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Using push
marvel_heros.push(dc_heros)
console.log(marvel_heros); // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
console.log(marvel_heros[3][1]); // "flash"

// Using concat
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Using spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

// Flattening arrays
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Array type and conversion
console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // ["H", "i", "t", "e", "s", "h"]
console.log(Array.from({name: "hitesh"})); // []

// Creating arrays with Array.of
let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
// Combining Arrays: Use push, concat, or the spread operator to combine arrays.
// Flattening Arrays: Use the flat method to flatten nested arrays.
// Type Checking and Conversion: Use Array.isArray to check if an object is an array, and Array.from to create arrays from iterable objects or array-like structures.
// Creating Arrays with Specific Elements: Use Array.of to create arrays with specified elements.