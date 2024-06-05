{
        //Global Execution Context

      //  browser ka alag hota h , node ka alag hota HTMLDetailsElement.

      // brower me this ke pas window object hota hai

}

// A javascript code runs in actually 2 hases
// Memoery creation phase where the values of the variables are set to undefined
//Execution Phase 

// whatever code runs , it runs in the global execution context, and this context is allocated to "this"

let a = 4 
let b = 4

function add(num1,num2)
{
  let total = num1 + num2
  return total
}

let result = add(a,b)
let result2 = add(5,6)


// In the memory creation phasse the variales will be set to undefined and the function definitio will take place i.e what will happen in the function

//  a = undefined
// b = undefined
// add = definition
//resut1 = undefined
//result2 = undefined

//Execution Phase

// Here the variables will be assigne values and the function part will be skipped

//a = 10
// b = 6

//result =  Here funcion is called so a new execution context will be created and the above will be executed again for each functions.

// After the work of the functional execution context is done it gets deleted to free up the memory