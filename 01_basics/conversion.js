
let age = undefined


console.log( typeof age)
let type = Number(age)
console.log( typeof type)
console.log(type);


// 1.   23          -> type of Number                                                                                                                                            -> when consoling   Number
// 2.   “23”       -> type of String                             after Numberifying   ->  type of   ->  Number                        -> when consoling   23
// 3. “23abc” -> type of String                             after Numberifying   ->  type of   ->  Number                        -> when consoling   NAN
// 4. NULL       -> type of object                            after Numberifying   ->  type of   ->  Number                         -> when consoling   0
// 5. Undefined -> type of undefined               after Numberifying   ->  type of   ->  Number                          -> when consoling   NAN


// For Boolean empty string is false
// 0 is false
// 1 is true
// String is true
