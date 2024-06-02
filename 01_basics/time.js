// let date =  Date()
// console.log(date)   //It gives full date and time string
// console.log(date.toString())  // same as above
// // console.log(date.toDateString()); //throwing error
// console.log(date.toLocaleString());
// console.log(typeof(date))

// To summarize, methods like getTime(), getFullYear(), getMonth(), etc., are only available on Date objects. They do not work directly on date strings. To use these methods, you must first convert the string to a Date object.
// Creating dates
let dateFromString = new Date();
let dateFromObject = new Date();

// toString()
console.log(dateFromString.toString()); // Sat Jan 14 2023 ...
console.log(dateFromObject.toString()); // Sat Jan 14 2023 ...

// toDateString()
console.log(dateFromString.toDateString()); // Sat Jan 14 2023
console.log(dateFromObject.toDateString()); // Sat Jan 14 2023

// toLocaleString()
console.log(dateFromString.toLocaleString()); // 14/01/2023, 12:00:00 am (format depends on locale)
console.log(dateFromObject.toLocaleString()); // 14/01/2023, 12:00:00 am (format depends on locale)

// getTime()
console.log(dateFromString.getTime()); // 1673664000000
console.log(dateFromObject.getTime()); // 1673664000000

// getFullYear()
console.log(dateFromString.getFullYear()); // 2023
console.log(dateFromObject.getFullYear()); // 2023

// getMonth() (0-indexed)
console.log(dateFromString.getMonth()); // 0 (January)
console.log(dateFromObject.getMonth()); // 0 (January)

// getDate()
console.log(dateFromString.getDate()); // 14
console.log(dateFromObject.getDate()); // 14

// getDay()
console.log(dateFromString.getDay()); // 6 (Saturday)
console.log(dateFromObject.getDay()); // 6 (Saturday)

// getHours(), getMinutes(), getSeconds(), getMilliseconds()
console.log(dateFromString.getHours()); // 0
console.log(dateFromObject.getHours()); // 0

// getTimezoneOffset()
console.log(dateFromString.getTimezoneOffset()); // Timezone offset in minutes
console.log(dateFromObject.getTimezoneOffset()); // Timezone offset in minutes

// toISOString()
console.log(dateFromString.toISOString()); // 2023-01-14T00:00:00.000Z
console.log(dateFromObject.toISOString()); // 2023-01-14T00:00:00.000Z

// toUTCString()
console.log(dateFromString.toUTCString()); // Sat, 14 Jan 2023 00:00:00 GMT
console.log(dateFromObject.toUTCString()); // Sat, 14 Jan 2023 00:00:00 GMT

// toLocaleDateString()
console.log(dateFromString.toLocaleDateString()); // 14/01/2023 (format depends on locale)
console.log(dateFromObject.toLocaleDateString()); // 14/01/2023 (format depends on locale)

// toLocaleTimeString()
console.log(dateFromString.toLocaleTimeString()); // 00:00:00 (format depends on locale)
console.log(dateFromObject.toLocaleTimeString()); // 00:00:00 (format depends on locale)
