// ************************8filter**************************

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const nums = myNums.filter ( (num) => num > 4)   //implicit return

const nums2 = myNums.filter ( (num) =>{ return num > 4} )  //explicit return

// console.log(nums);
// console.log(nums2);




// ***************************map******************************
const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const print = newNums.map((key) => {
    return key + 10
})

//console.log(print);

// ***************************chaining******************************
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr = a
          .map((key) => key * 10)  //the resultant values will pass to nexr map and so on
          .map((key) => key + 1)
          .filter((key) => key > 60)


//console.log(arr);


// ***************************reducer******************************

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const accumaulated = b.reduce((acc,curr) => acc+curr, 0 )

console.log(accumaulated);