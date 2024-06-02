const arr1 = [1,23,4] 
const aee2 = ['batman','superman']

//Array declaration as an object

const arr3 = new Array(1,23,4)


console.log(arr1[0])
console.log(typeof arr1)
console.log(typeof arr3)


//in arrays we get access to prototyes and in that we get another prototype inside it


// slice(start, end): Returns a shallow copy of a portion of an array without modifying the original array.
console.log("A ", myArr); // A  [0, 1, 2, 3, 4, 5]
const myn1 = myArr.slice(1, 3); // [1, 2]
console.log(myn1); // [1, 2]
console.log("B ", myArr); // B  [0, 1, 2, 3, 4, 5]


// splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log("A ", myArr); // A  [0, 1, 2, 3, 4, 5]
const myn2 = myArr.splice(1, 3); // [1, 2, 3]
console.log(myn2); // [1, 2, 3]
console.log("C ", myArr); // C  [0, 4, 5]

